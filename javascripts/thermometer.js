Thermometer = function(){};
Thermometer.prototype = {
  startAngle: 0.7 * Math.PI,
  degrees: 0,
  targetDegrees: 60,
  startTime: 0,
  animating: false,
  startR: 34,
  startG: 104,
  startB: 196,
  targetR: 255, 
  targetG: 171, 
  targetB: 82,
  
  start: function() {
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