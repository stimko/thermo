Conditions = {
  "rain": function(){
    context.lineWidth = 6;
    context.strokeStyle = 'white';
    context.beginPath();
    context.moveTo(280, 180);
    context.bezierCurveTo(240, 210, 300, 220, 280, 180);
    context.closePath();
    context.stroke();
    context.beginPath();
    context.moveTo(230, 210);
    context.bezierCurveTo(190, 240, 250, 250, 230, 210);
    context.closePath();
    context.stroke();
    context.beginPath();
    context.moveTo(255, 140);
    context.bezierCurveTo(215, 170, 275, 180, 255, 140);
    context.closePath();
    context.stroke();
  },
  "cloudy": function(){},
  "sunny": function(){},
  "partly cloudy": function(){},
  "snow": function(){}
}