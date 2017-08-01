const forestExits = {
  tileOne: [],
  tileTwo: [],
  tileThree: [],
  tileFour: [],
  tileFive: [ ['l', 0, 6], ['r', 14, 6], ['u', 7, 0] ],
  tileSix: [],
  tileSeven: [],
  tileEight: [],
  tileNine: [],
  dungeon: [],
}

function drawExits(exitPoints) {
  for (let i = 0; i < exitPoints.length; i++) {
    exitHalfOne = createImg('../../sprites/exitSprite.png');
    exitHalfTwo = createImg('../../sprites/exitSprite.png');
    exitHalfOne.id('exit');
    exitHalfTwo.id('exit');
    if(exitPoints[i][0] === 'l' || exitPoints[i][0] === 'r') {
      exitHalfOne.position( (exitPoints[i][1] * 48) + 364, ((exitPoints[i][2]) * 48) + 196);
      exitHalfTwo.position( (exitPoints[i][1] * 48) + 364, ((exitPoints[i][2]) * 48) + 244);
      exitPoints[i].push( ((exitPoints[i][2]) * 48) + 196, ((exitPoints[i][2]) * 48) + 244);
    } else {
      exitHalfOne.position( (exitPoints[i][1] * 48) + 340, ((exitPoints[i][2]) * 48) + 220); 
      exitHalfTwo.position( (exitPoints[i][1] * 48) + 388, ((exitPoints[i][2]) * 48) + 220);   
      exitPoints[i].push( ((exitPoints[i][1]) * 48) + 340, ((exitPoints[i][1]) * 48) + 388);
    }
  }
}

function isExit(exits, direction) { 
  if(atEdge) {
    var i = 0; 
    function checkExits() {
      switch(true){
        case direction === 'l' && exits[i][0] === 'l': break;
        case direction === 'r' && exits[i][0] === 'r': break;
        case direction === 'u' && exits[i][0] === 'u': break;
        case direction === 'd' && exits[i][0] === 'd': break;
        default: break;
      }
      i++;
      if(i < exits.length) {
        checkExits();
      }
    //set next area
    }
    return checkExits();
  }
}