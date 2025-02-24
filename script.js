
const inputText = document.getElementById("inputText");
const buttonTask = document.getElementById("buttonTask");
const taskList = document.getElementById("taskList");


document.addEventListener("DOMContentLoaded", loadTasks);


buttonTask.addEventListener("click", () => {
    if (inputText.value.trim() !== "") {
        addTask(inputText.value.trim(), false);
        inputText.value = ""; 
        saveTasks();
    }
});

function loadTasks() {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    savedTasks.forEach(task => addTask(task.text, task.completed));
}

function addTask(taskText, isCompleted) {
    const li = document.createElement("li");

    const taskSpan = document.createElement("span");
    taskSpan.textContent = taskText;
    if (isCompleted) taskSpan.classList.add("completed");

    const completeBtn = document.createElement("button");
    completeBtn.textContent = "✔";
    completeBtn.classList.add("complete-btn");

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "🗑";
    deleteBtn.classList.add("delete-btn");

    li.appendChild(taskSpan);
    li.appendChild(completeBtn);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
}

taskList.addEventListener("click", (event) => {
    if (event.target.classList.contains("complete-btn")) {
        event.target.parentElement.querySelector("span").classList.toggle("completed");
        saveTasks();
    }

    if (event.target.classList.contains("delete-btn")) {
        event.target.parentElement.remove();
        saveTasks();
    }
});


function saveTasks() {
    const tasks = [];
    document.querySelectorAll("#taskList li").forEach(li => {
        tasks.push({
            text: li.querySelector("span").innerText,
            completed: li.querySelector("span").classList.contains("completed")
        });
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}
