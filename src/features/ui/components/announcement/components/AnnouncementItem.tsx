import Link from "next/link";
import { Announcement } from "../types";

export type AnnouncementItemProps =Announcement
const AnnouncementItem = ({title,slug}:AnnouncementItemProps) => {
    return ( <Link href={`/announcements/${slug}`}>{title}</Link> );
}
 
export default AnnouncementItem;