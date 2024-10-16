document.getElementById("addButton").addEventListener("click", function () {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();

  if (taskText) {
    const li = document.createElement("li");
    li.textContent = taskText;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Elimina";
    deleteButton.addEventListener("click", function () {
      li.remove();
    });

    li.addEventListener("click", function () {
      li.classList.toggle("completed");
    });

    li.appendChild(deleteButton);
    document.getElementById("taskList").appendChild(li);
    taskInput.value = "";
  } else {
    alert("Per favore, inserisci un task!");
  }
});
