const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

let totalTareas = 0;
let tareasPorHacer = 0;

function addTodo() {

  /*Creamos la Tarea*/
  let item = inicializarTarea()


  /*Agregamos la tarea a la lista*/
  list.appendChild(item);

  /*Actualizamos los totales*/
  totalTareas++;
  tareasPorHacer++;
  actualizarContadores();
}

function changeCheckbox(){
  
  if (this.checked){
    tareasPorHacer--;
  }
  else{
    tareasPorHacer++;
  }
  actualizarContadores();
}

function actualizarContadores() {
  itemCountSpan.innerHTML = totalTareas.toString()
  uncheckedCountSpan.innerHTML = tareasPorHacer.toString()
}

function inicializarTarea(){
    /*Checkbox*/
    const checkbox = document.createElement('input');
    checkbox.className = classNames.TODO_CHECKBOX;
    checkbox.onchange = changeCheckbox;
    checkbox.type = 'checkbox';
  
    /*Span*/
    const span = document.createElement('span');
    span.className = classNames.TODO_TEXT;
    span.setAttribute("editable",true);
    span.innerHTML = `Tarea ${totalTareas + 1}`;


    /*li*/
    const item = document.createElement('li');
    item.className = classNames.TODO_ITEM;
    item.appendChild(checkbox);
    item.appendChild(span);


    return item
}
