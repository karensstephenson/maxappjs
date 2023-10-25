// user enters exercise, duration or reps, and rest interval
const exercise = document.getElementById("exercise")

// submit these choices
function showInfo() {
    exercise.style.display = 'block'
}

exercise.addEventListener('submit', showInfo)

// if exercise or duration/reps or rest empty, display message to enter value
if (exercise === '') {
    console.log('Enter an exercise')
}


// displayed in a list

// once all exercises have been selected, press start button

// shows current exercise and either duration countdown or reps

// between each exercise, show a rest interval countdown timer

// remove completed exercise from list (change opacity or remove from view??)


