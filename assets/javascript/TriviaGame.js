// =========== Questions =======================
var questions = [
    {
        text: "1. Is The earth rectangular?",
        options: ["Yes","No", "Maybe"],
        answer: 0,
    },
    { 
        text: "2. Is Earth a Planet?",
        options: ["Heck Yeah", "Definitely Not"],
        answer: 2,

    },
    {
        text: "3. Does Earth Have Water?",
        options: ["Its Slippery", "No Water Whatsoever"],
        answer: 2,
    }
    
    

];
//==============================================

//============Timer Id=====================
var gameTimer;
var questionIndex = 0;
var totalGameTime = 61;
//========================================


// =========== Initialize Page =================
$(".questions").hide();
$("#start-button").on("click", function() {
    console.log("You hit the Start Button");
    $(".instructions").hide();
    $(".questions").show();  
    $(this).hide();
});
//==============================================



//================Start The Game================
startGame(); {

};
//==============================================



//================Organize code=================
//================Perfrom Repetitive Task =======

function startGame() {
    //display the timer
    $(".timer").text(totalGameTime);{
    // Start a timer
    startTimer();
    // Display a Question
    displayQuestion();
    }
    // set the score (numCorrect, numIncorrect)
// }  

function startTimer() {
    gameTimer = setInterval(function () {
        totalGameTime--;
        $(".timer").text(totalGameTime);
    
        
        if(totalGameTime === 0 ){
            setInterval(gameTimer),
            endGame();
        }
    }, 1000);

}

function displayQuestion () {}


function endGame() { 
    //display a message
    //reset the game
    //and anything else
}

var currentQuestion = questions[questionIndex];
var parentDiv = $("<div>");
var pQuestionText = $("<p>");
pQuestionText.text(questions[questionIndex].text);
parentDiv.append(pQuestionText);

for (var i = 0; i < currentQuestion.options.length; i++) {
      var optionButton = $("<button>");
      optionButton.addClass("btn btn-info");
      optionButton.text(currentQuestion.options[i]);
      optionButton.val(i);
     
      parentDiv.append(optionButton);
}
$(".questions").append(parentDiv);
}

//============== Event Delegation =================================
// $(document).on("click", "answer", function () {
//     console.log(this);

//     if (clickedButton.val() === questions[questionIndex].answer) {
//         console.log("That is Correct");
//     }
//     else {
//         console.log("This is Wrong");
//     });
