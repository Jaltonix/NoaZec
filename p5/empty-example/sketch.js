var cnv;

function setup() {
  var title = createP('Noa Zec')
  title.id('title');
  cnv = createCanvas(720,100);
  cnv.id('hud');
}
function drawTrees(treePlacements) {
  for(let i = 0; i < treePlacements.length; i++) {
    placeTree = createImg('../../sprites/treeSprite.png');
    placeTree.id('tree');
    placeTree.position( ((treePlacements[i][0]) * 48) + 364, ((treePlacements[i][1]) * 48) + 220);
  }
}

function drawExits(exitPoints) {
  for(let i = 0; i < exitPoints.length; i++) {
    placeExit = createImg('../../sprites/exitSprite.png');
    placeExit.id('exit');
    placeExit.position( ((exitPoints[i][0]) * 48) + 364, ((exitPoints[i][1]) * 48) + 220);
  }
}

function drawEnemies(enemies) {
  for(let i = 0; i < enemies.length; i++) {
    placeEnemy = createImg('../../sprites/enemySprite.png');
    placeEnemy.id('enemy');
    placeEnemy.position( ((enemies[i].currentPosition[0]) * 48) + 364, ((enemies[i].currentPosition[1]) * 48) + 220);
  }
}

function drawPlayer() {
  placePlayer = createImg('../../sprites/playerSprite.png');
  placePlayer.id('player');
  placePlayer.position( ((posOfInt[0]) * 48) + 364, ((posOfInt[1]) * 48) + 220);
}

function keyPressed() {
  var hr = posOfInt[0];
  var vt = posOfInt[1];
  var move = function(){placePlayer.position( ((posOfInt[0]) * 48) + 364, ((posOfInt[1]) * 48) + 220) };
  if (keyCode === UP_ARROW && posOfInt[0] > 0 && posOfInt[0] < 14 && (posOfInt[1] - 1 > 0 || isExit(posOfInt[0], posOfInt[1] - 1)) && !treeConflicts(posOfInt[0], posOfInt[1] - 1)){
    posOfInt[1] = posOfInt[1] - 1;
    move();
  } else if (keyCode === RIGHT_ARROW && posOfInt[1] > 0 && posOfInt[1] < 12 && (posOfInt[0] + 1 < 14 || isExit(posOfInt[0] + 1, posOfInt[1])) && !treeConflicts(posOfInt[0] + 1, posOfInt[1])) {
    posOfInt[0] = posOfInt[0] + 1;
    move();
  } else if (keyCode === DOWN_ARROW && posOfInt[0] > 0 && posOfInt[0] < 14 && (posOfInt[1] + 1 < 12 || isExit(posOfInt[0], posOfInt[1] + 1)) && !treeConflicts(posOfInt[0], posOfInt[1] + 1)) {
    posOfInt[1] = posOfInt[1] + 1;
    move();
  } else if (keyCode === LEFT_ARROW && posOfInt[1] > 0 && posOfInt[1] < 12 && (posOfInt[0] - 1 > 0 || isExit(posOfInt[0] - 1, posOfInt[1])) && !treeConflicts(posOfInt[0] - 1, posOfInt[1])) {
    posOfInt[0] = posOfInt[0] - 1;
    move();
  }
}

function draw() {
  background(0);
  bg = createImg('../../sprites/forestTileSprite.png');
  bg.id('area');
  if(player.currentArea === 'forest'){
    drawTrees(forestMap[player.currentTile]);
    drawExits(forestExits[player.currentTile]);
    drawEnemies(forestEnemies[player.currentTile].enemyList);
  }
  drawPlayer(player);
  noLoop();
}

function windowResized() {
  setup();
  draw();
}