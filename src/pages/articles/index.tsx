import { GetStaticProps } from 'next';
import ArticleList from '~/features/ui/components/articles/components/ArticleList';
import Layout from '~/features/ui/components/layouts/Normal';
import { generateServerSideHelper } from '~/server/shared/serverSideHelper';

export const getStaticProps:GetStaticProps= async ()=>{
    const helpers = generateServerSideHelper();
    await helpers.article.list.prefetch();
    return {
      props:{
        trpcState:helpers.dehydrate(),
      }
    }

}


const IndexPage = () => {
  return <ArticleList></ArticleList>;
};

IndexPage.getLayout = Layout;

export default IndexPage;
