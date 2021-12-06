import { Page } from "../Page/Page";

export class ToDo extends Page {
  constructor(root, pageName) {
    super(root, pageName);
    this.todoLocalStorageName = 'todo';
    this.todoContainerSelector = '.todo__list-container';
    this.importantBtnSelector = '.todo__list-star';
    this.importantBtnActiveClass = 'todo__list-star_active';
    this.canBtnSelector = '.todo__list-can';
  }

  render() {
    const html = `
      <div class="page todo">
        <div class="container container_cover-bg">
          <h2 class="title todo-title">ToDo List</h2>
          <div class="subtitle todo-subtitle">Make your ToDo List to make life easier</div>


          <form class="todo-wrapper">
            <input class="todo-input" name="text" type="text">
            <input class="todo-submit" name="button" type="submit" value="Add">
          </form>
          
          <div class="todo__list-container">

          </div>
        </div>
      </div>
    `;

    this.root.innerHTML = html;

    this.addToDo('.todo-input', '.todo-submit');
    this.renderToDos(this.getFromLocalStorage());

  }

  getFromLocalStorage() {
    let storrageArr = localStorage.getItem(this.todoLocalStorageName);
    if (storrageArr !== null) {
      return JSON.parse(storrageArr);
    }
    return [];
  }

  addToLocalStorage(inputVal) {
    if (inputVal !== '') {
      let todos = this.getFromLocalStorage();
      let todo = {
        value: inputVal,
        isImportant: false,
      };

      todos.push(todo);

      localStorage.setItem(this.todoLocalStorageName, JSON.stringify(todos));

      this.renderToDos(todos);

      
    }
  }

  renderToDos(storrageArr) {
    const todoContainer = document.querySelector(this.todoContainerSelector);

    todoContainer.innerHTML = ``;

    storrageArr.forEach((item, index) => {
      let html = `

      <div class="todo__list-wrapper">
        <div class="todo__list-text">${index+1}. ${item.value}</div>
        <div class="todo__list-icons">
          <div class="todo__list-star">
          <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
          width="350.953px" height="350.953px" viewBox="0 0 350.953 350.953" style="enable-background:new 0 0 350.953 350.953;"
          xml:space="preserve"><g><g><path d="M276.199,342.977c-1.988,0-3.985-0.475-5.814-1.436l-94.908-49.896l-94.908,49.896c-4.212,2.213-9.315,1.845-13.164-0.952c-3.85-2.796-5.777-7.536-4.973-12.227l18.125-105.682L3.775,147.836c-3.407-3.321-4.633-8.289-3.163-12.813
             c1.47-4.525,5.382-7.823,10.091-8.508l106.111-15.418l47.454-96.153c2.105-4.267,6.451-6.968,11.209-6.968
             c4.757,0,9.104,2.701,11.208,6.968l47.454,96.153l106.11,15.418c4.709,0.685,8.62,3.982,10.091,8.508
             c1.471,4.524,0.245,9.492-3.163,12.813l-76.783,74.845l18.126,105.682c0.804,4.689-1.124,9.431-4.973,12.227
             C281.37,342.172,278.792,342.977,276.199,342.977z M39.362,147.615l63.352,61.752c2.946,2.871,4.291,7.01,3.594,11.063
             l-14.955,87.196l78.306-41.17c3.642-1.914,7.992-1.914,11.634,0l78.306,41.168l-14.956-87.194
             c-0.695-4.056,0.649-8.192,3.595-11.063l63.353-61.752l-87.549-12.722c-4.071-0.592-7.591-3.148-9.412-6.838l-39.152-79.334
             l-39.153,79.334c-1.82,3.689-5.341,6.246-9.412,6.838L39.362,147.615z"/></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>
          </div>
          <div class="todo__list-can">
            <svg enable-background="new 0 0 40 40" id="Слой_1" version="1.1" viewBox="0 0 40 40" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g><path d="M28,40H11.8c-3.3,0-5.9-2.7-5.9-5.9V16c0-0.6,0.4-1,1-1s1,0.4,1,1v18.1c0,2.2,1.8,3.9,3.9,3.9H28c2.2,0,3.9-1.8,3.9-3.9V16   c0-0.6,0.4-1,1-1s1,0.4,1,1v18.1C33.9,37.3,31.2,40,28,40z"/></g><g><path d="M33.3,4.9h-7.6C25.2,2.1,22.8,0,19.9,0s-5.3,2.1-5.8,4.9H6.5c-2.3,0-4.1,1.8-4.1,4.1S4.2,13,6.5,13h26.9c2.3,0,4.1-1.8,4.1-4.1S35.6,4.9,33.3,4.9z M19.9,2c1.8,0,3.3,1.2,3.7,2.9h-7.5C16.6,3.2,18.1,2,19.9,2z M33.3,11H6.5   c-1.1,0-2.1-0.9-2.1-2.1c0-1.1,0.9-2.1,2.1-2.1h26.9c1.1,0,2.1,0.9,2.1,2.1C35.4,10.1,34.5,11,33.3,11z"/></g><g><path d="M12.9,35.1c-0.6,0-1-0.4-1-1V17.4c0-0.6,0.4-1,1-1s1,0.4,1,1v16.7C13.9,34.6,13.4,35.1,12.9,35.1z"/></g><g><path d="M26.9,35.1c-0.6,0-1-0.4-1-1V17.4c0-0.6,0.4-1,1-1s1,0.4,1,1v16.7C27.9,34.6,27.4,35.1,26.9,35.1z"/></g><g><path d="M19.9,35.1c-0.6,0-1-0.4-1-1V17.4c0-0.6,0.4-1,1-1s1,0.4,1,1v16.7C20.9,34.6,20.4,35.1,19.9,35.1z"/></g></svg>
          </div>
        </div>
      </div>
      `;

      todoContainer.insertAdjacentHTML('beforeend', html);  
      
    });

    this.putToDoAsImportant(storrageArr);
    this.deleateToDo(storrageArr);

    this.markToDoAsImportant(storrageArr);
  }

  addToDo(inputSelector, buttonSelector) {

    const input = document.querySelector(inputSelector),
          button = document.querySelector(buttonSelector);

    button.addEventListener('click', (event) => {
      event.preventDefault();
      let inputVal = input.value;

      this.addToLocalStorage(inputVal);


      input.value = '';
    });
  }



  markToDoAsImportant(storrageArr) {
    const todoContainer = document.querySelector(this.todoContainerSelector);
    const importantBtns = todoContainer.querySelectorAll(this.importantBtnSelector);

    storrageArr.forEach((item, index) => { 
      if (item.isImportant == true && importantBtns != []) {
        importantBtns[index].classList.add(this.importantBtnActiveClass);
      }
    });
  }


  putToDoAsImportant(storrageArr) {
    const todoContainer = document.querySelector(this.todoContainerSelector);
    const importantBtns = todoContainer.querySelectorAll(this.importantBtnSelector);
  
    importantBtns.forEach((item, index) => {
      item.addEventListener('click', () => {
        if (!item.classList.contains(this.importantBtnActiveClass)) {
  
          item.classList.add(this.importantBtnActiveClass);
        
          storrageArr.forEach((a, i) => {
            if (index == i) {
              a.isImportant = true;
              localStorage.setItem(this.todoLocalStorageName, JSON.stringify(storrageArr));
            }
          });
        
        } else if (item.classList.contains(this.importantBtnActiveClass)) {
          item.classList.remove(this.importantBtnActiveClass);
        
          storrageArr.forEach((a, i) => {
            if (index == i) {
              a.isImportant = false;
              localStorage.setItem(this.todoLocalStorageName, JSON.stringify(storrageArr));
            }
          });
        }
      });
    });
  }

  deleateToDo(storrageArr) {
    const todoContainer = document.querySelector(this.todoContainerSelector);
    const canBtns = todoContainer.querySelectorAll(this.canBtnSelector);

    canBtns.forEach((item, index) => {
      item.addEventListener('click', () => {
        let wantDeleate = confirm('Do you want to delete this todo?');

        if (wantDeleate) {
          storrageArr.splice(index, 1);
          localStorage.setItem(this.todoLocalStorageName, JSON.stringify(storrageArr));
          this.render(this.getFromLocalStorage());
        }
      });
    });
  }
}


