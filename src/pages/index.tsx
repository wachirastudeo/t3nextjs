import { useState } from "react";
import Button from "~/features/ui/components/Button";
import { api } from "~/utils/api";

interface articleDetailsProp{
  id:number;

}

const ArticleDetails = ({id}:articleDetailsProp)=>{
   const {data:article,isLoading} = api.article.byId.useQuery(id);
   if(isLoading) return<div>Loading ... </div>
   if(!article) return <div>No Content.</div>
   return(
    <>
    <ul>
      <li>{article.title}</li>
      <li>{article.content}</li>
      <li>{article.excerpt}</li>

    </ul>
    </>
   )
}

const IndexPage=()=>{
     //useQuery() คือดึงข้อมูลออกมาดูอย่างเดียว
const [currentId,setCurrentId] = useState(-1)
  
  const utils = api.useUtils(); // use context เก่า ให้เก็บข้อมูลไว้
  const list = utils.article.list // เก็บไว้ใน list 
   const {data:articles,isLoading}= api.article.list.useQuery();  // คืนมาเป็น data

  const { mutateAsync:addArticle } = api.article.add.useMutation({
    onSuccess(){ // ทำเสร็จให้อัพเดทค่าใหม่
      list.invalidate()
    }
  }) // คืนมาเป็น mutate กับ mutate async รอทำเสร็จแล้วทำอย่างอื่นต่อ
  const { mutateAsync:updateArticle } = api.article.update.useMutation(
    {
      onSuccess(){
        list.invalidate()
      }
    }
  )
  const { mutateAsync:removeArticle } = api.article.remove.useMutation({
    onSuccess(){
      list.invalidate()
    }
  })

  const dateString = new Date().toISOString();
  const add = async () => {
    await addArticle({
      title: `my title: ${dateString}`,
      excerpt: `my excerpt: ${dateString}`,
      content: `my content: ${dateString}`,
    });
  };

  const update=async (id:number)=>{
    updateArticle(
      {
        id,
        data:{
         title: `my title: ${dateString}`,
      excerpt: `my excerpt: ${dateString}`,
      content: `my content: ${dateString}`,
        }
      }
    )
  }
  const remove=async (id:number)=>{
    removeArticle(id)

  }


   if(isLoading) return <div>Loading</div>
   if(!articles) return <div>No Content</div>

  return(
  <>
      <Button color='primary' onClick={add}>add</Button>
  
      <ul>
    
      {
        articles.map((article) => (

        <li key={article.id} className="flex py-3" >
          <div className="px-5">          {article.title} 
          </div>
          <Button className="mx-3" onClick={() => setCurrentId(article.id)} >Show detail</Button>

          <Button className="mx-3" onClick={() => update(article.id)} >Edit</Button>
          <Button  onClick={() => remove(article.id)}>Delete</Button>


        </li>


        ))}
    </ul>
{    currentId !==-1 &&<ArticleDetails id={currentId}></ArticleDetails>
}  </>)
}
export default IndexPage;