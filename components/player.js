var player = {
  maxHealth: 5,
  currentHealth: 5,
  currentArea: 'forest',
  currentTile: 'tileFive',
  lastTile:'tileFour',
  currentPosition: [0,6]
};

function drawPlayer() {
  placePlayer = createImg('../../sprites/playerSprite.png');
  placePlayer.id('player');
  placePlayer.position( (player.currentPosition[0] * 48) + 364, (player.currentPosition[1] * 48) + 220 );
}

var horz = player.currentPosition[0];
var vert = player.currentPosition[1];

function move() {
  placePlayer.position( ((horz * 48) + 364), (vert * 48) + 220);
}

function atEdge() {
  if (player.currentPosition[0] === 412  || 
      player.currentPosition[0] === 1036 || 
      player.currentPosition[0] === 268  || 
      player.currentPosition[0] === 892
    ) 
  {
    console.log('11111');
    return true;
  }  
  console.log('.......');
  return false;
}

function noMovementConflicts(movementDirection) {
  switch(true) {
    case movementDirection === 'up': 
    if( 364 < Math.floor((horz * 48) + 364)  && 
        Math.ceil((horz * 48) + 364) < 1036 && 
        (268 < Math.floor((vert * 48) + 220) || isExit(forestExits[player.currentTile], 'u'))
      )
    {
      return true;
    }
    return false;
        
    case movementDirection === 'right':
    if( 220 < Math.floor((vert * 48) + 220) && 
        Math.ceil((vert * 48) + 220) < 988 && 
        (Math.ceil((horz * 48) + 364) < 988 || isExit(forestExits[player.currentTile], 'r'))
      )
    { 

      return true;
    }
    return false;
    
    case movementDirection === 'down': 
    if( 364 < Math.floor((horz * 48) + 364)  && 
        Math.ceil((horz * 48) + 364) < 1036 && 
        (Math.ceil((vert * 48) + 220) < 748 || isExit(forestExits[player.currentTile], 'd'))
      )
    {
      return true;
    }
    return false;
    
    case movementDirection === 'left':
    if( 220 < Math.floor((vert * 48) + 220) && 
        Math.ceil((vert * 48) + 220) < 892 && 
        (412 < Math.floor((horz * 48) + 364) || isExit(forestExits[player.currentTile], 'l'))
      )
    {
      return true;
    }
    return false;
    
    default: console.log('That isn\'t even an option, how did you do that?'); break;
  }
}