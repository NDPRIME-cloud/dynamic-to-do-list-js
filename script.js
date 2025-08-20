// document.addEventListener("DOMContentLoaded", function(){
// const addButton = document.getElementById("add-task-btn")
// const taskInput = document.getElementById("task-input")
// const taskList = document.getElementById("task-list")

// function addTask() {
//     let taskText = taskInput.value.trim()
//     if (taskText === "") {
//         alert("Please enter a task!");
//         return;

//     }

//     let tasks = taskList.getElementsByTagName("li")
//     for (let task of tasks ){
//       if(task.firstChild.nodeValue ===taskText){
//         alert("Task already addded");
//         return;
//       }
//     }



















    
//         const li =document.createElement("li");
//         li.textContent = taskText;
        
    
//     const removeBtn = document.createElement("button")//creating the remove button
//     removeBtn.textContent = "Remove"
//     removeBtn.className = "remove-btn"
//     removeBtn.onclick =  function (){
//         taskList.removeChild(li) 
//     };

//     li.appendChild(removeBtn);//adds remove button to <li>
 
//     taskList.appendChild(li); // adds the whole li to tasklist

//     taskInput.value = ""
     
// classList.add
// }

// addButton.addEventListener("click", addTask)
// taskInput.addEventListener("keypress", function(event){
//     if(event.key === "Enter"){
//         addTask();
//     }

// })
// });





    
// document.addEventListener("DOMContentLoaded", function () {
//   const addButton = document.getElementById("add-task-btn");
//   const taskInput = document.getElementById("task-input");
//   const taskList = document.getElementById("task-list");

//   // STEP 1: Load tasks from Local Storage or initialize as empty array
//   let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

//   // STEP 2: Function to render a task in the DOM
//   function createTaskElement(taskText) {
//     const li = document.createElement("li");
//     li.textContent = taskText;

//     const removeBtn = document.createElement("button");
//     removeBtn.textContent = "Remove";
//     removeBtn.className = "remove-btn";

//     // STEP 3: Remove task on click, update localStorage
//     removeBtn.onclick = function () {
//       taskList.removeChild(li); // Remove from DOM
//       tasks = tasks.filter(task => task !== taskText); // Remove from array
//       localStorage.setItem("tasks", JSON.stringify(tasks)); // Update storage
//     };

//     li.appendChild(removeBtn);
//     taskList.appendChild(li);
//   }

//   // STEP 4: Load all tasks into the DOM when page loads
//   function loadTasks() {
//     tasks.forEach(taskText => {
//       createTaskElement(taskText);
//     });
//   }

//   // STEP 5: Add a new task (called by button or Enter key)
//   function addTask() {
//     const taskText = taskInput.value.trim();
//     if (taskText === "") {
//       alert("Please enter a task!");
//       return;
//     }
// // checks for duplicate taasks
//     let tasks = taskList.getElementsByTagName("li")
//     for (let task of tasks ){
//       if(task.firstChild.nodeValue ===taskText){
//         alert("Task already addded");
//         return;
//       }
//     }

//     // Avoid duplicates (optional)
//     if (tasks.includes(taskText)) {
//       alert("Task already exists!");
//       return;
//     }

//     createTaskElement(taskText);   // Add to DOM
//     tasks.push(taskText);          // Add to array
//     localStorage.setItem("tasks", JSON.stringify(tasks)); // Save array

//     taskInput.value = ""; // Clear input
//   }

//   // STEP 6: Event Listeners
//   addButton.addEventListener("click", addTask);
//   taskInput.addEventListener("keypress", function (event) {
//     if (event.key === "Enter") {
//       addTask();
//     }
//   });

//   // STEP 7: Load saved tasks from storage when page loads
//   loadTasks();
// });


// document.addEventListener("DOMContentLoaded", function () {
//   const addButton = document.getElementById("add-task-btn");
//   const taskInput = document.getElementById("task-input");
//   const taskList = document.getElementById("task-list");
//   const reminderInput = document.getElementById("reminder-time");

//   //  Ask for notification permission once
//   if (Notification.permission !== "granted") {
//   Notification.requestPermission().then(permission => {
//     console.log("Notification permission:", permission);
//     if (permission !== "granted") {
//       alert("Please allow notifications in your browser!");
//     }
//   });
// }



//   function addTask() {
//     let taskText = taskInput.value.trim();
//     let timeValue = reminderInput.value; // e.g. "14:30"
//     let now = new Date();

//     if (taskText === "") {
//       alert("Please enter a task!");
//       return;
//     }

//     // Duplicate check
//     let tasks = taskList.getElementsByTagName("li");
//     for (let task of tasks) {
//       if (task.dataset.task === taskText) {
//         alert("Task already added");
//         return;
//       }
//     }

//     // Create li
//     const li = document.createElement("li");
//     li.dataset.task = taskText;
//     li.textContent = taskText;

//     let reminderTime;
//     if (timeValue) {
//       // build reminder date using today's date + chosen time
//       reminderTime = new Date();
//       let [hours, minutes] = timeValue.split(":");
//       reminderTime.setHours(hours, minutes, 0, 0);

//       li.textContent += ` (reminder: ${timeValue})`;
//     }

//     // Remove button
//     const removeBtn = document.createElement("button");
//     removeBtn.textContent = "Remove";
//     removeBtn.className = "remove-btn";
//     removeBtn.onclick = function () {
//       taskList.removeChild(li);
//     };

//     li.appendChild(removeBtn);
//     taskList.appendChild(li);

//     // // ✅ Schedule browser notification
//     // if (reminderTime) {
//     //   let delay = reminderTime - now;
//     //   if (delay > 0) {
//     //     setTimeout(() => {
//     //       new Notification("⏰ Reminder", {
//     //         body: taskText,
//     //         icon: "https://cdn-icons-png.flaticon.com/512/1827/1827392.png"
//     //       });
//     //     }, delay);
//     //   }
//     // }
//     let delay = reminderTime - now;
// if (delay <= 0) {
//   reminderTime.setDate(reminderTime.getDate() + 1); // push to tomorrow
//   delay = reminderTime - now;
// }

// setTimeout(() => {
//   new Notification("⏰ Reminder", {
//     body: taskText,
//     icon: "https://cdn-icons-png.flaticon.com/512/1827/1827392.png"
//   });
// }, delay);


//     // reset inputs
//     taskInput.value = "";
//     reminderInput.value = "";
//   }

//   addButton.addEventListener("click", addTask);
//   taskInput.addEventListener("keypress", function (event) {
//     if (event.key === "Enter") {
//       addTask();
//     }
//   });
// });


// document.addEventListener("DOMContentLoaded", function () {
//   const addButton = document.getElementById("add-task-btn");
//   const taskInput = document.getElementById("task-input");
//   const taskList = document.getElementById("task-list");
//   const reminderInput = document.getElementById("reminder-time");

//   // Ask for notification permission once
//   if (Notification.permission !== "granted") {
//     Notification.requestPermission().then(permission => {
//       if (permission !== "granted") {
//         alert("Please allow notifications in your browser!");
//       }
//     });
//   }

//   // ---- Save tasks to localStorage ----
//   function saveTasks() {
//     let tasks = [];
//     taskList.querySelectorAll("li").forEach(li => {
//       tasks.push({
//         text: li.dataset.task,
//         reminder: li.dataset.reminder || null
//       });
//     });
//     localStorage.setItem("tasks", JSON.stringify(tasks));
//   }

//   // ---- Schedule reminder ----
//   function scheduleReminder(taskText, reminderTime) {
//     if (!reminderTime) return;

//     let now = new Date();
//     let delay = reminderTime - now;

//     if (delay <= 0) {
//       reminderTime.setDate(reminderTime.getDate() + 1); // push to tomorrow
//       delay = reminderTime - now;
//     }

//     setTimeout(() => {
//       if (Notification.permission === "granted") {
//         new Notification("⏰ Reminder", {
//           body: taskText,
//           icon: "https://cdn-icons-png.flaticon.com/512/1827/1827392.png"
//         });
//       }
//     }, delay);
//   }

//   // ---- Add a new task ----
//   function addTask(taskText = null, reminderStr = null) {
//     taskText = taskText || taskInput.value.trim();
//     let timeValue = reminderStr || reminderInput.value;
//     let reminderTime = null;

//     if (taskText === "") {
//       alert("Please enter a task!");
//       return;
//     }

//     // Duplicate check
//     let tasks = taskList.getElementsByTagName("li");
//     for (let task of tasks) {
//       if (task.dataset.task === taskText) {
//         alert("Task already added");
//         return;
//       }
//     }

//     // Create li
//     const li = document.createElement("li");
//     li.dataset.task = taskText;
//     li.textContent = taskText;

//     if (timeValue) {
//       reminderTime = new Date();
//       let [hours, minutes] = timeValue.split(":");
//       reminderTime.setHours(hours, minutes, 0, 0);
//       li.dataset.reminder = timeValue;
//       li.textContent += ` (reminder: ${timeValue})`;
//     }

//     // Remove button
//     const removeBtn = document.createElement("button");
//     removeBtn.textContent = "Remove";
//     removeBtn.className = "remove-btn";
//     removeBtn.onclick = function () {
//       taskList.removeChild(li);
//       saveTasks();
//     };

//     li.appendChild(removeBtn);
//     taskList.appendChild(li);

//     // Schedule reminder
//     if (reminderTime) {
//       scheduleReminder(taskText, reminderTime);
//     }

//     saveTasks();

//     // reset inputs
//     taskInput.value = "";
//     reminderInput.value = "";
//   }

//   // ---- Load saved tasks from localStorage ----
//   function loadTasks() {
//     let saved = JSON.parse(localStorage.getItem("tasks")) || [];
//     saved.forEach(task => {
//       addTask(task.text, task.reminder);
//     });
//   }

//   // Event listeners
//   addButton.addEventListener("click", () => addTask());
//   taskInput.addEventListener("keypress", function (event) {
//     if (event.key === "Enter") {
//       addTask();
//     }
//   });

//   // Load tasks on page start
//   loadTasks();
// });




// document.addEventListener("DOMContentLoaded", function () {
//   const addButton = document.getElementById("add-task-btn");
//   const taskInput = document.getElementById("task-input");
//   const taskList = document.getElementById("task-list");
//   const reminderInput = document.getElementById("reminder-time");

//   // Ask for notification permission once
//   if (Notification.permission !== "granted") {
//     Notification.requestPermission().then(permission => {
//       if (permission !== "granted") {
//         alert("Please allow notifications in your browser!");
//       }
//     });
//   }

//   // ---- Save tasks to localStorage ----
//   function saveTasks() {
//     let tasks = [];
//     taskList.querySelectorAll("li").forEach(li => {
//       tasks.push({
//         text: li.dataset.task,
//         reminder: li.dataset.reminder || null
//       });
//     });
//     localStorage.setItem("tasks", JSON.stringify(tasks));
//   }

//   // ---- Schedule reminder ----
//   function scheduleReminder(taskText, reminderTime, countdownEl) {
//     if (!reminderTime) return;

//     let now = new Date();
//     let delay = reminderTime - now;

//     if (delay <= 0) {
//       reminderTime.setDate(reminderTime.getDate() + 1); // push to tomorrow
//       delay = reminderTime - now;
//     }

//     // Update countdown every second
//     let countdownInterval = setInterval(() => {
//       let remaining = reminderTime - new Date();
//       if (remaining <= 0) {
//         countdownEl.textContent = "⏰ Due now!";
//         clearInterval(countdownInterval);
//       } else {
//         let mins = Math.floor(remaining / 1000 / 60);
//         let secs = Math.floor((remaining / 1000) % 60);
//         countdownEl.textContent = `⏳ ${mins}m ${secs}s`;
//       }
//     }, 1000);

//     // Trigger notification at the right time
//     setTimeout(() => {
//       if (Notification.permission === "granted") {
//         new Notification("⏰ Reminder", {
//           body: taskText,
//           icon: "https://cdn-icons-png.flaticon.com/512/1827/1827392.png"
//         });
//       }
//       clearInterval(countdownInterval);
//       countdownEl.textContent = "✅ Done";
//     }, delay);
//   }

//   // ---- Add a new task ----
//   function addTask(taskText = null, reminderStr = null) {
//     taskText = taskText || taskInput.value.trim();
//     let timeValue = reminderStr || reminderInput.value;
//     let reminderTime = null;

//     if (taskText === "") {
//       alert("Please enter a task!");
//       return;
//     }

//     // Duplicate check
//     let tasks = taskList.getElementsByTagName("li");
//     for (let task of tasks) {
//       if (task.dataset.task === taskText) {
//         alert("Task already added");
//         return;
//       }
//     }

//     // Create li
//     const li = document.createElement("li");
//     li.dataset.task = taskText;
//     li.textContent = taskText;

//     // Create countdown display
//     const countdownEl = document.createElement("span");
//     countdownEl.style.marginLeft = "10px";
//     countdownEl.style.fontSize = "0.9em";
//     countdownEl.style.color = "blue";

//     if (timeValue) {
//       reminderTime = new Date();
//       let [hours, minutes] = timeValue.split(":");
//       reminderTime.setHours(hours, minutes, 0, 0);
//       li.dataset.reminder = timeValue;
//       li.textContent += ` (reminder: ${timeValue})`;
//     }

//     // Remove button
//     const removeBtn = document.createElement("button");
//     removeBtn.textContent = "Remove";
//     removeBtn.className = "remove-btn";
//     removeBtn.style.marginLeft = "10px";
//     removeBtn.onclick = function () {
//       taskList.removeChild(li);
//       saveTasks();
//     };

//     li.appendChild(countdownEl);
//     li.appendChild(removeBtn);
//     taskList.appendChild(li);

//     // Schedule reminder + countdown
//     if (reminderTime) {
//       scheduleReminder(taskText, reminderTime, countdownEl);
//     }

//     saveTasks();

//     // reset inputs
//     taskInput.value = "";
//     reminderInput.value = "";
//   }

//   // ---- Load saved tasks from localStorage ----
//   function loadTasks() {
//     let saved = JSON.parse(localStorage.getItem("tasks")) || [];
//     saved.forEach(task => {
//       addTask(task.text, task.reminder);
//     });
//   }

//   // Event listeners
//   addButton.addEventListener("click", () => addTask());
//   taskInput.addEventListener("keypress", function (event) {
//     if (event.key === "Enter") {
//       addTask();
//     }
//   });

//   // Load tasks on page start
//   loadTasks();
// });




document.addEventListener("DOMContentLoaded", function () {
  const addButton = document.getElementById("add-task-btn");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");
  const reminderInput = document.getElementById("reminder-time");

  // Ask for notification permission once
  if (Notification.permission !== "granted") {
    Notification.requestPermission();
  }

  // === Helpers ===
  function nextOccurrenceFromTimeString(timeStr) {
    if (!timeStr) return null;
    const [h, m] = timeStr.split(":").map(Number);
    const t = new Date();
    t.setSeconds(0, 0);
    t.setHours(h, m, 0, 0);
    if (t.getTime() <= Date.now()) {
      t.setDate(t.getDate() + 1); // tomorrow if already passed
    }
    return t;
  }

  function labelFor(reminderDate) {
    const now = new Date();
    const today = now.toDateString();
    const tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1).toDateString();
    const hh = String(reminderDate.getHours()).padStart(2, "0");
    const mm = String(reminderDate.getMinutes()).padStart(2, "0");
    if (reminderDate.toDateString() === today) return `today ${hh}:${mm}`;
    if (reminderDate.toDateString() === tomorrow) return `tomorrow ${hh}:${mm}`;
    return `${hh}:${mm}`;
  }

  function saveTasks() {
    const tasks = [];
    taskList.querySelectorAll("li").forEach(li => {
      tasks.push({
        text: li.dataset.task,
        reminder: li.dataset.reminder || null
      });
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  function scheduleReminder(taskText, reminderTime, countdownEl) {
    if (!reminderTime) return;

    function updateCountdown() {
      const remaining = reminderTime.getTime() - Date.now();
      if (remaining <= 0) {
        countdownEl.textContent = "⏰";
        return true;
      }
      const mins = Math.floor(remaining / 60000);
      const secs = Math.floor((remaining % 60000) / 1000);
      countdownEl.textContent = ` ${mins}m ${secs}s`;
      return false;
    }

    // first update + ticking every second
    if (!updateCountdown()) {
      const interval = setInterval(() => {
        if (updateCountdown()) clearInterval(interval);
      }, 1000);

      setTimeout(() => {
        if (Notification.permission === "granted") {
          new Notification("⏰ Reminder", { body: taskText });
        }
        clearInterval(interval);
        countdownEl.textContent = "✅ Done";
      }, reminderTime.getTime() - Date.now());
    }
  }

  function addTask(taskText, timeValue, fromStorage = false) {
    if (!taskText.trim()) return;

    // Prevent duplicate
    let tasks = taskList.getElementsByTagName("li");
    for (let task of tasks) {
      if (task.dataset.task === taskText) {
        if (!fromStorage) alert("Task already added");
        return;
      }
    }

    const li = document.createElement("li");
    li.dataset.task = taskText;
    li.textContent = taskText;

    let reminderTime = null;
    if (timeValue) {
      reminderTime = nextOccurrenceFromTimeString(timeValue);
      li.dataset.reminder = timeValue;
      li.textContent += ` (reminder: ${labelFor(reminderTime)})`;
    }

    // Countdown display
    const countdownEl = document.createElement("span");
    countdownEl.className = "countdown";
    li.appendChild(countdownEl);

    // Remove button
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.className = "remove-btn";
    removeBtn.onclick = function () {
      taskList.removeChild(li);
      saveTasks();
    };

    li.appendChild(removeBtn);
    taskList.appendChild(li);

    if (reminderTime) {
      scheduleReminder(taskText, reminderTime, countdownEl);
    }

    if (!fromStorage) {
      saveTasks();
      taskInput.value = "";
      reminderInput.value = "";
    }
  }

  // Load saved tasks on refresh
  const saved = JSON.parse(localStorage.getItem("tasks")) || [];
  saved.forEach(t => addTask(t.text, t.reminder, true));

  // Add task events
  addButton.addEventListener("click", () => {
    addTask(taskInput.value, reminderInput.value);
  });

  taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      addTask(taskInput.value, reminderInput.value);
    }
  });
});
