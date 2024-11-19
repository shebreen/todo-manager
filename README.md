# ToDo-Manager

## Features
**A Task Management web-app**.
- Can create a new project with Title and Unique ID which is automatically generated.
- Can add any number of tasks and categorize it based on completed or pending.
- Can view, edit, and delete the project.
- can download the project as markdown and upload it to gist using PAC.

## Live Demo
https://shebreen.github.io/todo-manager/

## Set up

### Prerequisites

To run this project locally, all you need is a web browser (like Google Chrome, Firefox, or Edge).

### 1. Clone the Repository

Clone the project repository to your local machine using Git:

### ```bash
git clone https://github.com/shebreen/todo-manager.git

### 2. Navigate to the Project Directory

After cloning the repo, move into the project directory:
cd todo-app

### Local Storage
project is stored in localStorage even when page is refreshed or  browser is closed and reopened.
Tasks are automatically saved and retrieved from localStorage.

## Run

### Open the Project in Your Browser

- On Mac: open index.html
- On Windows/Linux: double-click on index.html
## Test

Since this is a frontend-only application, testing is manual. To test the functionality:

- Add a task, then edit and delete it.
- Check if tasks persist after refreshing the page.
- Verify that tasks can be marked as completed by checking/unchecking the checkboxes.
