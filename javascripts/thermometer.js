Thermometer = function(){};
Thermometer.prototype = {
  startAngle: 0.7 * Math.PI,
  DEGREE_MULTIPLIER: 7,
  degrees: 0,
  targetDegrees: 0,
  currentAngleDegrees:0,
  currentTemperatureDegrees:0,
  startTime: 0,
  animating: false,
  startR: 34,
  startG: 104,
  startB: 196,
  targetR: 0, 
  targetG: 0, 
  targetB: 0,
  spectrum: [
    {"0": [34, 104, 196]},
    {"32":[82, 205, 242]},
    {"40": [242, 250, 230]},
    {"60":[255, 171, 82]},
    {"90":[255, 37, 8]}
  ],
  start: function(targetDegrees) {
    this.setTargetColors(targetDegrees);
    this.startTime = +new Date();
    this.animating = true;
  },
  stop: function() {
    this.elapsed = (+new Date()) - this.startTime;
    this.animating = false;
  },
  getCurrentColor: function() {
    var percentage = (this.currentTemperatureDegrees/this.targetDegrees);
    var currentR = this.computeRGB(this.startR ,this.targetR, percentage);
    var currentG = this.computeRGB(this.startG ,this.targetG, percentage);
    var currentB = this.computeRGB(this.startB ,this.targetB, percentage);

    return "rgb(" + Math.floor(currentR) + "," + Math.floor(currentG) + "," + Math.floor(currentB) +")";
  },
  setTargetColors: function (targetDegrees) {
    this.targetDegrees = targetDegrees;
    var i = this.spectrum.length;
    while (i--) {
      var threshold = Object.keys(this.spectrum[i])[0],
          nextThreshold = Object.keys(this.spectrum[i-1])[0];

      if (targetDegrees <= threshold && targetDegrees > nextThreshold) {
        var thresholdDifference = Object.keys(this.spectrum[i])[0] - Object.keys(this.spectrum[i-1])[0];
        var differenceInDegrees = targetDegrees - nextThreshold;
        var percentage = differenceInDegrees/thresholdDifference;

        this.targetR = this.computeRGB(this.spectrum[i-1][nextThreshold][0], this.spectrum[i][threshold][0], percentage);
        this.targetG = this.computeRGB(this.spectrum[i-1][nextThreshold][1], this.spectrum[i][threshold][1], percentage);
        this.targetB = this.computeRGB(this.spectrum[i-1][nextThreshold][2], this.spectrum[i][threshold][2], percentage);
        break;              
      }
    }            
  },
  computeRGB: function (start, end, percentage){
    return Math.round(start + ((end - start) * percentage));
  },
  getCurrentAngleDegrees: function () {
    this.currentAngleDegrees = ((this.getElapsedTime()/1000) / 60 * 360);
    return this.currentAngleDegrees;
  },
  getCurrentTemperatureDegrees: function (){
    this.currentTemperatureDegrees = Math.round(this.currentAngleDegrees * this.DEGREE_MULTIPLIER);
    return this.currentTemperatureDegrees;  
  },
  getElapsedTime: function() {
    if (this.animating) {
      return (+new Date()) - this.startTime;  
    }
    else {
      return this.elapsed; 
    }
  },
  isAnimating: function() {
    return this.animating;  
  },
  reset: function(){
    this.elapsed = 0;
  }
};