document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');

    // Add a new task
    addTaskBtn.addEventListener('click', () => {
        if (taskInput.value.trim() !== '') {
            const li = document.createElement('li');
            li.textContent = taskInput.value;
            li.addEventListener('click', () => {
                li.classList.toggle('completed');
            });

            const removeBtn = document.createElement('button');
            removeBtn.textContent = 'Remove';
            removeBtn.addEventListener('click', () => {
                taskList.removeChild(li);
            });

            li.appendChild(removeBtn);
            taskList.appendChild(li);
            taskInput.value = '';
        }
    });
});
