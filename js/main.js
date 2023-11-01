const exerciseList = document.getElementById
("exercise-list");
const exercise = document.getElementById("exercise");
const duration = document.getElementById("duration");
const reps = document.getElementById("reps");
const interval = document.getElementById("interval");
let parsedSavedExercises = []

const savedExercises = localStorage.getItem('completeExercises')
if (savedExercises) {
  parsedSavedExercises = JSON.parse(savedExercises)
  console.log(parsedSavedExercises)
} else {
  parsedSavedExercises = []
  console.log("No saved exercises")
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

  let uniqueId = new Date().getTime()
  
  exerciseSpan.setAttribute("class", "exercise-format")
  durationSpan.setAttribute("class", "duration-format")
  repsSpan.setAttribute("class", "reps-format")
  intervalSpan.setAttribute("class", "interval-format")
  deleteSpan.setAttribute("id", uniqueId)
  deleteSpan.setAttribute("class", "delete")
  li.setAttribute("id", "listItem")
  li.setAttribute("class", "listItemClass")
  
  
  const exerciseData = {
    id: uniqueId,
    exercise: exercise.value,
    duration: duration.value,
    reps: reps.value,
    interval: interval.value
  }
  
  parsedSavedExercises.push(exerciseData)
  console.log(parsedSavedExercises)
  
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
  localStorage.setItem("completeExercises", JSON.stringify(parsedSavedExercises) )
  
  
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
    // if (e.target.classList.contains("delete")) {
    let idToRemove = Number(e.target.id)
    console.log("working up to here")
    console.log(typeof(idToRemove))
    console.log(typeof(parsedSavedExercises[0].id))
      // parsedSavedExercises = parsedSavedExercises.filter(function(submission) {
      //  return submission.id !== idToRemove
      // })
    for (let i = 0; i < parsedSavedExercises.length; i++) {
      if (parsedSavedExercises[i].id === idToRemove) {
        console.log("working")
        console.log(idToRemove)
        parsedSavedExercises.splice(i, 1)
        break
      } else {
        console.log("working here?")
      }
    }
    
    saveData()
    console.log(parsedSavedExercises)
    console.log(`Object with ID ${idToRemove} removed from the array.`) 
              
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
  saveData()
}




// let timeleft = 10;
// const downloadTimer = setInterval(function(){
//   if(timeleft <= 0){
//     clearInterval(downloadTimer);
//   }
//   document.getElementById("progressBar").value = 10 - timeleft;
//   timeleft -= 1;
// }, 1000);



// for (i = 0; i < intervalArray.length; i++) {
//   let timeleft = intervalArray[i]
//   console.log(timeleft)
// const downloadTimer = setInterval(function(){
//   if(timeleft <= 0){
//     document.getElementById("countdown").innerHTML = ""
//   }
//   document.getElementById("countdown").innerHTML = timeleft;
//   // while (timeleft >= 0) {
//   //   timeleft -= 1;
//   // }
//   timeleft -= 1
// }, 1000);
// }

  












// displayed in a list

// once all exercises have been selected, press start button

// shows current exercise and either duration countdown or reps

// between each exercise, show a rest interval countdown timer

// remove completed exercise from list (change opacity or remove from view??)
