
document.addEventListener('DOMContentLoaded', () => {
    
    
    const form = document.getElementById('task-form');
    const titleInput = document.getElementById('title-input');
    const descInput = document.getElementById('desc-input');
    const urgentCheck = document.getElementById('urgent-check');
    const board = document.querySelector('.board');

  
    form.addEventListener('submit', (event) => {
       
        event.preventDefault(); 

        const titleValue = titleInput.value.trim();
        const descValue = descInput.value.trim();
        const isUrgent = urgentCheck.checked;

        if (titleValue === '') return;

        
        createTaskCard(titleValue, descValue, isUrgent);

        
        form.reset();
        titleInput.focus();
    });

   
    function createTaskCard(title, desc, isUrgent) {
        
        const card = document.createElement('div');
        card.classList.add('task-card');
        
        
        if (isUrgent) {
            card.classList.add('urgent');
        }

        
        const contentDiv = document.createElement('div');
        contentDiv.classList.add('task-content');

        
        const titleEl = document.createElement('span');
        titleEl.classList.add('task-title');
        titleEl.textContent = title;

       
        const descEl = document.createElement('span');
        descEl.classList.add('task-desc');
        descEl.textContent = desc;

        contentDiv.appendChild(titleEl);
        contentDiv.appendChild(descEl);

       
        const actionsDiv = document.createElement('div');
        actionsDiv.classList.add('actions');

        
        const moveBtn = document.createElement('button');
        moveBtn.textContent = '→';
        moveBtn.classList.add('btn-move');
        moveBtn.title = "Move to next column";

       
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = '✕';
        deleteBtn.classList.add('btn-delete');
        deleteBtn.title = "Delete task";

        actionsDiv.appendChild(moveBtn);
        actionsDiv.appendChild(deleteBtn);

       
        card.appendChild(contentDiv);
        card.appendChild(actionsDiv);

       
        const todoList = document.querySelector('#todo-col .task-list');
        todoList.appendChild(card);
    }

    board.addEventListener('click', (event) => {
        const target = event.target;

        
        if (target.classList.contains('btn-delete')) {
            const card = target.closest('.task-card');
            if (card) {
                card.remove(); 
            }
        }

        
        if (target.classList.contains('btn-move')) {
            const card = target.closest('.task-card');
            if (card) {
                moveTask(card);
            }
        }


        if (target.closest('.task-card') && 
            !target.classList.contains('btn-move') && 
            !target.classList.contains('btn-delete')) {
            
            const card = target.closest('.task-card');
            card.classList.toggle('completed'); 
        }
    });

  
    function moveTask(card) {
        
        const currentColumn = card.closest('.column');
        
      
        const nextColumn = currentColumn.nextElementSibling;

        if (nextColumn) {
            
            const nextList = nextColumn.querySelector('.task-list');
            
            
            nextColumn.classList.add('highlight');
            setTimeout(() => nextColumn.classList.remove('highlight'), 300);

            
            nextList.appendChild(card);
        } else {
            
            const firstList = document.querySelector('#todo-col .task-list');
            firstList.appendChild(card);
        }
    }

   
    createTaskCard("Learn DOM Traversal", "Practice parentElement and nextSibling", true);
    createTaskCard("Style with CSS", "Separate concerns into .css files", false);
});   