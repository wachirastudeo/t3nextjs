import ArticleList from '~/features/ui/components/articles/components/ArticleList';
import Layout from '~/features/ui/components/layouts/Normal';

const IndexPage = () => {
  return <ArticleList></ArticleList>;
};

IndexPage.getLayout = Layout;

export default IndexPage;
