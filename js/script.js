document.addEventListener('DOMContentLoaded', () => {
    let taskInput = document.getElementById('entrada-de-tarefa');
    let addTaskButton = document.getElementById('adicionar-tarefa');
    let taskList = document.getElementById('lista-de-tarefas');

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === '') return;

        const li = document.createElement('li');
        li.innerHTML = `
            ${taskText}
            <button onclick="this.parentElement.remove()">Excluir</button>
        `;
        taskList.appendChild(li);
        taskInput.value = '';
    }

    addTaskButton.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') addTask();
    });
});
