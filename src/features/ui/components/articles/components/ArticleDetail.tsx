import { useRouter } from "next/router";
import { api } from "~/utils/api";
import Loading from "../../Loading";
import Card from "../../Card";

const ArticleDetail = () => {
    const router = useRouter() // ดึงค่า ตรง url ได้ ไว้ทำการ query
    const {data:article,isLoading} = api.article.bySlug.useQuery(router.query.slug as string);
    if(isLoading)return<Loading></Loading>
    if(!article) return<>Not Found</>
    return ( 
    <Card image={article.image} alt={article.title}>
    {article.title}
    
    </Card> );
}
 
export default ArticleDetail;