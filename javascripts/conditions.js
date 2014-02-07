Conditions = {
  "rain": function(){
    context.lineWidth = 10;
    context.strokeStyle = 'white';
    context.beginPath();
    context.moveTo(275, 160);
    context.bezierCurveTo(205, 210, 305, 230, 275, 160);
    context.closePath();
    context.stroke();
    context.beginPath();
    context.moveTo(220, 190);
    context.bezierCurveTo(150, 240, 250, 260, 220, 190);
    context.closePath();
    context.stroke();
    context.beginPath();
    context.moveTo(250, 110);
    context.bezierCurveTo(180, 160, 280, 180, 250, 110);
    context.closePath();
    context.stroke();
  }

}