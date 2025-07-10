const todolist = [];
function todo() {
  const a1 = document.querySelector(".todo-input");
  const a2 = a1.value;
  console.log(a2);
  todolist.push(a2);
  console.log(todolist);
}
