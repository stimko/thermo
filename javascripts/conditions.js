Conditions = {
  "rain": function(){
    context.lineWidth = 4;
    context.strokeStyle = 'rgb(75,182,214)';
    context.fillStyle = 'rgb(96,212,247)';
    context.beginPath();
    context.moveTo(280, 180);
    context.bezierCurveTo(240, 210, 300, 220, 280, 180);
    context.closePath();
    context.fill();
    context.stroke();
    context.beginPath();
    context.moveTo(230, 200);
    context.bezierCurveTo(190, 230, 250, 240, 230, 200);
    context.closePath();
    context.fill();
    context.stroke();
    context.beginPath();
    context.moveTo(255, 140);
    context.bezierCurveTo(215, 170, 275, 180, 255, 140);
    context.closePath();
    context.fill();
    context.stroke();
  },
  "cloudy": function(){},
  "sunny": function(){},
  "partly cloudy": function(){},
  "snow": function(){}
}