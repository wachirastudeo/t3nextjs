import { api } from "~/utils/api"; // import api ให้ใช้งานได้
import Loading from "~/features/ui/components/Loading";
import LeaveItem from "./LeaveItem";
import FloatingActionButton from "~/features/ui/FloatingActionButton";
import { useRouter } from "next/router";
const LeaveList = () => {
    const router = useRouter()
    const {data:leaves,isLoading}  =api.leave.list.useQuery() // เรียกใช้ leave ผ่าน api 
    if(isLoading)return<Loading></Loading>
    if(!leaves)return<div>Not found</div>

    return (
         <div className="mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 ">
    {leaves.map(leave=><LeaveItem key={leave.id}{...leave}></LeaveItem>)}

    <FloatingActionButton onClick={()=>router.push('/leaves/new')} >+</FloatingActionButton>

    </div> );
}
 
export default LeaveList;