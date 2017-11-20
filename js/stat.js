'use strict';

window.renderStatistics = function (ctx, names, times) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.beginPath();
  ctx.moveTo(120, 290);
  ctx.lineTo(540, 290);
  ctx.lineTo(540, 145);
  ctx.bezierCurveTo(540, 145, 550, 30, 440, 50);
  ctx.bezierCurveTo(430, 50, 320, -20, 220, 50);
  ctx.bezierCurveTo(220, 50, 110, 30, 120, 140);
  ctx.lineTo(120, 290);
  ctx.closePath();
  ctx.stroke();
  ctx.fill();

  ctx.fillStyle = 'white';
  ctx.beginPath();
  ctx.moveTo(110, 280);
  ctx.lineTo(530, 280);
  ctx.lineTo(530, 135);
  ctx.bezierCurveTo(530, 135, 540, 20, 420, 40);
  ctx.bezierCurveTo(420, 40, 320, -30, 210, 40);
  ctx.bezierCurveTo(210, 40, 100, 20, 110, 130);
  ctx.lineTo(110, 280);
  ctx.closePath();
  ctx.stroke();
  ctx.fill();

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', 235, 45);
  ctx.fillText('Список результатов:', 223, 65);

  var max = -1;

  for (var i = 0; i < times.length; i++) {
    var time = times[i];
    if (time > max) {
      max = Math.floor(time);
    }
  }

  var histogramHeight = 150;
  var step = histogramHeight / (max - 0);
  var barWidth = 40;
  var indent = 90;
  var initialX = 165;
  var initialY = 245;
  var lineHeight = 20;

  for (i = 0; i < times.length; i++) {
    var cr = 'rgba(' + 0 + ',' + 0 + ',' + 255 + ',' + (Math.random() * (0.9 - 0.1) + 0.1) + ')';

    if (names[i] !== 'Вы') {
      ctx.fillStyle = cr;
    } else {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    }

    ctx.fillRect(initialX + indent * i, initialY, barWidth, -times[i] * step);
    ctx.fillText(names[i], initialX + indent * i, initialY + lineHeight);
    ctx.fillText(Math.floor(times[i]), initialX + indent * i, initialY - times[i] * step - 5);
  }
};
