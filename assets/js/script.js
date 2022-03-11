var mainContainerEl = document.querySelector(".main-container");
var buttonContainerEl = document.querySelector(".button-container");
var startQuizButtonEl = document.querySelector(".start-button");
var ulButtonEl = document.createElement("ul");
ulButtonEl.className = "ul-btns";
var score = 75;
var questionId = 0;
var listOfBtns;

function startQuiz() {
  //get the counter element
  var displayedScoreCounter = document.getElementById("timed-score-value");

  //set the counter to decrease every second
  var myInterval = setInterval(() => {
    if (score <= 0) {
      clearInterval(myInterval);
      alert("Darn, Times up!");
    }
    displayedScoreCounter.textContent = score;
    score--;
  }, 1000);

  //get the main title and add a class to align it to the left
  var mainTitleTextEl = document.querySelector(".main-title");
  mainTitleTextEl.classList.add("text-left");
  mainTitleTextEl.textContent = "Commonly used data types DO not include:";

  //get the main text and align to the left
  var mainTextEl = document.querySelector(".main-text");
  mainTextEl.classList.add("text-left");
  mainTextEl.remove();

  //remove the start button
  startQuizButtonEl.remove();

  //call function to create four buttons and store them in a  variable array
  listOfBtns = createBtns();

  //change the text content in the four buttons
  assignTextContent(listOfBtns);

  ulButtonEl.addEventListener("click", (event) => {
    var trueOrFalse;
    var targetEl = event.target.getAttribute("data-bool");
    if (targetEl == "false") {
      trueOrFalse = false;
      createWrongText();
    } else {
      trueOrFalse = true;
      createRightText();
    }
  });
}

function createBtns() {
  //create four buttons and store in array
  var buttonArray = [];
  //create four buttons and assign a class and a unique data-id
  for (var i = 0; i < 4; i++) {
    var liButtonEl = document.createElement("li");
    liButtonEl.className = "list-btns";
    var questionButton = document.createElement("button");
    questionButton.classList.add("quiz-btn");
    questionButton.setAttribute("data-id", i);
    questionButton.setAttribute("question-id", questionId);
    buttonArray.push(questionButton);

    //append buttons to li and li to ul and ul to container div
    buttonContainerEl.appendChild(ulButtonEl);
    ulButtonEl.appendChild(liButtonEl);
    liButtonEl.appendChild(questionButton);
  }
  return buttonArray;
}

function assignTextContent(arrayOfButtons) {
  // use question id to identify correct set of questions then assign correct text and give the wrong answer a data-bool of false
  if (questionId == 0) {
    for (i = 0; i < arrayOfButtons.length; i++) {
      var dataIdAttribute = arrayOfButtons[i].getAttribute("data-id");

      switch (dataIdAttribute) {
        case "0":
          arrayOfButtons[i].textContent = "1: strings";
          break;
        case "1":
          arrayOfButtons[i].textContent = "2: booleans";
          break;
        case "2":
          arrayOfButtons[i].textContent = "3: alert";
          arrayOfButtons[i].setAttribute("data-bool", false);
          break;
        case "3":
          arrayOfButtons[i].textContent = "4: numbers";
          break;
      }
    }
  }
  questionId++;
}

function createRightText(){
  var rightDivEL = document.createElement("div");
  rightDivEL.className = "wrong-div";
  rightDivEL.textContent = "Correct!";
  mainContainerEl.appendChild(rightDivEL);
}

function createWrongText(){
  var wrongDivEL = document.createElement("div");
  wrongDivEL.className = "wrong-div";
  wrongDivEL.textContent = "Wrong!";
  mainContainerEl.appendChild(wrongDivEL);
}
//get startQuiz button and on click call the startQuiz function
startQuizButtonEl.addEventListener("click", startQuiz);
