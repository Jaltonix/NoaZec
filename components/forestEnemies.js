var forestEnemies = {
  tileOne: [],
  tileTwo: [],
  tileThree: [],
  tileFour: [],
  tileFive: new forestEnemyList([ ['TBD', [2, 2]], ['TBD', [5, 4]], ['TBD', [7, 1]], ['TBD', [8, 9]] ]),
  tileSix: [],
  tileSeven: [],
  tileEight: [],
  tileNine: [],
  dungeon: [],
}

function forestEnemyList(enemiesInfo) {
  this.enemyList = [];
  for (let i = 0; i < enemiesInfo.length; i++) {
    this.enemyList.push(forestEnemy(enemiesInfo[i]));
  }
}

function forestEnemy(enemyInfo) {
  var enemy = {}
  enemy.name = enemyInfo[0];
  enemy.currentPosition = enemyInfo[1];
  enemy.status = 'alive';
  return enemy;
}

function drawEnemies(enemies) {
  for(let i = 0; i < enemies.length; i++) {
    placeEnemy = createImg('../../sprites/enemySprite.png');
    placeEnemy.id('enemy');
    placeEnemy.position( (enemies[i].currentPosition[0] * 48) + 364, (enemies[i].currentPosition[1] * 48) + 220);
  }
}