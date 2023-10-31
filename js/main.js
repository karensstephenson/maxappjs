const exerciseList = document.getElementById
("exercise-list");
const exercise = document.getElementById("exercise");
const duration = document.getElementById("duration");
const reps = document.getElementById("reps");
const interval = document.getElementById("interval");

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
  if (exercise.value === "" || (duration.value === "" && reps.value === "") || interval.value === "") {
    alert("Fill in all fields")
  } else {
    addItemToList()
  } 
  
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
  li.setAttribute("id", "listItem")

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
  if (!exerciseList.hasChildNodes()) {
    showHeadings()
  }
  
}

// delete exercise from list
  exerciseList.addEventListener("click", function(e) {
    e.target.parentNode.remove()
    saveData()
})

//hide form and change buttons when start is pressed
function handleStartClick() {
  const form = document.getElementById("form")
  const startButton = document.getElementById
  ("startButton")
  const h1 = document.getElementById("h1")
  const clear = document.getElementById("clear")
  const pause = document.getElementById("pause")
  const restart = document.getElementById("restart")
  if (form.style.display === "none" ) {
    form.style.display = "flex"
    h1.style.display = 'block'
    startButton.innerHTML = "Start"
    clear.style.display = 'inline-block'
    pause.style.display = "none"
    restart.style.display = "none"
  } else {
    form.style.display = "none"
    h1.style.display = "none"
    startButton.innerHTML = "Add more exercises"
    clear.style.display = 'none'
    pause.style.display = "inline-block"
    restart.style.display = "inline-block"
  }
}

function handleClearClick() {
  exerciseList.innerHTML = ""
  showHeadings()
}




// let timeleft = 10;
// const downloadTimer = setInterval(function(){
//   if(timeleft <= 0){
//     clearInterval(downloadTimer);
//   }
//   document.getElementById("progressBar").value = 10 - timeleft;
//   timeleft -= 1;
// }, 1000);



console.log(interval.value)
let timeleft = interval.value;

const downloadTimer = setInterval(function(){
  if(timeleft <= 0){
    clearInterval(downloadTimer);
  }
  document.getElementById("progressBar").value = 10 - timeleft;
  timeleft -= 1;
}, 1000);
  
const ul = document.getElementById("exercise-list");
const items = ul.getElementsByTagName("li");
// const li2 = document.querySelector("listItem")
// const spans = li2.getElementsByTagName("span")
for (let i = 1; i < items.length; i++) {
//  let intervals = document.querySelector("interval-format").innerText
//  console.log(intervals) 
const li2 = document.getElementById("listItem")
const spans = li2.getElementsByTagName("span")
 console.log(items[i])
 console.log(spans[3])
 console.log(spans)
}









// displayed in a list

// once all exercises have been selected, press start button

// shows current exercise and either duration countdown or reps

// between each exercise, show a rest interval countdown timer

// remove completed exercise from list (change opacity or remove from view??)
