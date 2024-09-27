const taskInput = document.getElementById('taskInput');
const todoList = document.getElementById('todoList');
const doneList = document.getElementById('doneList');

function addTask() {
    const taskText = taskInput.value;
    if (taskText === '') return;

    const li = document.createElement('li');
    li.textContent = taskText;

    const doneButton = document.createElement('button');
    doneButton.textContent = '완료';
    doneButton.onclick = function() {
        moveToDone(li);
    };

    li.appendChild(doneButton);
    todoList.appendChild(li);
    taskInput.value = ''; 
}



function moveToDone(taskItem) {
    const li = document.createElement('li');
    li.textContent = taskItem.firstChild.textContent;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = '삭제';
    deleteButton.onclick = function() {
        doneList.removeChild(li);
    };

    li.appendChild(deleteButton);
    doneList.appendChild(li);
    todoList.removeChild(taskItem);
}

taskInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});
