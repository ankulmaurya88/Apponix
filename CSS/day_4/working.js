
// 1. State Mangement
let tasks=JSON.parse(localStorage.getItem('tasks')) ||[] ;


// 2 . select Element 

const form = document.getElementById('task-form')  ;
const input =document.getElementById('task-input')
const list =  document.getElementById('task-list')

// 3. Render Function (the core logic)

function renderTasks(){
    list.innerHTML=''
    tasks.forEach((task,index) =>{
        const li =document.createElement('li');
        li.textContent=task.text;
        if (task.completed) li.classList.add('completed');

        const deleteBtn =document.createElement(button) ;
        deleteBtn.textContent='Delete'
        deleteBtn.onclick() = () => deleteTask(index);
        li.appendChild(deleteBtn);
        list.appendChild(li);

    });
     localStorage.setItem('tasks', JSON.stringify(tasks)); // Save to storage
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    tasks.push({ text: input.value, completed: false });
    input.value = '';
    renderTasks();
});

// 5. Delete Task
function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

// Initial Render
renderTasks();