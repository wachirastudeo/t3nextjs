import Button from "~/features/ui/components/Button";
import { api } from "~/utils/api";
const IndexPage=()=>{
     //useQuery() คือดึงข้อมูลออกมาดูอย่างเดียว
    const add = ()=>{}
    const update =()=>{}
    const remove = ()=>{}
   const {data:articles,isLoading}= api.article.list.useQuery(); 
   if(isLoading) return <div>Loading</div>
   if(!articles) return <div>No Content</div>

  return(
  <>
      <Button color='primary'>add</Button>
  
      <ul>
    
      {
        articles.map((article) => (

        <li key={article.id}>{article.title}

          <Button onClick={update} >Edit</Button>
          <Button onClick={remove}>Delete</Button>

        </li>

        ))}
    </ul>
  </>)
}
export default IndexPage;