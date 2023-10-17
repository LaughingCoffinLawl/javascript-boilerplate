function displayTasks() {
  const addButton = document.getElementById("addbutton");
  addButton.addEventListener("click", function () {
    createTask();
  });
}

function createTask() {
  console.log("ciao");
}

export default displayTasks;
