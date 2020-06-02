'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 30;
var NAME_HEIGHT = 20; // высота текстового блока
var BAR_WIDTH = 40;
var barHeight = CLOUD_HEIGHT - GAP - NAME_HEIGHT * 4 - GAP;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', CLOUD_X + GAP, CLOUD_Y + GAP);
  ctx.fillText('Список результатов:', CLOUD_X + GAP, CLOUD_Y + GAP + NAME_HEIGHT);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    var colors = ['hsl(218, 40%, 50%)', 'hsl(218, 90%, 50%)', 'hsl(218, 20%, 50%)', 'hsl(218, 65%, 50%)']; // не нашел как рандомно задать только насыщенность синего и сделал массив
    ctx.fillStyle = '#000';
    ctx.fillText(players[i], CLOUD_X + GAP + (GAP * 2 + BAR_WIDTH) * i, CLOUD_HEIGHT - NAME_HEIGHT);
    ctx.fillText(Math.round(times[i]), CLOUD_X + GAP + (GAP * 2 + BAR_WIDTH) * i, CLOUD_Y + GAP + NAME_HEIGHT * 2 + (barHeight - (barHeight * times[i]) / maxTime));
    ctx.fillStyle = colors[i];
    ctx.fillRect(CLOUD_X + GAP + (GAP * 2 + BAR_WIDTH) * i, CLOUD_Y + GAP + NAME_HEIGHT * 3 + (barHeight - (barHeight * times[i]) / maxTime), BAR_WIDTH, (barHeight * times[i]) / maxTime);
  }
};
