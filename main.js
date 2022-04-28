const todoForm = document.querySelector('#todo-form');
const todoInput = document.querySelector('#todo-input');
const todoList = document.querySelector('#todo-list');

todoForm.addEventListener('submit', formHandler);

function formHandler(e) {
    // Отменяем обновление формы при клике  
    e.preventDefault()

    // Получаем название задачи из инпута
    const taskText = todoInput.value;

    // создаем новый элемент и добавляем задачу из инпута
    const newTask = document.createElement('li');
    newTask.innerHTML = taskText;
    todoList.append(newTask);

    // добавление кнопки удалить
    const deleteBtn = document.createElement('button');
    deleteBtn.setAttribute('role', 'img');
    deleteBtn.innerText = 'Удалить';
    deleteBtn.classList.add('delete-btn')
    deleteBtn.style['margin-top'] = '15px';
    newTask.append(deleteBtn);

    // добавляем событие по клику
    deleteBtn.addEventListener('click', function (e) {  
        this.closest('li').remove();
    })
    // очищаем инпут
    todoInput.value = '';

    // Фокус на инпут
    todoInput.focus();
}


