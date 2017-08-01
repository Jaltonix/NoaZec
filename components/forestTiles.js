const forestMap = {
  tileOne:   [],
  tileTwo:   [],
  tileThree: [],
  tileFour:  [],
  tileFive:  [ [4,0], [8,0], [3,6], [9,6] ],
  tileSix:   [],
  tileSeven: [],
  tileEight: [],
  tileNine:  [],
  dungeon: {}
};

function treeConflicts(horizontal, vertical) {
  for(let i = 0; i < forestMap[player.currentTile].length; i++) {
    if(forestMap[player.currentTile][i][0] + 1 === horizontal && forestMap[player.currentTile][i][1] + 2 === vertical) return true;
  }
  return false;
}