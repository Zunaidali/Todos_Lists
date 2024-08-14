document.addEventListener('DOMContentLoaded', loadTodos);

document.getElementById('add-todo').addEventListener('click', addTodo);

function addTodo() {
    const todoInput = document.getElementById('todo-input');
    const todoText = todoInput.value.trim();
    
    if (todoText === '') {
        alert('Please enter a to-do.');
        return;
    }
    
    const todos = getTodos();
    todos.push(todoText);
    saveTodos(todos);
    
    todoInput.value = '';
    renderTodos();
}

function renderTodos() {
    const todoList = document.getElementById('todo-list');
    todoList.innerHTML = '';
    
    const todos = getTodos();
    
    todos.forEach((todo, index) => {
        const li = document.createElement('li');
        li.textContent = todo;
        
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', () => deleteTodo(index));
        
        li.appendChild(deleteBtn);
        todoList.appendChild(li);
    });
}

function deleteTodo(index) {
    const todos = getTodos();
    todos.splice(index, 1);
    saveTodos(todos);
    renderTodos();
}

function getTodos() {
    const todos = localStorage.getItem('todos');
    return todos ? JSON.parse(todos) : [];
}

function saveTodos(todos) {
    localStorage.setItem('todos', JSON.stringify(todos));
}

function loadTodos() {
    renderTodos();
}
