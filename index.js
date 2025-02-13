let userScore=0;
let compScore=0;
const choices=document.querySelectorAll(".choice");

const msg=document.querySelector("#msg")

const userScorepara=document.querySelector("#user-score")
const compScorepara=document.querySelector("#comp-score")


const genCompChoice=()=>{
    const options=["rock","paper","scissor"];
    const randIdx=Math.floor(Math.random() * 3);
    return options[randIdx];

};

const drawGame=()=>{
    console.log("Game was draw")
    msg.innerText="Match Draw . Play again...";
    msg.style.backgroundColor="blue";
};

const showWiner=(UserWins,userChoice,compChoice)=>{
    if(UserWins){
        userScore++;
        userScorepara.innerText=userScore;
        msg.innerText=`You Win! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        
        compScore++;
        compScorepara.innerText=compScore;
        msg.innerText=`You Lost! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
};

const playGame=(userChoice)=>{
    console.log("user Choice= ",userChoice);
    //Generate computer choice
    const compChoice=genCompChoice();
    console.log("comp Choice=",compChoice);
    if(userChoice===compChoice){
        drawGame();
    }
    else{
        let UserWins=true;
        if(userChoice==="rock"){
            UserWins=compChoice==="paper"?false:true;
        }
        else if(userChoice==="paper"){
            UserWins=compChoice==="scissor"?false:true;
        }
        else{
           UserWins= compChoice==="rock"?false:true
        }

        showWiner(UserWins,userChoice,compChoice);
    }
     
};

choices.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id")
        // console.log("choice was clicked",userChoice);
        playGame(userChoice)
    });
});

