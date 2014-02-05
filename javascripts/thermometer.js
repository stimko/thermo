Thermometer = function(){};
Thermometer.prototype = {
  startAngle: 0.7 * Math.PI,
  degrees: 0,
  targetDegrees: 32,
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
    {"90":[255, 171, 82]}
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
    var degrees = this.getCurrentDegrees() * 7;
    var percentage = (degrees/this.targetDegrees);
    
    var currentR = this.startR + ((this.targetR - this.startR) * percentage)
    var currentG = this.startG + ((this.targetG - this.startG) * percentage)
    var currentB = this.startB + ((this.targetB - this.startB) * percentage)

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

        this.targetR = Math.round(this.spectrum[i-1][nextThreshold][0] + ((this.spectrum[i][threshold][0] - this.spectrum[i-1][nextThreshold][0]) * percentage));
        this.targetG = Math.round(this.spectrum[i-1][nextThreshold][1] + ((this.spectrum[i][threshold][1] - this.spectrum[i-1][nextThreshold][1]) * percentage));
        this.targetB = Math.round(this.spectrum[i-1][nextThreshold][2] + ((this.spectrum[i][threshold][2] - this.spectrum[i-1][nextThreshold][2]) * percentage));
        break;              
      }
    }            

  },
  getCurrentDegrees: function () {
    return ((this.getElapsedTime()/1000) / 60 * 360)
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