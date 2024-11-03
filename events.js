let hasEnteredHouseBefore = false;
let hasEnteredFarmBefore = false;
let isInFarm =  false;
let pestEncounter = false;

function houseFirstEntry(){
    if (is_inside_house & !hasEnteredHouseBefore){
        currentConversation = 'tutorialHouse';
        convoIndex = 0;
        hasEnteredHouseBefore = true;
    }
}

function farmFirstEntry(){
    if (player_x> getRelativeX(1157) & player_y>getRelativeY(282) ){
        if (!hasEnteredFarmBefore)
        {
            currentConversation = 'tutorialFarm';
            convoIndex = 0;
            hasEnteredFarmBefore = true;
            initEnemies(10);
        }
        isInFarm = true;
        
    } else {
        isInFarm = false;
    }
}

function displayPests(){
    
    if (isInFarm & (enemies_location.length>0)){
        for (let i=0; i<enemies_location.length; i++)
            
        {
            console.log(enemies_location[i].x, enemies_location[i].y)
            image(worm,getRelativeX(enemies_location[i].x),enemies_location[i].y, 100,100 )
        
            if (player_x > enemies_location[i].x & player_x < enemies_location[i].x+100 & player_y+100 > enemies_location[i].y & player_y < enemies_location[i].y+100)
            {
                console.log("Encountering a pet")
                pestEncounter = true;
            }
        }
    }

}


function battle()
{
    if (gameMusic.isPlaying()){
        gameMusic.stop()
    }


}


function  loadEvents(){

    houseFirstEntry();
    farmFirstEntry();
    displayPests();
    
}