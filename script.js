const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

function addTask() {
    const text = input.value.trim();
    if (!text) return;

    const li = document.createElement("li");

   
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "task-checkbox";

    
    const span = document.createElement("span");
    span.className = "task";
    span.textContent = text;

    checkbox.onchange = () => {
        li.classList.toggle("completed", checkbox.checked);
    };

    span.ondblclick = () => {
        li.remove();
    };


    const removeBtn = document.createElement("button");
    removeBtn.className = "remove-btn";
    removeBtn.textContent = "X";
    removeBtn.onclick = () => li.remove();

    li.append(checkbox, span, removeBtn);
    taskList.appendChild(li);

    input.value = "";
}

addBtn.onclick = addTask;

input.onkeydown = (e) => {
    if (e.key === "Enter") addTask();
};
