Thermometer = function(){};
Thermometer.prototype = {
  startAngle: 0.7 * Math.PI,
  degrees: 0,
  startTime: 0,
  animating: false,
  
  start: function() {
    this.startTime = +new Date();
    this.animating = true;
  },
  
  stop: function() {
    this.elapsed = (+new Date()) - this.startTime;
    this.animating = false;
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