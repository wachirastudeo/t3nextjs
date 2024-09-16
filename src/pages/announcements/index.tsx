import { GetServerSideProps } from 'next';
import AnnouncementList from '~/features/ui/components/announcement/components/AnnouncementList';
import Layout from '~/features/ui/components/layouts/Normal';
import { generateServerSideHelper } from '~/server/shared/serverSideHelper';

// ทำ ssr ต้องชื่อนี้เท่านี้
export const getServerSideProps:GetServerSideProps =async()=>{ 
  const helpers = generateServerSideHelper();
  await helpers.announcement.list.prefetch()
  return {
    props:{
      trpcState: helpers.dehydrate(),

    }
  }

}

const IndexPage = () => {
  return <AnnouncementList></AnnouncementList>;
};

IndexPage.getLayout = Layout;

export default IndexPage;
