Thermometer = function(){};
Thermometer.prototype = {
  startAngle: 0.7 * Math.PI,
  startTime: 0,
  running: false,
  
  start: function() {
    this.startTime = +new Date();
    this.running = true;
  },
  
  stop: function() {
    this.elapsed = (+new Date()) - this.startTime;
    this.running = false;
  },
  
  getCurrentDegrees: function () {
    return ((this.getElapsedTime()/1000) / 60 * 360)
  },

  getElapsedTime: function() {
    if (this.running) {
      return (+new Date()) - this.startTime;  
    }
    else {
      return this.elapsed; 
    }
  },
  
  isAnimating: function() {
    return this.running;  
  },
  
  reset: function(){
    this.elapsed = 0;
  }
};