
const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');


addTaskBtn.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (taskText) {
        const taskItem = document.createElement('li');
        taskItem.classList.add('task-item');
        
        // Add task text and buttons
        taskItem.innerHTML = `
            <span class="task-text">${taskText}</span>
            <button class="edit">Edit</button>
            <button class="remove">Delete</button>
        `;

        // Add event listener to remove button
        taskItem.querySelector('.remove').addEventListener('click', () => {
            taskItem.remove();
        });

        // Add event listener to edit button
        taskItem.querySelector('.edit').addEventListener('click', () => {
            const taskTextElement = taskItem.querySelector('.task-text');
            const editButton = taskItem.querySelector('.edit');
            
            if (editButton.textContent === "Edit") {
                taskInput.value = taskTextElement.textContent;
                editButton.textContent = "Save";
                taskItem.querySelector('.remove').style.display = "none"; // Hide delete button while editing
            } else {
                taskTextElement.textContent = taskInput.value;
                taskInput.value = '';
                editButton.textContent = "Edit";
                taskItem.querySelector('.remove').style.display = "inline-block"; // Show delete button after saving
            }
        });

        // Add task to the list
        taskList.appendChild(taskItem);
        
        // Clear the input field
        taskInput.value = '';
    }
});
