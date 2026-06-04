// Get Elements
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

// Function to Add Task
function addTask() {

    const taskText = taskInput.value.trim();

    // Prevent empty tasks
    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    // Create new list item
    const li = document.createElement("li");

    // Add task text
    li.textContent = taskText;

    // Append to task list
    taskList.appendChild(li);

    // Clear input field
    taskInput.value = "";

    // Focus back on input
    taskInput.focus();
}

// Button Click Event
addTaskBtn.addEventListener("click", addTask);

// Enter Key Event
taskInput.addEventListener("keypress", function (event) {

    if (event.key === "Enter") {
        addTask();
    }

});