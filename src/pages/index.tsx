
import { useEffect, useState } from "react";
interface FooProps{
  x:number
}
const Foo = ({x}:FooProps)=>{
  useEffect(()=>{
    console.log(x) //undated
    return ()=> console.log("bye",x) //unmounting
  },[x])
  return <div>Foo</div>
}

const IndexPage = () => {
  const  [isShow,setIsShow] = useState(false)
  const [x,setX] = useState(1)
 return(
  <>
  <button onClick={()=>setIsShow(!isShow)}>Toggle</button>
  <button onClick={()=>setX(+new Date())}>Change x</button>

  {isShow&&<Foo x={x}></Foo>}
  </>
 )
};

export default IndexPage;

