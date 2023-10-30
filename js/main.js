
const savedExercises = ['Exercise'];
const savedDuration = ['Duration'];
const savedReps = ['Reps'];
const savedInterval = ['Intervals']
const exerciseList = document.getElementById("exercise-list");
showExercises()


function handleSubmitClick() {
  // grab exercise input and add to exercise array
  const exercise = document.getElementById("exercise");
  const exerciseList = document.getElementById("exercise-list");
  clearExercisesInUI();
  savedExercises.push(exercise.value);

  // grab duration input and add to duration array
  const duration = document.getElementById("duration");
  const durationList = document.getElementById("duration-list");
  savedDuration.push(duration.value);
  console.log(savedDuration);

  // grab reps input and add to reps array
  const reps = document.getElementById("reps");
  const repsList = document.getElementById("reps-list");
  savedReps.push(reps.value);
  console.log(savedReps);

  //grab interval input and add to interval array
  const interval = document.getElementById("interval");
  const intervalList = document.getElementById("interval-list");
  savedInterval.push(interval.value);
  console.log(savedInterval);

    // adds exercises to page
  for (let i = 0; i < savedExercises.length; i++) {
    addItemToList(savedExercises[i], exerciseList);
    // addItemToList(savedDuration[i], durationList);
    // addItemToList(savedReps[i], repsList);
    // addItemToList(savedInterval[i], intervalList);
    // addItemToList("\u00d7", deleteList)
    

  }
  
  

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

function addItemToList(exerciseName, exerciseList) {
  const li = document.createElement("li")
  const exerciseSpan = document.createElement("span")
  const durationSpan = document.createElement("span")
  const repsSpan = document.createElement("span")
  const intervalSpan = document.createElement("span")
  const deleteSpan = document.createElement("span")

  deleteSpan.setAttribute("id", "deleteSpanId")

  exerciseSpan.innerHTML = exerciseName
  durationSpan.innerHTML = exerciseName
  repsSpan.innerHTML = exerciseName
  intervalSpan.innerHTML = exerciseName
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
})





  




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
