import { api } from "~/utils/api";
import Loading from "../../Loading";
import ArticleItem from "./ArticleItem";

const ArticleList = () => {

    const {data:articles ,isLoading} = api.article.list.useQuery()
    if(isLoading)return <Loading></Loading>
    if(!articles) return <>Not Found</>

    return (
        <div>
            {
                articles.map(article=> <ArticleItem key={article.id} {...article}></ArticleItem>)
            }
        </div>
     );
}
 
export default ArticleList;