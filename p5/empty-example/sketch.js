var cnv;
function centerCanvas() {
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
}

function setup() {
  var title = createP('Noa Zec')
  title.id('title');
  cnv = createCanvas(720,192);
  cnv.id('hud');
}
function drawTrees(treePlacements) {
  var tree = {};
  for(let i = 0; i < treePlacements.length; i++) {
    tree[i] = treePlacements[i];
    placeTree = createImg('../../sprites/treeSprite.png');
    placeTree.id('tree');
    placeTree.position( ((tree[i][0]) * 48) + 360, ((tree[i][1]) * 48) + 312, tree[i]);
  }
}

function drawExits(exitPoints) {
  var exit = {};
  for(let i = 0; i < exitPoints.length; i++) {
    exit[i] = exitPoints[i];
    placeExit = createImg('../../sprites/exitSprite.png');
    placeExit.id('exit');
    placeExit.position( ((exit[i][0]) * 48) + 364, ((exit[i][1]) * 48) + 312, exit[i]);
  }
}

function drawEnemies(enemyStartingPoints) {
  var enemy = {};
  for(let i = 0; i < enemyStartingPoints.length; i++) {
    enemy[i] = enemyStartingPoints[i];
    placeEnemy = createImg('../../sprites/enemySprite.png');
    placeEnemy.id('enemy');
    placeEnemy.position( ((enemy[i][0]) * 48) + 364, ((enemy[i][1]) * 48) + 312, enemy[i]);
  }
}

function drawPlayer() {
  placePlayer = createImg('../../sprites/playerSprite.png');
  placePlayer.id('player');
  placePlayer.position( ((player.currentPosition[0]) * 48) + 364, ((player.currentPosition[1]) * 48) + 312, player);
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    player.currentPosition[1] = player.currentPosition[1] - 1;
    placePlayer.position( ((player.currentPosition[0]) * 48) + 364, ((player.currentPosition[1]) * 48) + 312, player);
  } else if (keyCode === RIGHT_ARROW) {
    player.currentPosition[0] = player.currentPosition[0] + 1;
    placePlayer.position( ((player.currentPosition[0]) * 48) + 364, ((player.currentPosition[1]) * 48) + 312, player);
  } else if (keyCode === DOWN_ARROW) {
    player.currentPosition[1] = player.currentPosition[1] + 1;
    placePlayer.position( ((player.currentPosition[0]) * 48) + 364, ((player.currentPosition[1]) * 48) + 312, player);
  } else if (keyCode === LEFT_ARROW) {
    player.currentPosition[0] = player.currentPosition[0] - 1;
    placePlayer.position( ((player.currentPosition[0]) * 48) + 364, ((player.currentPosition[1]) * 48) + 312, player);
  }
}

function draw() {
  background(0);
  bg = createImg('../../sprites/forestTileSprite.png');
  bg.id('area');
  console.log(player.currentArea + ' ' + player.currentTile);
  drawTrees(tile.treePlacements);
  drawExits(tile.exitPoints);
  drawEnemies(tile.enemyStartingPoints);
  drawPlayer(player);
  noLoop();
}

function windowResized() {
  centerCanvas();
  setup();
  draw();
}