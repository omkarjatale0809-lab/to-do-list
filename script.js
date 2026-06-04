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
function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    const li = document.createElement("li");
    li.textContent = taskText;

    // Add animation class
    li.classList.add("new-task");

    taskList.appendChild(li);

    // Remove animation class after animation ends
    li.addEventListener("animationend", () => {
        li.classList.remove("new-task");
    });

    taskInput.value = "";
    taskInput.focus();
}
function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    // Create Task Item
    const li = document.createElement("li");
    li.classList.add("task-item", "new-task");

    // Create Checkbox
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("task-checkbox");

    // Create Task Text
    const span = document.createElement("span");
    span.textContent = taskText;
    span.classList.add("task-text");

    // Mark Complete / Incomplete
    checkbox.addEventListener("change", function () {
        span.classList.toggle("completed");
    });

    // Append Elements
    li.appendChild(checkbox);
    li.appendChild(span);

    taskList.appendChild(li);

    // Remove animation class after animation ends
    li.addEventListener("animationend", () => {
        li.classList.remove("new-task");
    });

    taskInput.value = "";
    taskInput.focus();
}
// Mark Complete / Incomplete
checkbox.addEventListener("change", function () {

    if (checkbox.checked) {

        span.classList.add("completed");

        // Play animation
        li.classList.add("task-complete-animation");

        li.addEventListener("animationend", () => {
            li.classList.remove("task-complete-animation");
        }, { once: true });

    } else {

        span.classList.remove("completed");
        li.style.backgroundColor = "";

    }
});