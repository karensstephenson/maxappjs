// user enters exercise, duration or reps, and rest interval
//const exercise = document.getElementById("exercise")

// submit these choices
// function showInfo() {
//     exercise.style.display = 'block'
// }

// exercise.addEventListener('submit', showInfo)
// exercise.onSubmit = showInfo

const savedExercises = ['Exercise'];
const savedDuration = ['Duration'];
const savedReps = ['Reps'];
const savedInterval = ['Intervals']

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
  for (var i = 0; i < savedExercises.length; i++) {
    addItemToList(savedExercises[i], exerciseList);
    addItemToList(savedDuration[i], durationList);
    addItemToList(savedReps[i], repsList);
    addItemToList(savedInterval[i], intervalList);
    

  }


}

function clearExercisesInUI() {
  const exerciseList = document.getElementById("exercise-list");
  exerciseList.innerHTML = "";
  const durationList = document.getElementById("duration-list");
  durationList.innerHTML = "";
  const repsList = document.getElementById("reps-list");
  repsList.innerHTML = "";
  const intervalList = document.getElementById("interval-list");
  intervalList.innerHTML = "";
}

function addItemToList(exerciseName, exerciseList) {
  const node = document.createElement("li");
  const textnode = document.createTextNode(exerciseName);
  node.appendChild(textnode);
  exerciseList.appendChild(node);
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
