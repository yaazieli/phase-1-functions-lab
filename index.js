// pickup location for a passenger and return number of block from headquarters on 42nd
//also translate num of block into distance in feet

//calculate number of feet travelled based on distance- function called distanceTravelledInFeet- 
// takes in beginning and destination blocks and returns number of feet travevelt. Each block in Manhattan=264f


function distanceFromHqInBlocks (blockNum) {
    if (blockNum > 42 ) {
        return blockNum - 42;
    }
        else {
            return 42 - blockNum;
        }
}

function distanceFromHqInFeet (blockNum) {
    return distanceFromHqInBlocks (blockNum) * 264;
}

function distanceTravelledInFeet (beginning, end) {
     if (beginning < end) {
        return (end - beginning) * 264; 
         } else {
             return (beginning - end) *264;
         }
    }
function calculatesFarePrice(beginning, end) {
    const distance = distanceTravelledInFeet (beginning, end);
        if (distance <= 400) {  
            return 0;
        } else if (distance > 400 && distance <= 2000) {
            return.02 * (distance - 400);
        } else if (distance > 2000 && distance < 2500) {
            return 25;
        } else {
            return 'cannot travel that far';

        }
}