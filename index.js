
const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');


addTaskBtn.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (taskText) {
        const taskItem = document.createElement('li');

        taskItem.innerHTML = `
            <span class="task-text">${taskText}</span>
            <button class="remove">Delete</button>
        `;

        // Add event listener to remove button
        taskItem.querySelector('.remove').addEventListener('click', () => {
            taskItem.remove();
        });

        // Add task to the list
        taskList.appendChild(taskItem);
        
        // Clear the input field
        taskInput.value = '';
    }
});
