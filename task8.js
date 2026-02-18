// DOM SELECTION
const input = document.querySelector(".taskInput");
const button = document.querySelector(".addBtn");
const list = document.querySelector(".taskList");
// EVENT HANDLING
button.addEventListener("click", function () {
    // Get input value
    const taskText = input.value;
    // Check empty input
    if (taskText.trim() === "") {
        alert("Please enter a task!");
        return;
    }
    // CREATE NEW LIST ITEM
    const li = document.createElement("li");
    // Set text
    li.innerText = taskText;
    // Add class (styling + animation applied)
    li.setAttribute("class", "taskItem");
    // REMOVE TASK WHEN CLICKED
    li.addEventListener("click", function () {
        li.remove();
    });
    // APPEND TO LIST
    list.append(li);
    // CLEAR INPUT FIELD
    input.value = "";
});