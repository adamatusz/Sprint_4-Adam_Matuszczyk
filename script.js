const inputText = document.getElementById("inputField");
const submitButton = document.getElementById("clickButton");
const listTasks = document.getElementById("listTasks");

submitButton.addEventListener("click", () => {
  if (inputText.value) {
    const newTask = document.createElement("li");
    const newTextTask = document.createElement("input");
    newTextTask.setAttribute(
      "class",
      "addedTask form-group control-label col-sm-7"
    );
    newTextTask.value = inputText.value;
    newTextTask.disabled = true;
    newTask.append(newTextTask);
    createButton(newTask);
    listTasks.prepend(newTask);
    inputText.value = "";
  } else {
    alert("Nazwa zadania nie może być pusta.");
  }
});

const createButton = (parent) => {
  const editButton = document.createElement("button");
  editButton.textContent = "Edytuj";
  editButton.setAttribute("class", "btn-edit btn-info btn-outline-secondary");

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Usuń";
  deleteButton.setAttribute("class", "btn-delete btn-danger");

  parent.append(editButton, deleteButton);
  // parent.append(deleteButton);

  editButton.addEventListener("click", () => {
    switch (editButton.textContent) {
      case "Edytuj":
        editButton.textContent = "Zatwierdź zmiany";
        parent.firstChild.disabled = false;
        break;
      case "Zatwierdź zmiany":
        if (parent.firstChild.value) {
          editButton.textContent = "Edytuj";
          parent.firstChild.disabled = true;
        } else {
          alert("To pole nie może być puste, ewentualnie usuń.");
        }
        break;
      default:
        alert("Nieznany komunikat");
    }
  });

  deleteButton.addEventListener("click", () => {
    parent.remove();
  });
};
