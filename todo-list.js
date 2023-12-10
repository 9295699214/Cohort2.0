class Todo {
  constructor() {
    this.todoList =[]; //initlise the empty array to store todos

  }
  add(str){
    this.todoList.push(str); // adds the todo to the array
  }
  remove(index){
    if (index>=0 && index<this.todoList.length) {
      this.todoList.splice(index,1); // removes the todo from the array of desired index
    }
  }
  update(index,str){
    if (index>=0 && index<this.todoList.length) {
    this.todoList.splice(index,1,str); // updates or adds the todo at desired index
    }
  }
  getAll(){
    return this.todoList; // returns all the todos
  }
  get(index){
    if (index>=0 && index<this.todoList.length) {
    return this.todoList[index]; // returns the spicific todo at given index
    }
    return null;
  }
  clear(){
    this.todoList=[]; // clears all the todos
  }

}

module.exports = Todo;