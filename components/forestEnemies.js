var forestEnemies = {
  tileOne: [],
  tileTwo: [],
  tileThree: [],
  tileFour: [],
  tileFive: new forestEnemyList([ ['TBD', [2, 2]], ['TBD', [5, 4]], ['TBD', [6, 9]], ['TBD', [8, 9]], ['TBD', [9, 4]], ['TBD', [12, 2]] ]),
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