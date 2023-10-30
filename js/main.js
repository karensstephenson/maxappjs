const exerciseList = document.getElementById
("exercise-list");
const exercise = document.getElementById("exercise");
const duration = document.getElementById("duration");
const reps = document.getElementById("reps");
const interval = document.getElementById("interval");

if (!exerciseList.hasChildNodes()) {
  showHeadings()
}
showExercises()

function showHeadings () {
  const li = document.createElement("li")
  const exerciseSpan = document.createElement("span")
  const durationSpan = document.createElement("span")
  const repsSpan = document.createElement("span")
  const intervalSpan = document.createElement("span")
  const deleteSpan = document.createElement("span")

  exerciseSpan.setAttribute("class", "exercise-format")
  durationSpan.setAttribute("class", "duration-format")
  repsSpan.setAttribute("class", "reps-format")
  intervalSpan.setAttribute("class", "interval-format")
  deleteSpan.setAttribute("id", "deleteSpanId")

  exerciseSpan.innerHTML = "Exercise"
  durationSpan.innerHTML = "Duration (minutes)"
  repsSpan.innerHTML = "Repetitions"
  intervalSpan.innerHTML = "Rest Interval (seconds)"
  deleteSpan.innerHTML = ""

  li.appendChild(exerciseSpan)
  li.appendChild(durationSpan)
  li.appendChild(repsSpan)
  li.appendChild(intervalSpan)
  li.appendChild(deleteSpan)

  exerciseList.appendChild(li)
  
}


function handleSubmitClick() {   
  addItemToList()
} 
  
function clearExercisesInUI() {
  const exerciseList = document.getElementById("exercise-list");
  exerciseList.innerHTML = "";
  // const durationList = document.getElementById("duration-list");
  // durationList.innerHTML = "";
  // const repsList = document.getElementById("reps-list");
  // repsList.innerHTML = "";
  // const intervalList = document.getElementById("interval-list");
  // intervalList.innerHTML = "";
  // const deleteList = document.getElementById("deleteList")
  // deleteList.innerHTML = ""
}

function addItemToList() {
  const li = document.createElement("li")
  const exerciseSpan = document.createElement("span")
  const durationSpan = document.createElement("span")
  const repsSpan = document.createElement("span")
  const intervalSpan = document.createElement("span")
  const deleteSpan = document.createElement("span")

  exerciseSpan.setAttribute("class", "exercise-format")
  durationSpan.setAttribute("class", "duration-format")
  repsSpan.setAttribute("class", "reps-format")
  intervalSpan.setAttribute("class", "interval-format")
  deleteSpan.setAttribute("id", "deleteSpanId")

  exerciseSpan.innerHTML = exercise.value
  exercise.value = ""
  durationSpan.innerHTML = duration.value
  duration.value = ""
  repsSpan.innerHTML = reps.value
  reps.value = ""
  intervalSpan.innerHTML = interval.value
  interval.value = ""
  deleteSpan.innerHTML = "\u00d7"

  li.appendChild(exerciseSpan)
  li.appendChild(durationSpan)
  li.appendChild(repsSpan)
  li.appendChild(intervalSpan)
  li.appendChild(deleteSpan)

  exerciseList.appendChild(li)
  saveData()
}

function saveData() {
  localStorage.setItem("data", exerciseList.innerHTML)
}

function showExercises() {
  exerciseList.innerHTML = localStorage.getItem("data")
}

// delete exercise from list
  exerciseList.addEventListener("click", function(e) {
    e.target.parentNode.remove()
    saveData()
})

//hide form when start is pressed

function handleStartClick() {
  const form = document.getElementById("form")
  const startButton = document.getElementById("startButton")
  if (form.style.display === "none") {
    form.style.display = "flex"
  } else {
    form.style.display = "none"
    startButton.innerHTML = "Add more exercises"
  }
}





  




function addDeleteButtonToList(exerciseName, exerciseList) {
  const button = document.createElement("button");
  button.setAttribute('id', exerciseName)
  const textnode = document.createTextNode(exerciseName);
  button.appendChild(textnode);
  exerciseList.appendChild(button);
}



// if exercise or duration/reps or rest empty, display message to enter value
if (exercise === "") {
  console.log("Enter an exercise");
}

// displayed in a list

// once all exercises have been selected, press start button

// shows current exercise and either duration countdown or reps

// between each exercise, show a rest interval countdown timer

// remove completed exercise from list (change opacity or remove from view??)
