const todoForm = document.querySelector('#todo-form');
const todoInput = document.querySelector('#todo-input');
const todoList = document.querySelector('#todo-list');

todoForm.addEventListener('submit', formHandler);

function formHandler(e) {
    // Отменяем обновление формы при клике  
    e.preventDefault();

    // Получаем название задачи из инпута
    const taskText = todoInput.value;

    if (taskText === '') {
        alert('Пожалуйста, введите задачу!');
    } else {
        // создаем новый элемент и добавляем задачу из инпута
        const line = document.createElement('hr');
        const newTask = document.createElement('li');
        newTask.innerHTML = taskText;
        line.classList.add('hr')
        todoList.append(newTask);
        todoList.append(line);

    
        // добавление кнопки удалить
        const deleteBtn = document.createElement('button');
        deleteBtn.setAttribute('role', 'button');
        deleteBtn.innerText = 'Удалить';
        newTask.append(deleteBtn);
 
        // добавляем событие по клику
        deleteBtn.addEventListener('click', function () {  
            this.closest('li').remove();
            line.remove();
        })
        
    }


    // очищаем инпут
    todoInput.value = '';

    // Фокус на инпут
    todoInput.focus();
}






