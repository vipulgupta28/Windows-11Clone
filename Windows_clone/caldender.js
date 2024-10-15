document.addEventListener('DOMContentLoaded', function() {
    const date = document.getElementById('date');
    const myEvent = document.getElementById('add-event');
    const calendar = document.getElementById('calendar');
    const cross = document.getElementById('cross');
    const input = document.getElementById('todo-input');
    const addBtn = document.getElementById('add-btn');
    const todoList = document.getElementById('todo-list');

    // Show event form and blur calendar
    date.addEventListener('click', function() {
        myEvent.style.display = 'flex'; 
        calendar.classList.add('blur');
    });

    // Hide event form
    cross.addEventListener('click', function() {
        myEvent.style.display = 'none';
        calendar.classList.remove('blur'); // Remove blur when closing the form
    });

    // Add a task to the to-do list
    function addTask() {
        const taskText = input.value.trim();
        if (taskText) {
            const li = document.createElement('li');
            li.textContent = taskText;

            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';
            deleteBtn.classList.add('delete-btn');
            deleteBtn.addEventListener('click', function() {
                todoList.removeChild(li);
                updateDateBackgroundColor();
            });

            li.appendChild(deleteBtn);
            todoList.appendChild(li);
            input.value = '';
            updateDateBackgroundColor();
        }
    }

    // Add task on button click
    addBtn.addEventListener('click', addTask);

    // Add task on Enter key press
    input.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            addTask();
        }
    });

    // Update background color of the date element based on tasks
    function updateDateBackgroundColor() {
        if (todoList.childElementCount > 0) {
            date.style.backgroundColor = '#21217a'; // Dark blue when tasks exist
        } else {
            date.style.backgroundColor = ''; // Default background color when no tasks
        }
    }
});
