let taskList = JSON.parse(localStorage.getItem('tasks')) || [];

function renderTasks() {
    const ul = document.getElementById("taskList");
    ul.innerHTML = "";
    taskList.forEach((task, index) => {
        const li = document.createElement("li");
        li.className = task.completed ? 'completed' : '';
        li.innerHTML = `
            ${task.text}
            <div>
                <button onclick="toggleTask(${index})"></button>
                <button onclick="deleteTask(${index})"></button>
            </div>`;
        ul.appendChild(li);
    });
}

function addTask() {
    const input = document.getElementById("taskInput");
    const newTask = input.value.trim();
    if (newTask !== "") {
        taskList.push({ text: newTask, completed: false });
        localStorage.setItem("tasks", JSON.stringify(taskList));
        input.value = "";
        renderTasks();
    }
}

function deleteTask(index) {
    taskList.splice(index, 1);
    localStorage.setItem("tasks", JSON.stringify(taskList));
    renderTasks();
}

function toggleTask(index) {
    taskList[index].completed = !taskList[index].completed;
    localStorage.setItem("tasks", JSON.stringify(taskList));
    renderTasks();
}

renderTasks();