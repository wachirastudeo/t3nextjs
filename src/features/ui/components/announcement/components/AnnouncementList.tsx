import { api } from "~/utils/api";
import Loading from "../../Loading";
import AnnouncementItem from "./AnnouncementItem";


const AnnouncementList = () => {

    const {data:announcements ,isLoading} = api.announcement.list.useQuery()
    if(isLoading)return <Loading></Loading>
    if(!announcements) return <>Not Found</>

    return (
        <div className="mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 ">
            {
                announcements.map(announcement=>
                     <AnnouncementItem key={announcement.id} {...announcement}></AnnouncementItem>)
            }
        </div>
     );
}
 
export default AnnouncementList;