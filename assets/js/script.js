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

  //set the counter to decrease every second. if score is 0 or last question is answered stop quiz and clear
  var myInterval = setInterval(() => {
    if (score <= 0) {
      clearInterval(myInterval);
      alert("Darn, Times up!");
      //getFinalScore();
    } else if (questionId == 6) {
      clearInterval(myInterval);
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
          arrayOfButtons[i].setAttribute("data-bool", false);
          break;
        case "1":
          arrayOfButtons[i].textContent = "2: booleans";
          arrayOfButtons[i].setAttribute("data-bool", false);
          break;
        case "2":
          arrayOfButtons[i].textContent = "3: alert";
          arrayOfButtons[i].setAttribute("data-bool", true);
          break;
        case "3":
          arrayOfButtons[i].textContent = "4: numbers";
          arrayOfButtons[i].setAttribute("data-bool", false);
          break;
      }
    }
  } else if (questionId == 1) {
    mainTitleTextEl.textContent =
      "The condition in an if/else statement is enclosed with _________.";
    for (i = 0; i < arrayOfButtons.length; i++) {
      var dataIdAttribute = arrayOfButtons[i].getAttribute("data-id");

      switch (dataIdAttribute) {
        case "0":
          arrayOfButtons[i].textContent = "1: quotes";
          arrayOfButtons[i].setAttribute("data-bool", false);
          break;
        case "1":
          arrayOfButtons[i].textContent = "2: curly brackets";
          arrayOfButtons[i].setAttribute("data-bool", false);
          break;
        case "2":
          arrayOfButtons[i].textContent = "3: parenthesis";
          arrayOfButtons[i].setAttribute("data-bool", true);
          break;
        case "3":
          arrayOfButtons[i].textContent = "4: square brackets";
          arrayOfButtons[i].setAttribute("data-bool", false);
          break;
      }
    }
  } else if (questionId == 2) {
    mainTitleTextEl.textContent =
      "Arrays in Javascript can be used to store _________.";
    for (i = 0; i < arrayOfButtons.length; i++) {
      var dataIdAttribute = arrayOfButtons[i].getAttribute("data-id");

      switch (dataIdAttribute) {
        case "0":
          arrayOfButtons[i].textContent = "1: numbers and strings";
          arrayOfButtons[i].setAttribute("data-bool", false);
          break;
        case "1":
          arrayOfButtons[i].textContent = "2: other arrays";
          arrayOfButtons[i].setAttribute("data-bool", false);
          break;
        case "2":
          arrayOfButtons[i].textContent = "3: booleans";
          arrayOfButtons[i].setAttribute("data-bool", false);
          break;
        case "3":
          arrayOfButtons[i].textContent = "4: all of the above";
          arrayOfButtons[i].setAttribute("data-bool", true);
          break;
      }
    }
  } else if (questionId == 3) {
    mainTitleTextEl.textContent =
      "String values must be enclosed within _________ when being assigned to variables.";
    for (i = 0; i < arrayOfButtons.length; i++) {
      var dataIdAttribute = arrayOfButtons[i].getAttribute("data-id");

      switch (dataIdAttribute) {
        case "0":
          arrayOfButtons[i].textContent = "1: commas";
          arrayOfButtons[i].setAttribute("data-bool", false);
          break;
        case "1":
          arrayOfButtons[i].textContent = "2: curly brackets";
          arrayOfButtons[i].setAttribute("data-bool", false);
          break;
        case "2":
          arrayOfButtons[i].textContent = "3: quotes";
          arrayOfButtons[i].setAttribute("data-bool", true);
          break;
        case "3":
          arrayOfButtons[i].textContent = "4: parenthesis";
          arrayOfButtons[i].setAttribute("data-bool", false);
          break;
      }
    }
  } else if (questionId == 4) {
    mainTitleTextEl.textContent =
      "A very useful tool used during development and debugging for printing content to the debugger is:";
    for (i = 0; i < arrayOfButtons.length; i++) {
      var dataIdAttribute = arrayOfButtons[i].getAttribute("data-id");

      switch (dataIdAttribute) {
        case "0":
          arrayOfButtons[i].textContent = "1: javascript";
          arrayOfButtons[i].setAttribute("data-bool", false);
          break;
        case "1":
          arrayOfButtons[i].textContent = "2: terminal/bash";
          arrayOfButtons[i].setAttribute("data-bool", false);
          break;
        case "2":
          arrayOfButtons[i].textContent = "3: for loops";
          arrayOfButtons[i].setAttribute("data-bool", false);
          break;
        case "3":
          arrayOfButtons[i].textContent = "4: console.log";
          arrayOfButtons[i].setAttribute("data-bool", true);
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

function getFinalScore() {
  // create elements for input form div
  mainContainerEl.textContent = "";
  const setScore = score;
  console.log(setScore);
  var formTitleEl = document.createElement("h2");
  formTitleEl.textContent = "All Done!";
  formTitleEl.className = "main-title";
  mainContainerEl.appendChild(formTitleEl);

  var finalScoreTextEl = document.createElement("p");
  finalScoreTextEl.classList.add("text-left");
  finalScoreTextEl.classList.add("main-text");
  finalScoreTextEl.textContent = `Your final score was ${setScore}.`;
  mainContainerEl.appendChild(finalScoreTextEl);

  //  var inputLabelEl = document.createElement("label");
  //  inputLabelEl.textContent = "Enter Initials: ";
  //  inputLabelEl.classList.add("text-left");
  //  inputLabelEl.classList.add("form-label");

  // var inputField = document.createElement("input");

  // var submitBtnEl = document.createElement("button");
  // submitBtnEl.textContent = "Submit";
  // submitBtnEl.className = "quiz-btn";

  // //append the elements to container

  // mainContainerEl.appendChild(inputLabelEl);
  // mainContainerEl.appendChild(inputField);
  // mainContainerEl.appendChild(submitBtnEl);
}

//get startQuiz button and on click call the startQuiz function
startQuizButtonEl.addEventListener("click", startQuiz);

//add event listener on all four buttnons
ulButtonEl.addEventListener("click", (event) => {
  //get the true or false value from the target of event
  var targetEl = event.target.getAttribute("data-bool");
  if (targetEl == "false") {
    createWrongText();
    score = score - 12;
  } else if (targetEl == "true") {
    createRightText();
  }
  if (questionId == 5) {
    getFinalScore();
  }
  removeElements();
  createBtns();
  createTitle();
});
