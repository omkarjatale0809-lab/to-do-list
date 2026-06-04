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

    // Create Delete Button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "🗑";
    deleteBtn.classList.add("delete-btn");

    // Mark Complete / Incomplete
    checkbox.addEventListener("change", function () {

        if (checkbox.checked) {

            span.classList.add("completed");

            // Completion Animation
            li.classList.add("task-complete-animation");

            li.addEventListener("animationend", () => {
                li.classList.remove("task-complete-animation");
            }, { once: true });

        } else {

            span.classList.remove("completed");
        }
    });

    // Delete Task with Animation
    deleteBtn.addEventListener("click", function () {

        li.classList.add("delete-animation");

        li.addEventListener("animationend", () => {
            li.remove();
        }, { once: true });

    });

    // Append Elements
    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteBtn);

    taskList.appendChild(li);

    // Remove New Task Animation Class
    li.addEventListener("animationend", () => {
        li.classList.remove("new-task");
    }, { once: true });

    // Clear Input
    taskInput.value = "";
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