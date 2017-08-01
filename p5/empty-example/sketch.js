var cnv;

function setup() {
  var title = createP('Noa Zec')
  title.id('title');
  cnv = createCanvas(720,100);
  cnv.id('hud');
  background(0);
  bg = createImg('../../sprites/forestTileSprite.png');
  bg.id('area');
}

function draw() {
  if (player.currentArea === 'forest' && player.currentTile !== player.lastTile) {
    drawTrees(forestMap[player.currentTile]);
    drawExits(forestExits[player.currentTile]);
    drawEnemies(forestEnemies[player.currentTile].enemyList);
    drawPlayer();
    player.lastTile = player.currentTile;
  }

  if (keyIsDown(UP_ARROW)){
    for (let i = 0; i < 4; i ++) {
      if (noMovementConflicts('up')) {
        player.currentPosition[1] = vert - (1/48);
        vert = player.currentPosition[1];
        move();
      }
    }
  } else if (keyIsDown(RIGHT_ARROW)) {
    for (let i = 0; i < 4; i ++) {
      if (noMovementConflicts('right')) {
        player.currentPosition[0] = horz + (1/48);
        horz = player.currentPosition[0];
        move();
      }
    }
  } else if (keyIsDown(DOWN_ARROW)) {
    for (let i = 0; i < 4; i ++) {
      if (noMovementConflicts('down')) {
        player.currentPosition[1] = vert + (1/48);
        vert = player.currentPosition[1];
        move();
      }
    }
  } else if (keyIsDown(LEFT_ARROW)) {
    for (let i = 0; i < 4; i ++) {
      if (noMovementConflicts('left')) {
        player.currentPosition[0] = horz - (1/48);
        horz = player.currentPosition[0];
        move();
      }
    }
  }
}

function windowResized() {
  setup();
  draw();
}