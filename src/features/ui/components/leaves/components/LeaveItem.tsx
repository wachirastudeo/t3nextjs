export interface LeaveItemProps{
    id:number;
    reason:string;
    status:'PENDING'| 'APPROVED' | 'REJECTED';
    leaveDate:string;
}

const LeaveItem = ({}:LeaveItemProps) => {
    return (  );
}
 
export default LeaveItem;