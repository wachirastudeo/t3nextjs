
import { fetchData } from "next-auth/client/_utils";
import { useEffect, useState } from "react";

interface DataItem {
  id:number
}

//react hook
  // T คือ generic รับเข้ามาได้ ที่ต้องมีข้อมูลเหมือน DataItem 
const useFech =<T extends DataItem>(url:string)=>{    
  const [datas,setDatas] = useState<T[]>([])   //type DataItem 

  useEffect(()=>{
    const fetchData = async()=>{
        const res = await fetch(url)
        const data = await (res.json() as Promise<T[]>) // promise ที่มี type แบบ DataItem
        setDatas(data)
    }
     fetchData() //   ใส่ void ไว้ด้านหน้าได้   ไม่อยากทำอะไรต่อ
},[url])

return datas
}


interface User{
  id:number,
  name:string
}

const User=()=>{
  const url = "https://jsonplaceholder.typicode.com/users"
  
   const users= useFech<User>(url) // ส่ง generic interface ประเภทข้อมูล User ไว้กำกับขารับข้อมูลออกมาก

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

interface Todo{
  id:number,
  title:string
}

const Todo=()=>{
  const url = "https://jsonplaceholder.typicode.com/todos"
  
  const todos= useFech<Todo>(url)
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
  <h1 >Users</h1>
 <User></User>
 <br></br>
 <h1>TODOs</h1>
 <Todo></Todo>
  </>
 )
};

export default IndexPage;

