import { useState } from "react";
const IndexPage = () => {
  const [todo,setTodo] = useState('') //state ,setState
  const [todos,setTodos] = useState(
    [
      { id: 1, content: 'Todot1' },
      { id: 2, content: 'Todot2' },
      { id: 3, content: 'Todot3' },
    ]
  )
  const addTodo=()=>{
    
  }

  return (
    <>
    <input type="text" value={todo}  onChange={event=>setTodo(event.target.value)} />
    <button onClick={()=>{
      setTodos([{id:todos.length+1,content:todo},...todos])
      setTodo('')
      }}>add</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.content}</li>
        ))}
      </ul>
    </>
  );
};
export default IndexPage;
