'use strict';

window.renderStatistics = function (ctx, names, times) {

  var drawPopup = function (color, x, y) {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(110 + x, 280 + y);
    ctx.lineTo(530 + x, 280 + y);
    ctx.lineTo(530 + x, 135 + y);
    ctx.bezierCurveTo(530 + x, 135 + y, 540 + x, 20 + y, 420 + x, 40 + y);
    ctx.bezierCurveTo(420 + x, 40 + y, 320 + x, -30 + y, 210 + x, 40 + y);
    ctx.bezierCurveTo(210 + x, 40 + y, 100 + x, 20 + y, 110 + x, 130 + y);
    ctx.lineTo(110 + x, 280 + y);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
  };

  drawPopup('rgba(0, 0, 0, 0.7)', 10, 10);
  drawPopup('white', 0, 0);

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', 235, 45);
  ctx.fillText('Список результатов:', 223, 65);

  var max = findMax(times);

  var histogramHeight = 150;
  var step = histogramHeight / (max - 0);
  var barWidth = 40;
  var indent = 90;
  var initialX = 165;
  var initialY = 245;
  var lineHeight = 20;

  for (var i = 0; i < times.length; i++) {
    ctx.fillStyle = (names[i] !== 'Вы') ?
      'rgba(0, 0, 255, ' + (Math.random() * (0.9 - 0.1) + 0.1) + ')' :
      'rgba(255, 0, 0, 1)';

    ctx.fillRect(initialX + indent * i, initialY, barWidth, -times[i] * step);
    ctx.fillText(names[i], initialX + indent * i, initialY + lineHeight);
    ctx.fillText(Math.floor(times[i]), initialX + indent * i, initialY - times[i] * step - 5);
  }
};

var findMax = function (arr) {
  var max = -1;

  for (var i = 0; i < arr.length; i++) {
    var current = arr[i];
    if (current > max) {
      max = Math.floor(current);
    }
  }
  return max;
};
