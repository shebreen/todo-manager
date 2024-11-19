const addTaskBtn = document.getElementById('addTaskBtn');
const saveProjectBtn = document.getElementById('saveProjectBtn');
const tasksContainer = document.getElementById('tasksContainer');
const projectTitleInput = document.getElementById('projectTitleInput');

// generate unique project IDs 
function generateUniqueId() {
    return 'proj-' + Math.random().toString(36).substr(2, 9);
}
// add task 
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

    // remove the task in create project 
    taskRow.querySelector('.remove-task-btn').addEventListener('click', () => {
        taskRow.remove();
    });
});

// save project 
saveProjectBtn.addEventListener('click', () => {
    const tasks = [];
    const taskRows = document.querySelectorAll('.task-row');
    
    taskRows.forEach(taskRow => {
        const description = taskRow.querySelector('.task-input').value;
        // task status to boolean (completed-true&pending-false)
        const status = taskRow.querySelector('.task-status').value === 'completed'; 
        if (description) {
            tasks.push({
                description: description,
                status: status, 
                createdDate: new Date().toLocaleString(),
                updatedDate: null
            });
        }
    });

    
    const project = {
        id: generateUniqueId(),
        title: projectTitleInput.value,
        createdDate: new Date().toLocaleString(),
        todos: tasks 
    };

    // save project to local storage
    const existingProjects = JSON.parse(localStorage.getItem('projects')) || [];
    existingProjects.push(project);
    localStorage.setItem('projects', JSON.stringify(existingProjects));

    alert('Project created successfully!');
    window.location.href = 'view-projects.html'; 
});
