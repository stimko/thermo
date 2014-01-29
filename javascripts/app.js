var canvas = document.getElementById('thermometer'),
    context = canvas.getContext('2d'),
    ANGLE_MULTIPLIER = 8,
    DEGREE_MULTIPLIER = 4,
    thermometer = new Thermometer(),
    degreeElement = document.getElementById('degrees');

function drawMercury() {
  var thermometerElapsed = thermometer.getElapsedTime(),
      angle,
      radgrad;

  if (thermometerElapsed) {
     angle =  convertDegreesToRadians(thermometer.getCurrentDegrees()) * ANGLE_MULTIPLIER;
     degreeElement.innerHTML = Math.round(thermometer.getCurrentDegrees() * DEGREE_MULTIPLIER) + '°'; 
   }
  
  radgrad = context.createRadialGradient(300, 300, 0, 300, 300, 300);
  radgrad.addColorStop("0", "blue");
  radgrad.addColorStop("1", "skyblue");
  context.strokeStyle = radgrad;
  context.lineWidth = "45";
  context.beginPath();
  context.arc(200, 200, 150, thermometer.startAngle, (thermometer.startAngle + angle), false);
  context.stroke();
}

function convertDegreesToRadians(degrees){
  return (Math.PI / 180) * degrees
}

function animate() {
  if (thermometer.isAnimating() &&
      thermometer.getElapsedTime() > 10000) { // animation is over
      thermometer.stop();
   }
   else if (thermometer.isAnimating()) { // animation is running
     redraw();
     requestNextAnimationFrame(animate);
   } 
}

function redraw() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  drawMercury(); 
}

function init() {
  thermometer.start();
  requestNextAnimationFrame(animate); 
}

init();