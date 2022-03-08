var btnID = 0;
var buttonContainer = document.querySelector(".button-container");

function startQuiz() {
  //get the main title and add a class to align it to the left and change the text
  var mainTitleTextEl = document.querySelector(".main-title");
  mainTitleTextEl.classList.add("text-left");
  mainTitleTextEl.textContent = "Commonly used data types do not include:";

  //get the main text and its container and remove it
  var mainTextEl = document.querySelector(".main-text");
  var titleContainerEl = document.querySelector(".main-container");
  titleContainerEl.removeChild(mainTextEl);

  //get the start quiz button and remove it, then add four new buttons for the first answer
  var startQuizButtonEl = document.querySelector(".start-button");
  buttonContainer.removeChild(startQuizButtonEl);

  //call function to create four buttons
  createBtns1();
}

function createBtns1() {
  for (var i = 0; i < 4; i++) {
    var ulButtonEl = document.createElement("ul");
    var liButtonEl = document.createElement("li");
    liButtonEl.className = "list-btns";
    var questionButton = document.createElement("button");
    questionButton.classList.add("btn");
    questionButton.setAttribute("data-id", i)

    buttonContainer.appendChild(ulButtonEl);
    liButtonEl.appendChild(questionButton);
    ulButtonEl.appendChild(liButtonEl);

    //send current button to assigntext function to give textcontent
    assigntext(questionButton);
  }
  
}

function assigntext(btn){
    
}
//get startQuiz button and on click call the startQuiz function
var startQuizButtonEl = document.querySelector(".start-button");
startQuizButtonEl.addEventListener("click", startQuiz);
