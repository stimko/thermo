Thermometer = function(){};
Thermometer.prototype = {
  startAngle: 0.7 * Math.PI,
  degrees: 0,
  targetDegrees: 90,
  startTime: 0,
  animating: false,
  currentR: 34,
  currentG: 104,
  currentB: 196,
  targetRs: [244, 216],
  targetGs: [191, 17],
  targetBs: [46, 17],
  
  start: function() {
    this.startTime = +new Date();
    this.animating = true;
  },
  
  stop: function() {
    this.elapsed = (+new Date()) - this.startTime;
    this.animating = false;
  },

  getCurrentColor: function() {
    if ((this.getCurrentDegrees() * 4) >= 60) {
      //this.currentR -= 1;
      this.currentG -= 4;
      this.currentB -= 1;  

    } else {
      this.currentR += 3;
      this.currentG += 1;
      this.currentB -= 2;  
    }
    return "rgb(" + this.currentR + "," + this.currentG + "," + this.currentB +")";
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