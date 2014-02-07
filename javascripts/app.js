var canvas = document.getElementById('thermometer'),
    context = canvas.getContext('2d'),
    ANGLE_MULTIPLIER = 10,
    thermometer = new Thermometer(),
    degreeElement = document.getElementById('degrees'),
    centerX = canvas.width / 2,
    centerY = canvas.height / 2,
    initialAngle = 0.7 * Math.PI,
    endingAngle = 0.3 * Math.PI;

function drawMercury(degrees) {
  var angle = initialAngle, 
      thermometerElapsed = thermometer.getElapsedTime();
  if (thermometerElapsed) {
     angle = convertDegreesToRadians(degrees) * ANGLE_MULTIPLIER;
     degreeElement.innerHTML = thermometer.getCurrentTemperatureDegrees() + '°'; 
   }
  context.strokeStyle = thermometer.getCurrentColor();
  context.lineWidth = "45";
  context.beginPath();
  context.arc(centerX, centerY, 150, initialAngle, (initialAngle + angle), false);
  context.stroke();
}
function convertDegreesToRadians(degrees){
  return (Math.PI / 180) * degrees;
}
function animate() {
  if (thermometer.isAnimating() &&
      thermometer.currentTemperatureDegrees >= thermometer.targetDegrees) {
      thermometer.stop();
      if (thermometer.currentTemperatureDegrees !== thermometer.targetDegrees){
        thermometer.currentAngleDegrees = ((thermometer.targetDegrees * thermometer.currentAngleDegrees)/thermometer.currentTemperatureDegrees);
        redraw(thermometer.currentAngleDegrees);
      }
   }
   else if (thermometer.isAnimating()) {
     redraw(thermometer.getCurrentAngleDegrees());
     requestNextAnimationFrame(animate);
   } 
}
function redraw(degrees) {
  context.clearRect(0, 0, canvas.width, canvas.height);
  drawBackDrop();
  drawConditions();
  drawMercury(degrees); 
}
function drawConditions(){
  Conditions['rain']();
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
  thermometer.start(75);
  requestNextAnimationFrame(animate); 
}
init();