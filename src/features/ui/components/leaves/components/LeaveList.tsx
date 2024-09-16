import { api } from "~/utils/api"; // import api ให้ใช้งานได้
import Loading from "../../loading";
const LeaveList = () => {
    const {data:leaves,isLoading}  =api.leave.list.useQuery() // เรียกใช้ leave ผ่าน api 
    if(isLoading)return<Loading></Loading>
    if(!leaves)return<div>Not found</div>

    return (
         <>
    Leave List

    </> );
}
 
export default LeaveList;