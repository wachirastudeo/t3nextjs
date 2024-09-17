import { GetStaticPaths, GetStaticPathsResult, GetStaticProps, InferGetStaticPropsType } from 'next';
import { useRouter } from 'next/router';
import ArticleDetail from "~/features/ui/components/articles/components/ArticleDetail";
import Layout from "~/features/ui/components/layouts/Normal";
import Loading from '~/features/ui/components/Loading';
import { generateServerSideHelper } from "~/server/shared/serverSideHelper";


export const getStaticProps:GetStaticProps<{slug:string}>= async (context)=>{
    const helpers = generateServerSideHelper();
    const slug = context.params?.slug as string;
    await helpers.article.bySlug.prefetch(slug );
    return {
      props:{
        trpcState:helpers.dehydrate(),
        slug,
      }
    }
}

export const getStaticPaths:GetStaticPaths = async ()=>{
        const helpsers= generateServerSideHelper()
        const articles = await helpsers.article.list.fetch()

        return {
            paths:articles.map((article)=>{
                return {
                    params:{
                        slug:article.slug
                    }
                }
            })
            ,fallback:'blocking'
        }
}
 
const DetailPage = ({slug}:InferGetStaticPropsType<typeof getStaticProps> ) => {
    const router = useRouter()
    if(router.isFallback) return <Loading></Loading>
    return <ArticleDetail slug={slug}></ArticleDetail>
}
 
DetailPage.getLayout = Layout

export default DetailPage;