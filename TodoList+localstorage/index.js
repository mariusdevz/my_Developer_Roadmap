const inputEl = document.getElementById('input');
const addBtn = document.getElementById('addBtn');
const todoList = document.getElementById('todoList');

let todos = [];

function loadTodos() {
    try {
        const saved = JSON.parse(localStorage.getItem('todos'))
        return Array.isArray(saved) ? saved : []
    } catch {
        return []
    }
}

todos = loadTodos();

function render() {
    todoList.innerHTML = "";
    todos.forEach(todo => {
        const li = document.createElement('li');
        const span = document.createElement('span');
        const deleteBtn = document.createElement('button');
        const checkBtn = document.createElement('input');

        checkBtn.type = 'checkbox';
        checkBtn.checked = todo.completed;
        span.classList.toggle('line', todo.completed)

        checkBtn.addEventListener('change', () => {
            todo.completed = checkBtn.checked;
            span.classList.toggle('line', todo.completed)
            saveTodos();
        })

        deleteBtn.textContent = 'remove';
        deleteBtn.classList.add('remove');

        deleteBtn.addEventListener('click', () => {
            removeTodos(todo.id);
            render()
        })

        span.textContent = todo.text;

        todoList.appendChild(li);
        li.appendChild(span);
        li.appendChild(checkBtn);
        li.appendChild(deleteBtn);
    })
}

addBtn.addEventListener('click', () => {
    addTodos();
})

inputEl.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addTodos()
})


function removeTodos(id) {
    todos = todos.filter(todo => todo.id !== id);
    saveTodos()
}

function saveTodos() {
    localStorage.setItem('todos', JSON.stringify(todos))
}


function addTodos() {
    const text = inputEl.value.trim();
    if (inputEl.value.trim() === '') return;

    const newTodo = {
        id: Date.now(),
        text: text,
        completed: false
    }

    todos.push(newTodo);
    inputEl.value = "";

    render()
    saveTodos()
}

render()