var canvas = document.getElementById('thermometer'),
    context = canvas.getContext('2d'),
    ANGLE_MULTIPLIER = 8,
    DEGREE_MULTIPLIER = 4,
    thermometer = new Thermometer(),
    degreeElement = document.getElementById('degrees'),
    centerX = canvas.width / 2,
    centerY = canvas.height / 2,
    initialAngle = 0.7 * Math.PI,
    endingAngle = 0.3 * Math.PI,
    currentR = 34,
    currentG = 104,
    currentB = 196,
    targetRs = [244, 216],
    targetGs = [211, 17],
    targetBs = [46, 17];


function drawMercury() {
   
  var angle = initialAngle, 
      thermometerElapsed = thermometer.getElapsedTime(),
      degrees;

  if (thermometerElapsed) {
     degrees = thermometer.getCurrentDegrees();
     angle = ((Math.PI / 180) * degrees) * ANGLE_MULTIPLIER;
     degreeElement.innerHTML = Math.round(degrees * 4) + '°'; 
   }
  
  context.save();
/*   var radgrad = context.createRadialGradient(300, 200, 100, 300, 300, 300);
  radgrad.addColorStop("0", "skyblue");
  radgrad.addColorStop("1", "blue"); */
  context.strokeStyle = "rgb(" + currentR + "," + currentG + "," + currentB +")";
  //244, 211, 46
  //216, 17, 17
  context.lineWidth = "45";
  context.beginPath();
  context.arc(centerX, centerY, 150, initialAngle, (initialAngle + angle), false);
  context.stroke();
  context.restore();
}

function convertDegreesToRadians(degrees){
  return (Math.PI / 180) * degrees;
}

function animate() {
  if (thermometer.isAnimating() &&
      thermometer.getCurrentDegrees() * 4 > 145) { // animation is over
      thermometer.stop();
   }
   else if (thermometer.isAnimating()) { // animation is running
     redraw();
     requestNextAnimationFrame(animate);
   } 
}

function redraw() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  drawBackDrop();
  drawMercury(); 
}

function drawBackDrop() {
  var radius = 160;
  context.beginPath();
  context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
  context.fillStyle = '#969696';
  context.fill();
  context.strokeStyle = '#969696';
  context.stroke();
  context.beginPath();
  context.lineWidth = "45";
  context.arc(centerX, centerY, 150, initialAngle, endingAngle, false);
  context.strokeStyle = '#D4D4D4';
  context.stroke();    
}

function init() {
  thermometer.start();
  requestNextAnimationFrame(animate); 
}

init();