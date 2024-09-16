import { useRouter } from "next/router";
import { api } from "~/utils/api";
import Loading from "../../Loading";
import Card from "../../Card";

const AnnouncementDetail = () => {
    const router = useRouter() // ดึงค่า ตรง url ได้ ไว้ทำการ query
    const {data:announcement,isLoading} = api.announcement.bySlug.useQuery(router.query.slug as string);
    if(isLoading)return<Loading></Loading>
    if(!announcement) return<>Not Found</>
    return ( 
    <Card>
    {announcement.title}
    {announcement.title}
    {announcement.title}
    {announcement.title}


    </Card> );
}
 
export default AnnouncementDetail;