const addBtn = document.getElementById('addBtn');
const inputEl = document.getElementById('input');
const todoList = document.getElementById('todolist');

let todos = [];

function renderTodos() {
    todoList.innerHTML = "";
    todos.forEach(todo => {
        const li = document.createElement('li');
        const span = document.createElement('span');
        span.textContent = todo.text;

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'remove';
        deleteBtn.classList.add('remove')
        deleteBtn.addEventListener('click', () => {
            removeTodos(todo.id)
            renderTodos()
        })

        const checkBtn = document.createElement('input');
        checkBtn.type = 'checkbox'
        checkBtn.checked = todo.completed;
        checkBtn.addEventListener('change', () => {
            todo.completed = checkBtn.checked;
            if (todo.completed) {
                li.classList.add('line')
            } else {
                li.classList.remove('line')
            }
        })

        todoList.appendChild(li);
        li.appendChild(span);
        li.appendChild(checkBtn)
        li.appendChild(deleteBtn);

    });
}

function removeTodos(id) {
    todos = todos.filter(todo => todo.id !== id);
}

addBtn.addEventListener('click', () => {
    addTodos();
})

function addTodos() {
    const text = inputEl.value.trim();
    if (inputEl.value === '') return;

    const newTodo = {
        id: Date.now(),
        text: text,
        completed: false
    }

    todos.push(newTodo);
    inputEl.value = "";
    renderTodos()
}

