import { useRouter } from "next/router";
import { api } from "~/utils/api";
import Loading from "../../Loading";

const ArticleDetail = () => {
    const router = useRouter()
    const {data:article,isLoading} = api.article.bySlug.useQuery(router.query.slug as string);
    if(isLoading)return<Loading></Loading>
    if(!article) return<>Not Found</>
    return ( 
    <div>
    {article.title}
    
    </div> );
}
 
export default ArticleDetail;