let currentConversation = 'tutorial';
let convoIndex = 0;

function say(whatToSay, player = ""){
    if (whatToSay==null){
        return;
    }
    initTextBox()
    textFont(convoFont);
    
    fill(255,255,255);
    background(0,0,0,70);
    textSize(100*windowWidth/colliderOriginalScreenWidth);
    text(whatToSay, getRelativeX(135)+50+ (textWidth(whatToSay)/2), height * 0.91);
}

function initTextBox(){
    
    fill(0, 100); // 0 for black, 100 for transparency
    noStroke(); // No border
    rect(0, height * 0.85, width, height * 0.15);
    image(player_profile, 0, height * 0.85, getRelativeX(135), getRelativeY(135))
}


let Conversations = {
    'tutorial':[ "Hi, I am Noah.(press z to continue...)" ,  "This is my farm!", "You can use the WASD keys to move.", ],
    'tutorialHouse':[ "This is my house","You can go to the bed and press z to sleep.", "..."],
    'tutorialFarm':['This is my field', 'Here you can grow and defend','your vegetables from pests']
}

function initiateConversationIfNeeded(){
    if (currentConversation!=null){
        
        if (convoIndex<Conversations[currentConversation].length){
            convoIndex+=1;
            
        } 
    }
}