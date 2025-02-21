const inputText=document.getElementById("inputText");
const buttonTask=document.getElementById("buttonTask");
const taskList=document.getElementById("taskList");



document.addEventListener("DOMContentLoaded", loadTasks);

function loadTasks() {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    savedTasks.forEach(task => addTask(task.text, task.completed));
}

buttonTask.addEventListener("click", () => {
    if (taskInput.value.trim() !== "") {
        addTask(taskInput.value.trim(), false);
        taskInput.value = ""; // Clear input field
        saveTasks();
    }
});

