const forestExits = {
  tileOne: [],
  tileTwo: [],
  tileThree: [],
  tileFour: [],
  tileFive: [ [0, 6], [14, 6] ],
  tileSix: [],
  tileSeven: [],
  tileEight: [],
  tileNine: [],
  dungeon: [],
}

function isExit(horizontal, vertical) {
  for(let i = 0; i < forestExits[player.currentTile].length; i++) {
    if(forestExits[player.currentTile][i][0] === horizontal && forestExits[player.currentTile][i][1] === vertical) return true;
  }
  return false;
}