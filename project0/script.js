const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

function updateUncheckedCount() {
  // Step 1: Get all the unchecked checkboxes
  const checkboxes = document.getElementsByClassName(classNames.TODO_CHECKBOX)
  const uncheckedCheckboxes = Array.from(checkboxes).filter(
    checkbox => !checkbox.checked
  )

  // Step 2: Update the unchecked count
  uncheckedCountSpan.innerHTML = uncheckedCheckboxes.length
}

function updateItemCount() {
  // Step 1: Get all the todo items
  const todoItems = document.getElementsByClassName(classNames.TODO_ITEM)

  // Step 2: Update the item count
  itemCountSpan.innerHTML = todoItems.length
}

function updateCounts() {
  updateItemCount()
  updateUncheckedCount()
}

function deleteTodo() {
  // Step 1: Get the parent element of the delete button
  const todoItem = this.parentElement

  // Step 2: Remove the todo item from the list
  list.removeChild(todoItem)

  // Step 3: Update the unchecked count
  updateCounts()
}

function newTodo() {
  // Step 1: Create a new todo item
  // This is the base item for the TODO list
  const todoItem = document.createElement('li')
  todoItem.className = classNames.TODO_ITEM

  // Step 2: Create a checkbox
  // This will indicate whether the TODO item is done or not
  const todoCheckbox = document.createElement('input')
  todoCheckbox.type = 'checkbox'
  todoCheckbox.className = classNames.TODO_CHECKBOX
  todoCheckbox.onclick = updateUncheckedCount

  // Step 3: Create a text input
  // This is how we create the todo item's content
  const todoText = document.createElement('input')
  todoText.type = 'text'
  todoText.className = classNames.TODO_TEXT

  // Step 4: Create a delete button
  // This will allow us to delete the todo item
  const todoDelete = document.createElement('button')
  todoDelete.className = classNames.TODO_DELETE
  todoDelete.innerHTML = 'Delete Item'
  todoDelete.onclick = deleteTodo

  // Step 4: Add the content to the todo item
  todoItem.appendChild(todoCheckbox)
  todoItem.appendChild(todoText)
  todoItem.appendChild(todoDelete)
  list.appendChild(todoItem)

  // Step 5: Update the counts
  updateCounts()
}
