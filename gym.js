const exercises = [
    { name: "Crunches", sets: 3, reps: 20, video: "C:/Users/subig/Downloads/crunches.mp4" },
    { name: "Leg Raises", sets: 3, reps: 15, video: "C:/Users/subig/Downloads/legraise.mp4" },
    { name: "Bicycle Crunches", sets: 3, reps: 20, video: "C:/Users/subig/Downloads/bicycle.mp4" },
    { name: "Russian Twists", sets: 3, reps: 30, video: "C:/Users/subig/Downloads/russian.mp4" },
    { name: "Dumbbell Bicep Curls", sets: 3, reps: 12, video: "C:/Users/subig/Downloads/bicep.mp4" },
    { name: "Hammer Curls", sets: 3, reps: 12, video: "C:/Users/subig/Downloads/hammer.mp4" },
    { name: "Zottman Curls", sets: 3, reps: 12, video: "C:/Users/subig/Downloads/zottman.mp4" },
    { name: "Dumbbell Shoulder Press", sets: 3, reps: 12, video: "C:/Users/subig/Downloads/shoulder.mp4" },
    { name: "Lateral Raises", sets: 3, reps: 15, video: "C:/Users/subig/Downloads/latraise.mp4" },
    { name: "Front Raises", sets: 3, reps: 12, video: "C:/Users/subig/Downloads/frontraise.mp4" },
    { name: "Dumbbell Floor Press", sets: 3, reps: 12, video: "C:/Users/subig/Downloads/press.mp4" },
    { name: "Dumbbell Chest Fly", sets: 3, reps: 12, video: "C:/Users/subig/Downloads/flychest.mp4.mp4" },
    { name: "Dumbbell Wrist Curls", sets: 3, reps: 15, video: "C:/Users/subig/Downloads/wrist.mp4.mp4" },
    { name: "Reverse Wrist Curls", sets: 3, reps: 15, video: "C:/Users/subig/Downloads/reverse.mp4.mp4" },
    { name: "Dumbbell Holds", sets: 3, reps: 30, video: "C:/Users/subig/Downloads/hold.mp4" }
];

let currentExercise = -1;
let exerciseTime = 0;
let totalTime = 0;
let timerInterval;

// Function to update the workout display
function updateExercise() {
    clearInterval(timerInterval);
    exerciseTime = 0;
    
    if (currentExercise < exercises.length) {
        let ex = exercises[currentExercise]; // Ensure 'ex' is used here
        document.getElementById("exercise-name").textContent = ex.name;
        document.getElementById("set-count").textContent = ex.sets;
        document.getElementById("rep-count").textContent = ex.reps;
        document.getElementById("exercise-video").src = ex.video; // Set the video source here

        // Update the video element
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

// Start workout
document.getElementById("start-btn").addEventListener("click", () => {
    document.getElementById("start-btn").style.display = "none";
    document.getElementById("next-btn").style.display = "inline-block";
    currentExercise = 0;
    updateExercise();
});

// Next exercise
document.getElementById("next-btn").addEventListener("click", () => {
    currentExercise++;
    updateExercise();
});
