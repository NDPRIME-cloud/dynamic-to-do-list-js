document.addEventListener("DOMContentLoaded", function () {
  const addButton = document.getElementById("add-task-btn");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  // STEP 1: Load tasks from Local Storage or initialize as empty array
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  // STEP 2: Function to render a task in the DOM
  function createTaskElement(taskText) {
    const li = document.createElement("li");
    li.textContent = taskText;

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.className = "remove-btn";

    // STEP 3: Remove task on click, update localStorage
    removeBtn.onclick = function () {
      taskList.removeChild(li); // Remove from DOM
      tasks = tasks.filter(task => task !== taskText); // Remove from array
      localStorage.setItem("tasks", JSON.stringify(tasks)); // Update storage
    };

    li.appendChild(removeBtn);
    taskList.appendChild(li);
  }

  // STEP 4: Load all tasks into the DOM when page loads
  function loadTasks() {
    tasks.forEach(taskText => {
      createTaskElement(taskText);
    });
  }

  // STEP 5: Add a new task (called by button or Enter key)
  function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === "") {
      alert("Please enter a task!");
      return;
    }

    // ✅ Check duplicates properly using the array
    if (tasks.includes(taskText)) {
      alert("Task already exists!");
      return;
    }

    createTaskElement(taskText);   // Add to DOM
    tasks.push(taskText);          // Add to array
    localStorage.setItem("tasks", JSON.stringify(tasks)); // Save array

    taskInput.value = ""; // Clear input
  }

  // STEP 6: Event Listeners
  addButton.addEventListener("click", addTask);
  taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      addTask();
    }
  });

  // STEP 7: Load saved tasks from storage when page loads
  loadTasks();
});
// STEP 1: Ask for notification permission
if ("Notification" in window) {
  Notification.requestPermission().then(permission => {
    if (permission === "granted") {
      // STEP 2: Define function
      function showNotification() {
        new Notification("⏰ Reminder", {
          body: "Go back to your To-Do List!",
          icon: "icon.jpg" // optional
        });
      }

      // STEP 3: Send every 1 hour
      setInterval(showNotification, 3600000);

      // Optional: send one right now
      showNotification();
    }
  });
}

