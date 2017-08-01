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

function drawTrees(treePlacements) {
  for(let i = 0; i < treePlacements.length; i++) {
    placeTree = createImg('../../sprites/treeSprite.png');
    placeTree.id('tree');
    placeTree.position( (treePlacements[i][0] * 48) + 364, (treePlacements[i][1] * 48) + 220);
  }
}

function noTreeConflicts(treePlacements, playerHorz, playerVert) {
  
}