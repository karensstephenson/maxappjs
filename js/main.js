const exerciseList = document.getElementById("exercise-list");
const exercise = document.getElementById("exercise");
const duration = document.getElementById("duration");
const reps = document.getElementById("reps");
const interval = document.getElementById("interval");
let parsedSavedExercises = [];

const savedExercises = localStorage.getItem("completeExercises");
if (savedExercises) {
  parsedSavedExercises = JSON.parse(savedExercises);
} else {
  parsedSavedExercises = [];
}

showExercises();

function showHeadings() {
  const li = document.createElement("li");
  const exerciseSpan = document.createElement("span");
  const durationSpan = document.createElement("span");
  const repsSpan = document.createElement("span");
  const intervalSpan = document.createElement("span");
  const deleteSpan = document.createElement("span");

  exerciseSpan.setAttribute("class", "exercise-format");
  durationSpan.setAttribute("class", "duration-format");
  repsSpan.setAttribute("class", "reps-format");
  intervalSpan.setAttribute("class", "interval-format");
  deleteSpan.setAttribute("id", "deleteSpanId");

  exerciseSpan.innerHTML = "Exercise";
  durationSpan.innerHTML = "Duration (minutes)";
  repsSpan.innerHTML = "Repetitions";
  intervalSpan.innerHTML = "Rest Interval (seconds)";
  deleteSpan.innerHTML = "";

  li.appendChild(exerciseSpan);
  li.appendChild(durationSpan);
  li.appendChild(repsSpan);
  li.appendChild(intervalSpan);
  li.appendChild(deleteSpan);

  exerciseList.appendChild(li);
}

function handleSubmitClick() {
  if (
    exercise.value === "" ||
    (duration.value === "" && reps.value === "") ||
    interval.value === ""
  ) {
    alert("Fill in all fields");
  } else {
    addItemToList();
  }
}

function addItemToList() {
  const li = document.createElement("li");
  const exerciseSpan = document.createElement("span");
  const durationSpan = document.createElement("span");
  const repsSpan = document.createElement("span");
  const intervalSpan = document.createElement("span");
  const deleteSpan = document.createElement("span");

  let uniqueId = new Date().getTime();

  exerciseSpan.setAttribute("class", "exercise-format");
  durationSpan.setAttribute("class", "duration-format");
  repsSpan.setAttribute("class", "reps-format");
  intervalSpan.setAttribute("class", "interval-format");
  deleteSpan.setAttribute("id", uniqueId);
  deleteSpan.setAttribute("class", "delete");
  li.setAttribute("id", "listItem");
  li.setAttribute("class", "listItemClass");

  const exerciseData = {
    id: uniqueId,
    exercise: exercise.value,
    duration: duration.value,
    reps: reps.value,
    interval: interval.value,
  };

  parsedSavedExercises.push(exerciseData);
  console.log(parsedSavedExercises);

  exerciseSpan.innerHTML = exercise.value;
  exercise.value = "";
  durationSpan.innerHTML = duration.value;
  duration.value = "";
  repsSpan.innerHTML = reps.value;
  reps.value = "";
  intervalSpan.innerHTML = interval.value;
  interval.value = "";
  deleteSpan.innerHTML = "Delete";

  li.appendChild(exerciseSpan);
  li.appendChild(durationSpan);
  li.appendChild(repsSpan);
  li.appendChild(intervalSpan);
  li.appendChild(deleteSpan);

  exerciseList.appendChild(li);

  saveData();
}

function saveData() {
  localStorage.setItem("data", exerciseList.innerHTML);
  localStorage.setItem(
    "completeExercises",
    JSON.stringify(parsedSavedExercises)
  );
}

function showExercises() {
  exerciseList.innerHTML = localStorage.getItem("data");
  if (!exerciseList.hasChildNodes()) {
    showHeadings();
  }
}

// delete exercise from list
exerciseList.addEventListener("click", function (e) {
  e.target.parentNode.remove();
  let idToRemove = Number(e.target.id);
  for (let i = 0; i < parsedSavedExercises.length; i++) {
    if (parsedSavedExercises[i].id === idToRemove) {
      parsedSavedExercises.splice(i, 1);
      break;
    }
  }
  saveData();
});

//hide form and change buttons when start is pressed
function handleStartClick() {
  const form = document.getElementById("form");
  const startButton = document.getElementById("startButton");
  const h1 = document.getElementById("h1");
  const clear = document.getElementById("clear");
  const pause = document.getElementById("pause");
  const restart = document.getElementById("restart");
  if (form.style.display === "none") {
    form.style.display = "flex";
    h1.style.display = "block";
    startButton.innerHTML = "Start";
    clear.style.display = "inline-block";
    pause.style.display = "none";
    restart.style.display = "none";
  } else {
    form.style.display = "none";
    h1.style.display = "none";
    startButton.innerHTML = "Add more exercises";
    clear.style.display = "none";
    pause.style.display = "inline-block";
    restart.style.display = "inline-block";
  }

  startCountdown();
}

function handleClearClick() {
  exerciseList.innerHTML = "";
  parsedSavedExercises = [];
  showHeadings();
  saveData();
}

// when start is pressed, short countdown (5 seconds)
// then work through each exercise in the list
// show countdown timer for duration or 'finished/next' button for reps
// then show countdown timer for the rest interval

const timerElement = document.getElementById("timer");
let objectIndex = 0;
let propertyIndex = 1;
function startCountdown() {
  let currentObject = parsedSavedExercises[objectIndex];
  let currentProperty = propertyIndex === 1 ? "duration" : "interval";
  countdown = currentObject[currentProperty];
  timerElement.textContent = `${
    currentProperty === "duration"
      ? parsedSavedExercises[objectIndex].exercise
      : "Rest"
  }: ${countdown} seconds`;
  const countdownInterval = setInterval(function () {
    countdown--;
    timerElement.textContent = `${
      currentProperty === "duration"
        ? parsedSavedExercises[objectIndex].exercise
        : "Rest"
    }: ${countdown} seconds`;
    if (countdown <= 0) {
      timerElement.textContent = `Next countdown...`;
      clearInterval(countdownInterval);
      propertyIndex = propertyIndex === 1 ? 2 : 1;
      if (propertyIndex === 1) {
        objectIndex++;
        if (objectIndex >= parsedSavedExercises.length) {
          timerElement.textContent = "All Exercises Completed";
        } 
      }
      startCountdown()
    }
  }, 1000);
}

// remove completed exercise from list (change opacity or remove from view??)
