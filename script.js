function showTaskForm(columnId) {
    document.getElementById("task-form").style.display = "block";
    document.getElementById("task-form").dataset.columnId = columnId;
  }
  
  function closeTaskForm() {
    document.getElementById("task-form").style.display = "none";
  }
  
  function addTask() {
    var taskName = document.getElementById("task-name").value;
    var columnId = document.getElementById("task-form").dataset.columnId;
    var tasksContainer = document.getElementById(columnId);
    
    var taskElement = document.createElement("div");
    taskElement.textContent = taskName;
    tasksContainer.appendChild(taskElement);
  
    closeTaskForm();
  }
  