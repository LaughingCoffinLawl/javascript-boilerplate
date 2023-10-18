let index = 1;
let currentMain = null;

function displayTasks() {
  const addButton = document.getElementById("addbutton");
  addButton.addEventListener("click", function () {
    createDialogTasks();
  });
}

function createDialogTasks() {
  const content = document.getElementById("content");
  const dialog_tasks = document.createElement("dialog");

  const input_dialog_task = document.createElement("input");
  input_dialog_task.setAttribute("id", "input_create_task_name");
  input_dialog_task.setAttribute("type", "text");

  const create_task_name = document.createElement("button");
  create_task_name.setAttribute("id", "create-button");
  create_task_name.textContent = "Create";

  create_task_name.addEventListener("click", function () {
    createDialogButton(input_dialog_task, dialog_tasks);
  });

  const close_dialog_button = document.createElement("button");
  close_dialog_button.textContent = "Close";

  close_dialog_button.addEventListener("click", function () {
    dialog_tasks.close();
  });

  content.appendChild(dialog_tasks);
  dialog_tasks.appendChild(input_dialog_task);
  dialog_tasks.appendChild(create_task_name);
  dialog_tasks.appendChild(close_dialog_button);
  dialog_tasks.showModal();
}

function displayTask(getTaskText) {
  const div_new_task = document.getElementById("added-tasks");

  const display_task_name = document.createElement("h1");
  const taskID = index;
  display_task_name.setAttribute("data", index);
  display_task_name.classList.add("task_name");
  display_task_name.textContent = getTaskText;

  display_task_name.addEventListener("click", function () {
    const taskID = display_task_name.getAttribute("data");
    const main = document.querySelector(`[data-main-for="${taskID}"]`);
    if (main) {
      if (currentMain) {
        currentMain.style.display = "none"; // Hide the current main
      }
      currentMain = main;
      currentMain.style.display = "block"; // Show the new current main
    } else {
      if (currentMain) {
        currentMain.style.display = "none"; // Hide the current main
      }
      currentMain = displayTaskName(taskID); // Set the new current main
    }

    const actives = document.querySelectorAll(".active");

    actives.forEach((active) => {
      active.classList.remove("active");
    });

    display_task_name.classList.add("active");

    if (display_task_name.classList.contains("active")) {
      display_task_name.style.display = "block";
    } else {
      display_task_name.style.display = "none";
    }
  });

  const delete_task_button = document.createElement("button");
  delete_task_button.setAttribute("data", index);
  delete_task_button.textContent = "delete";

  delete_task_button.addEventListener("click", function () {
    deleteTaskButton(display_task_name);
  });

  div_new_task.appendChild(display_task_name);
  div_new_task.appendChild(delete_task_button);
  index++;
}

function createDialogButton(input_dialog_task, dialog_tasks) {
  if (input_dialog_task.value != "") {
    displayTask(input_dialog_task.value);
    dialog_tasks.close();
    console.log(input_dialog_task.value);
  } else {
    alert("Insert at least a char");
  }
}

function displayTaskName(taskID) {
  const main_container = document.getElementById("main-container");

  const main = document.createElement("main");
  main.setAttribute("data-main-for", taskID);
  main.style.display = "block"; // Show the new main

  const test = document.createElement("button");

  main.appendChild(test);

  test.addEventListener("click", function () {
    main.appendChild(createSubTask());
  });
  test.textContent = "New Task";

  main_container.appendChild(main);
  return main;
}

function deleteTaskButton(display_task_name) {
  const id_element_to_delete = display_task_name.getAttribute("data");
  const test = document.querySelectorAll(
    "[data='" + id_element_to_delete + "']"
  );
  test.forEach((item) => {
    item.outerHTML = "";
  });
}

function createSubTask() {
  const sub_task_dialog = document.createElement("dialog");

  const checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");

  const sub_task_input = document.createElement("input");
  sub_task_input.setAttribute("type", "text");

  const calendar = document.createElement("input");
  calendar.setAttribute("type", "date");

  const close_sub_task_button = document.createElement("button");
  close_sub_task_button.textContent = "Close";

  close_sub_task_button.addEventListener("click", function () {
    sub_task_dialog.close();
  });

  const submit_sub_task_button = document.createElement("button");
  submit_sub_task_button.textContent = "Submit";

  submit_sub_task_button.addEventListener("click", function () {
    const subTaskInfo = {
      isChecked: checkbox.checked,
      taskName: sub_task_input.value,
      date: calendar.value,
    };

    displaySubTaskInfo(subTaskInfo);

    sub_task_dialog.close();
  });

  sub_task_dialog.appendChild(checkbox);
  sub_task_dialog.appendChild(sub_task_input);
  sub_task_dialog.appendChild(calendar);
  sub_task_dialog.appendChild(submit_sub_task_button);
  sub_task_dialog.appendChild(close_sub_task_button);

  sub_task_dialog.show();

  return sub_task_dialog;
}

function displaySubTaskInfo(subTaskInfo) {
  if (currentMain) {
    const subTaskDiv = document.createElement("div");

    const dateElement = document.createElement("p");
    dateElement.setAttribute("id", "sub-date");
    dateElement.textContent = `Date: ${subTaskInfo.date}`;

    const nameElement = document.createElement("p");
    nameElement.setAttribute("id", "sub-name");
    nameElement.textContent = `Name: ${subTaskInfo.taskName}`;

    const checkboxElement = document.createElement("input");
    checkboxElement.setAttribute("id", "sub-check");
    checkboxElement.setAttribute("type", "checkbox");
    checkboxElement.checked = subTaskInfo.isChecked;

    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.addEventListener("click", function () {
      openEditSubTaskDialog(subTaskDiv, subTaskInfo);
    });

    const delete_sub_task = document.createElement("button");
    delete_sub_task.textContent = "Delete";
    delete_sub_task.addEventListener("click", function () {
      currentMain.removeChild(subTaskDiv);

      if (currentMain.querySelectorAll("div").length === 0) {
        const newTaskButton = currentMain.querySelector("button");
        if (newTaskButton) {
          newTaskButton.style.display = "block";
        }
      }
    });

    subTaskDiv.appendChild(checkboxElement);
    subTaskDiv.appendChild(nameElement);
    subTaskDiv.appendChild(dateElement);
    subTaskDiv.appendChild(editButton);
    subTaskDiv.appendChild(delete_sub_task);

    currentMain.appendChild(subTaskDiv);

    const subTasksExist = currentMain.querySelector("div");

    if (subTasksExist) {
      const newTaskButton = currentMain.querySelector("button");
      if (newTaskButton) {
        newTaskButton.style.display = "none";
      }
    }
  }
}

function openEditSubTaskDialog(subTaskDiv, subTaskInfo) {
  const editSubTaskDialog = document.createElement("dialog");

  const editNameInput = document.createElement("input");
  editNameInput.setAttribute("type", "text");
  editNameInput.value = subTaskInfo.taskName;

  const editDateInput = document.createElement("input");
  editDateInput.setAttribute("type", "date");
  editDateInput.value = subTaskInfo.date;

  const editCheckboxInput = document.createElement("input");
  editCheckboxInput.setAttribute("type", "checkbox");
  editCheckboxInput.checked = subTaskInfo.isChecked;

  const saveButton = document.createElement("button");
  saveButton.textContent = "Save";
  saveButton.addEventListener("click", function () {
    subTaskInfo.taskName = editNameInput.value;
    subTaskInfo.date = editDateInput.value;
    subTaskInfo.isChecked = editCheckboxInput.checked;

    subTaskDiv.querySelector(
      "#sub-date"
    ).textContent = `Date: ${subTaskInfo.date}`;
    subTaskDiv.querySelector("#sub-check").checked = subTaskInfo.isChecked;
    subTaskDiv.querySelector("#sub-name").textContent = subTaskInfo.taskName;

    editSubTaskDialog.close();
  });

  const cancelButton = document.createElement("button");
  cancelButton.textContent = "Cancel";
  cancelButton.addEventListener("click", function () {
    editSubTaskDialog.close();
  });

  editSubTaskDialog.appendChild(editCheckboxInput);
  editSubTaskDialog.appendChild(editNameInput);
  editSubTaskDialog.appendChild(editDateInput);
  editSubTaskDialog.appendChild(saveButton);
  editSubTaskDialog.appendChild(cancelButton);

  document.body.appendChild(editSubTaskDialog);

  editSubTaskDialog.showModal();
}

export default displayTasks;
