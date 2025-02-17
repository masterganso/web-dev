document.addEventListener('DOMContentLoaded', () => {
    const todoList = document.getElementById('todoList');
    const todoInput = document.getElementById('todoInput');
    const addBtn = document.getElementById('addBtn');

 
    addBtn.addEventListener('click', addTodo);
    todoInput.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') addTodo();
    });


    todoList.addEventListener('click', handleColorChange);
    todoList.addEventListener('dblclick', handleDoneToggle);

    function addTodo() {
        const text = todoInput.value.trim();
        if (text) {
            const li = document.createElement('li');
            li.textContent = text;
            todoList.appendChild(li);
            todoInput.value = '';
        }
    }

    function handleColorChange(e) {
        if (e.target.tagName === 'LI') {
            e.target.style.color = getRandomColor();
        }
    }

    function handleDoneToggle(e) {
        if (e.target.tagName === 'LI') {
            e.target.classList.toggle('done');
        }
    }

    function getRandomColor() {
        const hue = Math.floor(Math.random() * 360);
        return `hsl(${hue}, 70%, 50%)`;
    }
});