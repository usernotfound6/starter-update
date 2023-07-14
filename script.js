$(document).ready(onReady);


// May need to set to 2, because of default items
let todoCount = 2;

function onReady() {
  console.log('jQuery still works! What a gosh darn relief.');

  // Handlers
  $("#submitButton").on('click', handleSubmit)
  $("#todoList").on('click', '.deleteButton', deleteTodo)
}

function deleteTodo() {
  //remove the list item from the parent
  $(this).parent().remove()
  
  // decrease the todoCout by 1
  todoCount--

  // replace todocount on the dom with updated value
  $("#todoCount").text(todoCount)

}

function handleSubmit(event) {
  event.preventDefault();
  console.log("inside handleSubmit")

  // Retrieve todo text from input box
  const todoText = $("#todoInput").val()
  console.log("todoText: ", todoText)

  // Retrieve author text from input box
  const authorText = $("#authorInput").val()
  console.log("authorText: ", authorText)

  // Append new item to dom from captured input
  $("#todoList").append(`
    <li><button class="deleteButton">❌</button> ${todoText} (${authorText})</li>
  `)

  // Clears form by setting the value to an empty string.
  $("#todoInput").val("")
  $("#authorInput").val("")

  // Increasing the count
  todoCount++
  // Replacing the text for todocount with the value
  $("#todoCount").text(todoCount)
}