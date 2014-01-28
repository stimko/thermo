var canvas = document.getElementById('thermometer'),
    thermometer = new Thermometer(),
    degreeElement = document.getElementById('degrees'),
    context = canvas.getContext('2d');

function drawMercury() {
   var initialAngle = 0.7 * Math.PI,
       angle = initialAngle, 
       thermometerElapsed = thermometer.getElapsedTime(),
       degrees;

  if (thermometerElapsed) {
     degrees = ((thermometerElapsed/1000) / 60 * 360);
     angle = ((Math.PI / 180) * degrees) * 8;
     degreeElement.innerHTML = Math.round(degrees * 4) + '°'; 
   }
  
  var radgrad = context.createRadialGradient(300, 300, 0, 300, 300, 300);
  radgrad.addColorStop("0", "blue");
  radgrad.addColorStop("1", "skyblue");
  context.strokeStyle = radgrad;
  context.lineWidth = "45";
  context.beginPath();
  context.arc(200, 200, 150, initialAngle, (initialAngle + angle), false);
  context.stroke();
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