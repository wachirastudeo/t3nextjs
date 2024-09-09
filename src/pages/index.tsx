import { api } from "~/utils/api";
const IndexPage=()=>{
     //useQuery() คือดึงข้อมูลออกมาดูอย่างเดียว

   const {data:articles,isLoading}= api.article.list.useQuery(); 
   if(isLoading) return <div>Loading</div>
   if(!articles) return <div>No Content</div>

  return(
  <>
  
    <ul>
      {
        articles.map((article) => (

        <li key={article.id}>{article.title}</li>

        ))}
    </ul>
  </>)
}
export default IndexPage;