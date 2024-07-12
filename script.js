const inputfield = document.querySelector('.todoinput');
const addbutton = document.querySelector('.addtask');
const todoList = document.querySelector('.tasks');
const completeButton = document.querySelector('.complete');
const incompleteButton = document.querySelector('.incomplete');
const deleteButton = document.querySelector('.delete');


addbutton.addEventListener('click',addtask);
completeButton.addEventListener('click',showcomplete);
incompleteButton.addEventListener('click',showincomplete);
deleteButton.addEventListener('click',deletetasks);
todoList.addEventListener('click', taskaction);


function addtask(){
    task=inputfield.value.trim();

    if (task===''){
        alert('Please enter a task.');
        return;
    }

    const newTask=document.createElement('li');
    
    newTask.classList.add('task');
        newTask.innerHTML = `
            <button class="tick-button"><i class="fa fa-check"></i></button>
            <span class="task-text">${task}</span>
            <button class="delete-button"><i class="fa fa-times"></i></button>
        `;

    todoList.appendChild(newTask);

    inputfield.value='';
}

function deletetasks() {
    while (todoList.firstChild) {
        todoList.removeChild(todoList.firstChild);
    }
}

function taskaction(event) {
    if (event.target.closest('.tick-button')) {
        const taskItem = event.target.closest('li');
        taskItem.style.textDecoration = 'line-through';
        taskItem.style.opacity = '0.5';
        taskItem.classList.toggle('completed');
    }

    if (event.target.closest('.delete-button')) {
        const taskItem = event.target.closest('li');
        taskItem.remove();
    }
};

function showcomplete(){
    const tasks = document.querySelectorAll('.tasks .task');
    tasks.forEach(task => { 
        if (task.classList.contains('completed')){
            task.style.display = 'list-item';
        }
        else{
            task.style.display = 'none';
        }

    })
}

function showincomplete(){
    const tasks = document.querySelectorAll('.tasks .task');
    tasks.forEach(task => { 
        if (task.classList.contains('completed')){
            task.style.display = 'none';
        }
        else{
            task.style.display = 'list-item';
        }

    })
}
