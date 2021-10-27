const axios = require('axios');

//? interface, structure of the data
interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

const getTodos = async () => {
    
  const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
  const todos = response.data as Todo;
  const id = todos.id;
  const title = todos.title;
  const completed = todos.completed;
  logTodos(id, title, completed);
  return response.data;
}

const logTodos = async (id: number, title : string, completed : boolean) => {
    console.log(`Id: ${id}\nTitle: ${title}\nCompleted: ${completed}`)
}

getTodos();