const exercises = [
    { name: "Crunches", sets: 3, reps: 20, video: "crunches.mp4" },
    { name: "Leg Raises", sets: 3, reps: 15, video: "legraise.mp4" },
    { name: "Bicycle Crunches", sets: 3, reps: 20, video: "bicycle.mp4" },
    { name: "Russian Twists", sets: 3, reps: 30, video: "russian.mp4" },
    { name: "Dumbbell Bicep Curls", sets: 3, reps: 12, video: "bicep.mp4" },
    { name: "Hammer Curls", sets: 3, reps: 12, video: "hammer.mp4" },
    { name: "Zottman Curls", sets: 3, reps: 12, video: "zottman.mp4" },
    { name: "Dumbbell Shoulder Press", sets: 3, reps: 12, video: "shoulder.mp4" },
    { name: "Lateral Raises", sets: 3, reps: 15, video: "latraise.mp4" },
    { name: "Front Raises", sets: 3, reps: 12, video: "frontraise.mp4" },
    { name: "Dumbbell Floor Press", sets: 3, reps: 12, video: "press.mp4" },
    { name: "Dumbbell Chest Fly", sets: 3, reps: 12, video: "flychest.mp4.mp4" },
    { name: "Dumbbell Wrist Curls", sets: 3, reps: 15, video: "wrist.mp4.mp4" },
    { name: "Reverse Wrist Curls", sets: 3, reps: 15, video: "reverse.mp4.mp4" },
    { name: "Dumbbell Holds", sets: 3, reps: 30, video: "hold.mp4" }
];

let currentExercise = -1;
let exerciseTime = 0;
let totalTime = 0;
let timerInterval;


function updateExercise() {
    clearInterval(timerInterval);
    exerciseTime = 0;
    
    if (currentExercise < exercises.length) {
        let ex = exercises[currentExercise]; 
        document.getElementById("exercise-name").textContent = ex.name;
        document.getElementById("set-count").textContent = ex.sets;
        document.getElementById("rep-count").textContent = ex.reps;
        document.getElementById("exercise-video").src = ex.video; 

    
        const videoElement = document.getElementById("exercise-video");
        videoElement.load();

        timerInterval = setInterval(() => {
            exerciseTime++;
            totalTime++;
            document.getElementById("exercise-timer").textContent = exerciseTime;
            document.getElementById("total-timer").textContent = totalTime;
        }, 1000);
    } else {
        alert("Workout complete!");
        clearInterval(timerInterval);
        document.getElementById("exercise-name").textContent = "Workout Finished!";
        document.getElementById("set-count").textContent = "-";
        document.getElementById("rep-count").textContent = "-";
        document.getElementById("next-btn").style.display = "none";
    }
}


document.getElementById("start-btn").addEventListener("click", () => {
    document.getElementById("start-btn").style.display = "none";
    document.getElementById("next-btn").style.display = "inline-block";
    currentExercise = 0;
    updateExercise();
});


document.getElementById("next-btn").addEventListener("click", () => {
    currentExercise++;
    updateExercise();
});
