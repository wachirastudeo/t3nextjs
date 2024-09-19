import { api } from '~/utils/api';
import Loading from '../../Loading';
import Card from '../../Card';
import {type AnnouncementDetails } from '../types';

export interface AnnouncementDetailProps {
  slug: AnnouncementDetails['slug'];
}

const AnnouncementDetail = ({ slug }: AnnouncementDetailProps) => {
  // const router = useRouter() // ดึงค่า ตรง url ได้ ไว้ทำการ query
  const { data: announcement, isLoading } = api.announcement.bySlug.useQuery(slug);
  if (isLoading) return <Loading></Loading>;
  if (!announcement) return <>Not Found</>;
  return (
    <div>
      {announcement.title}
      <Card>{announcement.content}</Card>{' '}
    </div>
  );
};

export default AnnouncementDetail;
