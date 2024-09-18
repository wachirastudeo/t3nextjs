import { api } from "~/utils/api";
import Loading from "../../Loading";
import ArticleItem from "./ArticleItem";

const ArticleList = () => {

    const {data:articles ,isLoading} = api.article.list.useQuery();
    if(isLoading)return <Loading></Loading>
    if(!articles) return <>Not Found</>

    return (
        <div className="mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 ">
            {
                articles.map(article=> <ArticleItem key={article.id} {...article}></ArticleItem>)
            }
        </div>
     );
}
 
export default ArticleList;