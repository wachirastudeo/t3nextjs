import { ChangeEventHandler, useState } from 'react';

interface TodoFormProps {
  addTodo:(todo:string) =>void
}

const TodoForm = ({addTodo}:TodoFormProps) => {
  const [todo, setTodo] = useState(''); //state ,setState
  const handleTodoFormchange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setTodo(event.target.value);
  };
  const handleAddTodo=()=>{
    addTodo(todo)
    setTodo('');
  }
  return (
    <>
      <input type="text" value={todo} onChange={handleTodoFormchange} />
      <button onClick={handleAddTodo}>add</button>
    </>
  );
};


interface Todo{
  id:number,
  content:string
}
interface TodoListProps{
  todos:Todo[]
}
const TodoList = ({ todos }:TodoListProps) => {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.content}</li>
      ))}
    </ul>
  );
};



const IndexPage = () => {
  const [todos, setTodos] = useState([
    { id: 1, content: 'Todot1' },
    { id: 2, content: 'Todot2' },
    { id: 3, content: 'Todot3' },
  ]);

  const addTodo = (todo:string) => {
    setTodos([{ id: todos.length + 1, content: todo }, ...todos]);

  };

  return (
    <>
      <TodoForm addTodo={addTodo}></TodoForm>
      <TodoList todos={todos}></TodoList>
    </>
  );
};
export default IndexPage;
