const todoForm = document.querySelector('#todo-form')
const todoInput = document.querySelector('#todo-input')
const todoList = document.querySelector('#todo-list')

todoForm.addEventListener('submit', formHandler);

function formHandler(e) {
    e.preventDefault()

    // Получаем название задачи из инпута
    const taskText = todoInput.value;

    // создаем новый элемент и добавляем задачу из инпута
    const newTask = document.createElement('li');
    newTask.innerHTML = taskText;
    todoList.append(newTask)

    // очищаем инпут
    todoInput.value = '';


    // Фокус на инпут
    todoInput.focus()

}