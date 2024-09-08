
import { fetchData } from "next-auth/client/_utils";
import { useEffect, useState } from "react";
//react hook
const useFech =(url:string)=>{
  const [datas,setDatas] = useState([])

  useEffect(()=>{
    const fetchData = async()=>{
        const res = await fetch(url)
        const data = await res.json()
        setDatas(data)
    }
    fetchData()
},[url])

return datas
}
const User=()=>{
  const url = "https://jsonplaceholder.typicode.com/users"
  
   const users= useFech(url)

  return(
    <>
    <ul>
      {
        users.map(user => <li key={user.id}>{user.name}</li>)
      }
      </ul>
    </>
  )
}

const Todo=()=>{
  const url = "https://jsonplaceholder.typicode.com/todos"
  
  const todos= useFech(url)
  return(
    <>
    <ul>
      {
        todos.map(todo => <li key={todo.id}>{todo.title}</li>)
      }
      </ul>
    </>
  )

}

const IndexPage = () => {
 
 return(
  <>
  <h1 >User</h1>
 <User></User>
 <br></br>
 <h1>TODO</h1>
 <Todo></Todo>
  </>
 )
};

export default IndexPage;

