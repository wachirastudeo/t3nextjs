import Badge from "~/features/ui/components/Badge";
import { Leave } from "../types";

export type LeaveItemProps  = Leave;

const statusColor = (status:Leave['status'])=>{
    switch (status) {
        case 'PENDING':
            return 'info';
        case 'APPROVED':
            return 'success';
        case 'REJECTED':
            return 'danger';

    }
}

const LeaveItem = ({id,reason,status,leaveDate}:LeaveItemProps) => {
    return (<>
      <Badge color={statusColor(status)}>{status}</Badge>
      <p>{reason}</p>
      <div>{leaveDate}</div>

    </>  );
}
 
export default LeaveItem;