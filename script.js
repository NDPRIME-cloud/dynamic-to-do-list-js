document.addEventListener("DOMContentLoaded", function(){
const addButton = document.getElementById("add-task-btn")
const taskInput = document.getElementById("task-input")
const taskList = document.getElementById("task-list")

function addTask() {
    let taskText = taskInput.value.trim()
    if (taskText === "") {
        alert("Please enter a task!");
        return;

    }
    if (taskList !== "") {
        const li =document.createElement("li");
        li.textContent = taskText;
        
    
    const removeBtn = document.createElement("button")//creating the remove button
    removeBtn.textContent = "Remove"
    removeBtn.className = "remove-btn"
    removeBtn.onclick =  function (){
        taskList.removeChild(li) 
    };

    li.appendChild(removeBtn);//adds remove button to <li>
 
    taskList.appendChild(li); // adds the whole li to tasklist

    taskInput.value = ""
     }

}

addButton.addEventListener("click", addTask)
taskInput.addEventListener("keypress", function(event){
    if(event.key === "Enter"){
        addTask();
    }

})
});

    


