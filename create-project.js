// Get elements
const addTaskBtn = document.getElementById('addTaskBtn');
const saveProjectBtn = document.getElementById('saveProjectBtn');
const tasksContainer = document.getElementById('tasksContainer');
const projectTitleInput = document.getElementById('projectTitleInput');

// Function to generate unique project IDs (you can use any method you prefer)
function generateUniqueId() {
    return 'proj-' + Math.random().toString(36).substr(2, 9);
}

// Add Task Event
addTaskBtn.addEventListener('click', () => {
    const taskRow = document.createElement('div');
    taskRow.className = 'task-row';
    taskRow.innerHTML = `
        <input type="text" placeholder="Task description..." class="task-input" required />
        <select class="task-status">
            <option value="pending">Pending</option>
            <option value="completed">Completed</option>
        </select>
        <button type="button" class="remove-task-btn">×</button>
    `;
    tasksContainer.appendChild(taskRow);

    // Attach remove event to remove the task row
    taskRow.querySelector('.remove-task-btn').addEventListener('click', () => {
        taskRow.remove();
    });
});

// Save Project Event
saveProjectBtn.addEventListener('click', () => {
    const tasks = [];
    const taskRows = document.querySelectorAll('.task-row');
    
    taskRows.forEach(taskRow => {
        const description = taskRow.querySelector('.task-input').value;
        // Convert the task status to a boolean
        const status = taskRow.querySelector('.task-status').value === 'completed'; // Convert 'completed' to true, 'pending' to false
        
        if (description) {
            tasks.push({
                description: description,
                status: status,  // Boolean value here
                createdDate: new Date().toLocaleString(),
                updatedDate: null
            });
        }
    });

    // Create the project object
    const project = {
        id: generateUniqueId(),
        title: projectTitleInput.value,
        createdDate: new Date().toLocaleString(),
        todos: tasks // Add tasks to the project
    };

    // Save the project to localStorage
    const existingProjects = JSON.parse(localStorage.getItem('projects')) || [];
    existingProjects.push(project);
    localStorage.setItem('projects', JSON.stringify(existingProjects));

    alert('Project created successfully!');
    // Optionally, redirect or reset form after saving
    window.location.href = 'view-projects.html'; // Redirect to the project list page
});
