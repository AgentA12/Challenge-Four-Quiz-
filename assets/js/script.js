var mainContainerEl = document.querySelector(".main-container");
var buttonContainerEl = document.querySelector(".button-container");
var startQuizButtonEl = document.querySelector(".start-button");
var submitBtnEl = document.createElement("button");
var ulButtonEl = document.createElement("ul");
var formContainer = document.createElement("form");
ulButtonEl.className = "ul-btns";
var score = 75;
var questionId = 0;
var listOfBtns;

function startQuiz() {
  //get the counter element
  var displayedScoreCounter = document.getElementById("timed-score-value");

  //set the counter to decrease every second. if score is 0 or last question is answered stop quiz and clear interval
  var myInterval = setInterval(() => {
    if (score <= 0) {
      if (score < 0) {
        score = 0;
      }
      clearInterval(myInterval);
      alert("Darn, Times up!");
      displayFormPage();
    } else if (questionId == 6) {
      clearInterval(myInterval);
    }
    displayedScoreCounter.textContent = score;
    score--;
  }, 1000);

  //get the paragraph text and remove it
  document.querySelector(".main-text").remove();

  //remove the start button
  startQuizButtonEl.remove();

  //append new ul to container that will hold buttons
  buttonContainerEl.appendChild(ulButtonEl);

  //call function to create four buttons and store them in a array
  createBtns();
}

function createBtns() {
  //array for main quiz buttons
  var buttonArray = [];

  //create four buttons and li's and assign a class and a unique data-id and question id for refer to later
  for (var i = 0; i < 4; i++) {
    var liButtonEl = document.createElement("li");
    liButtonEl.className = "list-btns";
    var questionButton = document.createElement("button");
    questionButton.classList.add("quiz-btn");
    questionButton.setAttribute("data-id", i);
    questionButton.setAttribute("question-id", questionId);

    //add button to array
    buttonArray.push(questionButton);

    //append buttons to ul and li
    ulButtonEl.appendChild(liButtonEl);
    liButtonEl.appendChild(questionButton);
  }
  //send button array get text assigned text
  assignTextContent(buttonArray);
}

function assignTextContent(arrayOfButtons) {
  //get the title for the questions and align it to the left
  var mainTitleTextEl = document.querySelector(".main-title");
  mainTitleTextEl.classList.add("text-left");

  // use question id to identify correct set of questions then assign correct text and give the wrong answer a data-bool of false and the right answer true
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
  //increment question id
  questionId++;
}

function createRightText() {
  //create div and append it to the bottom of the main container
  var rightDivEL = document.createElement("div");
  rightDivEL.className = "wrong-or-right";
  rightDivEL.textContent = "Correct!";
  mainContainerEl.appendChild(rightDivEL);

  //display div for one second then remove it
  setTimeout(() => {
    rightDivEL.remove();
  }, 1000);
}

function createWrongText() {
  //create div and append it to the bottom of the main container
  var wrongDivEL = document.createElement("div");
  wrongDivEL.className = "wrong-or-right";
  wrongDivEL.textContent = "Wrong!";
  mainContainerEl.appendChild(wrongDivEL);

  //display div for one second then remove it
  setTimeout(() => {
    wrongDivEL.remove();
  }, 1000);
}

function removeElements() {
  //set child to the last child of the ul list of buttons and continually do so untill "child" is false/doesnt exist
  var child = ulButtonEl.lastElementChild;
  while (child) {
    ulButtonEl.removeChild(child);
    child = ulButtonEl.lastElementChild;
  }
}

function displayFormPage(id) {
  // create elements for input form and append to form container
  mainContainerEl.textContent = "";
  //check if argument is false and - 12 from score
  if (id == "false") {
    score = score - 12;
  }

  //insures no negative value
  if (score < 0) {
    score = 0;
  }
  const setScore = score;

  //create form element and add textcontent and class then append to container
  var formTitleEl = document.createElement("h2");
  formTitleEl.textContent = "All Done!";
  formTitleEl.className = "main-title";
  formTitleEl.classList.add("text-left");
  mainContainerEl.appendChild(formTitleEl);

  //create final score text and append to main container
  var finalScoreTextEl = document.createElement("p");
  finalScoreTextEl.classList.add("text-left");
  finalScoreTextEl.classList.add("main-text");
  finalScoreTextEl.textContent = `Your final score was ${setScore}.`;
  mainContainerEl.appendChild(finalScoreTextEl);

  //create form
  formContainer.className = "form-container";
  mainContainerEl.appendChild(formContainer);

  //create form input label and give it classes and an attribute and apppend
  var inputLabelEl = document.createElement("label");
  inputLabelEl.textContent = "Enter Initials: ";
  inputLabelEl.classList.add("text-left");
  inputLabelEl.classList.add("main-text");
  inputLabelEl.setAttribute("name", "initials-form");
  formContainer.appendChild(inputLabelEl);

  //create form input and give it classes and an attribute and append
  var inputField = document.createElement("input");
  inputField.setAttribute("name", "initials-form");
  inputField.classList.add("score-input");
  formContainer.appendChild(inputField);

  //create submit button
  submitBtnEl.textContent = "Submit";
  submitBtnEl.setAttribute("name", "initials-form");
  submitBtnEl.className = "submit-button";
  formContainer.appendChild(submitBtnEl);

  if (id == "false") {
    createWrongText();
  } else if (id == "true") {
    createRightText();
  }

  //add an event listener on the form
  formContainer.addEventListener("submit", (event) => {
    event.preventDefault();
    //save current score and initials to array of objects
    var initialsData = inputField.value;

    //check to see if input field is empty
    if (!initialsData) {
      alert("you need to fill out the form");
      return false;
    }
    //make new object and give it current data
    var objectData = {
      initials: initialsData,
      score: setScore,
    };

    //save the array to local storage
    saveScores(objectData);

    //display the list of scores
    displayScorePage();
  });
}

function saveScores(data) {
  //Note to self: setItem will overwrite local storage! took a long time to fix these one
  //get the local storage and store it in a variable
  var existingItems = JSON.parse(localStorage.getItem("users"));
  //check if its empty, if it is then create a new empty array
  if (existingItems === null) existingItems = [];
  //sort the scores
  existingItems.sort((a, b) => {
    return a.score - b.score;
  });
  //add "data" aka object data to the array
  existingItems.push(data);
  //set it in local storage
  localStorage.setItem("users", JSON.stringify(existingItems));
}

function displayScorePage() {
  //remove old elements and display correct scorePage elements
  document.querySelector("header").remove();
  document.querySelector("h2").textContent = "High Scores:";
  //if p or form tags are displayed remove them
  if (document.querySelector("p") && document.querySelector("form")) {
    document.querySelector("p").remove();
    document.querySelector("form").remove();
  }
  //create scorelist to hold recent scores
  var listOfScores = document.createElement("ol");
  listOfScores.className = "score-list";
  mainContainerEl.appendChild(listOfScores);

  //get local storage and display as list
  getLocalStorage(listOfScores);

  //container for buttons
  var buttonContainer2 = document.createElement("div");
  buttonContainer2.className = "form-container";
  mainContainerEl.appendChild(buttonContainer2);

  //create buttons and append to container
  var goBackBtn = document.createElement("button");
  goBackBtn.className = "submit-button";
  goBackBtn.textContent = "Go back";
  goBackBtn.classList.add("final-buttons");
  buttonContainer2.appendChild(goBackBtn);

  goBackBtn.addEventListener("click", function () {
    //reload the page
    location.reload();
  });

  //create button to clear high scores
  var clearHighScores = document.createElement("button");
  clearHighScores.className = "submit-button";
  clearHighScores.classList.add("final-buttons");
  clearHighScores.textContent = "Clear high scores";
  buttonContainer2.appendChild(clearHighScores);

  //onclick clear localStorage and remove the highscores list from the page
  clearHighScores.addEventListener("click", function () {
    localStorage.clear("users");
    listOfScores.remove();
  });
}

function getLocalStorage(list) {
  var storedScores = localStorage.getItem("users");

  // if there are no tasks, set tasks to an empty array and return out of the function
  if (!storedScores) {
    return false;
  }
  // parse into array of objects
  storedScores = JSON.parse(storedScores);
  console.log(storedScores);

  // loop through storedScores array
  for (var i = 0; i < storedScores.length; i++) {
    //create list item for each "dataObject" score and initials
    var scoreListItem = document.createElement("li");
    scoreListItem.textContent =
      storedScores[i].initials + "-  Score = " + storedScores[i].score;
    list.appendChild(scoreListItem);
  }
}

//get startQuiz button and on click call the startQuiz function
startQuizButtonEl.addEventListener("click", startQuiz);

//add event listener on all four buttnons
ulButtonEl.addEventListener("click", (event) => {
  //test to see if the event target has a class name of "quiz-btn" if true the execute the following code
  if (event.target.className == "quiz-btn") {
    //store the event targets attribute named "data-bool" in targetEl to see if the correct answer was clicked
    var targetEl = event.target.getAttribute("data-bool");
    if (questionId == 5) {
      //questionId == 5 would be the last question so displayFormPage is called if not true display the wrong or right text
      displayFormPage(targetEl);
    } else if (targetEl == "false") {
      createWrongText();
      //if the wrong answer is choosen - 12 off score
      score = score - 12;
    } else if (targetEl == "true") {
      createRightText();
    }
    //call to remove elements
    removeElements();
    //create new buttons, this time the ids will be incremented so to distinguish them from the rest
    createBtns();
  }
});

//on click of the highscore link
var highScoreLink = document.querySelector(".high-score-link");
highScoreLink.addEventListener("click", function () {
  //display the score page and remove elements that are not supposed to be on the score page
  displayScorePage();
  document.querySelector("p").remove();
  document.querySelector(".main-title").classList.add("text-left");
  startQuizButtonEl.remove();
  var quizList = document.querySelector(".score-list");
  //if the quiz element does not have any child nodes set the text content
  if (!quizList.hasChildNodes()) {
    quizList.textContent = "There are currently no high scores recorded";
  }
});
