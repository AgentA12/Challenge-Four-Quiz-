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

  //get the main text and align to the left
  var mainTextEl = document.querySelector(".main-text");
  mainTextEl.classList.add("text-left");
  mainTextEl.remove();

  //remove the start button
  startQuizButtonEl.remove();

  //append new ul to container that will hold buttons
  buttonContainerEl.appendChild(ulButtonEl);

  //call function to create four buttons and store them in a  variable array
  createBtns();
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

    //append buttons to ul and li
    ulButtonEl.appendChild(liButtonEl);
    liButtonEl.appendChild(questionButton);
  }
  assignTextContent(buttonArray);
}

function assignTextContent(arrayOfButtons) {
  // use question id to identify correct set of questions then assign correct text and give the wrong answer a data-bool of false
  var mainTitleTextEl = document.querySelector(".main-title");
  mainTitleTextEl.classList.add("text-left");

  if (questionId == 0) {
    mainTitleTextEl.textContent = "Commonly used data types DO not include:";
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
  } else if (questionId == 1) {
    mainTitleTextEl.textContent = "The condition in an if/else statement id enclosed with _________.";
    for (i = 0; i < arrayOfButtons.length; i++) {
      var dataIdAttribute = arrayOfButtons[i].getAttribute("data-id");

      switch (dataIdAttribute) {
        case "0":
          arrayOfButtons[i].textContent = "1: quotes";
          break;
        case "1":
          arrayOfButtons[i].textContent = "2: curly brackets";
          break;
        case "2":
          arrayOfButtons[i].textContent = "3: parenthesis";
          break;
        case "3":
          arrayOfButtons[i].textContent = "4: square brackets";
          break;
      }
    }
  } else if (questionId == 2) {
    mainTitleTextEl.textContent = "Arrays in Javascript can be used to store _________.";
    for (i = 0; i < arrayOfButtons.length; i++) {
      var dataIdAttribute = arrayOfButtons[i].getAttribute("data-id");

      switch (dataIdAttribute) {
        case "0":
          arrayOfButtons[i].textContent = "1: numbers and strings";
          break;
        case "1":
          arrayOfButtons[i].textContent = "2: other arrays";
          break;
        case "2":
          arrayOfButtons[i].textContent = "3: booleans";
          break;
        case "3":
          arrayOfButtons[i].textContent = "4: all of the above";
          break;
      }
    }
  } else if (questionId == 3) {
    mainTitleTextEl.textContent = "String values must be enclosed within _________ when being assigned to variables.";
    for (i = 0; i < arrayOfButtons.length; i++) {
      var dataIdAttribute = arrayOfButtons[i].getAttribute("data-id");

      switch (dataIdAttribute) {
        case "0":
          arrayOfButtons[i].textContent = "1: commas";
          break;
        case "1":
          arrayOfButtons[i].textContent = "2: curly brackets";
          break;
        case "2":
          arrayOfButtons[i].textContent = "3: quotes";
          break;
        case "3":
          arrayOfButtons[i].textContent = "4: parenthesis";
          break;
      }
    }
  } else if (questionId == 4) {
    mainTitleTextEl.textContent = "A very useful tool used during development and debugging for printing content to the debugger is:";
    for (i = 0; i < arrayOfButtons.length; i++) {
      var dataIdAttribute = arrayOfButtons[i].getAttribute("data-id");

      switch (dataIdAttribute) {
        case "0":
          arrayOfButtons[i].textContent = "1: javascript";
          break;
        case "1":
          arrayOfButtons[i].textContent = "2: terminal/bash";
          break;
        case "2":
          arrayOfButtons[i].textContent = "3: for loops";
          break;
        case "3":
          arrayOfButtons[i].textContent = "4: console.log";
          break;
      }
    }
  }
  questionId++;
}

function createRightText() {
  var rightDivEL = document.createElement("div");
  rightDivEL.className = "wrong-or-right";
  rightDivEL.textContent = "Correct!";
  mainContainerEl.appendChild(rightDivEL);
  setTimeout(() => {
    rightDivEL.remove();
  }, 1000);
}

function createWrongText() {
  var wrongDivEL = document.createElement("div");
  wrongDivEL.className = "wrong-or-right";
  wrongDivEL.textContent = "Wrong!";
  mainContainerEl.appendChild(wrongDivEL);
  setTimeout(() => {
    wrongDivEL.remove();
  }, 1000);
}

function removeElements() {
  var child = ulButtonEl.lastElementChild;
  while (child) {
    ulButtonEl.removeChild(child);
    child = ulButtonEl.lastElementChild;
  }
}

function createTitle() {}

//get startQuiz button and on click call the startQuiz function
startQuizButtonEl.addEventListener("click", startQuiz);

//add event listener on all four buttnons
ulButtonEl.addEventListener("click", (event) => {
  //get the true or false value from the target of event
  var targetEl = event.target.getAttribute("data-bool");
  if (targetEl == "false") {
    createWrongText();
    score = score - 12;
  } else {
    createRightText();
  }
  removeElements();
  createBtns();
  createTitle();
});
