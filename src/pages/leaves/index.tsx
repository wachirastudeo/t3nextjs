import Layout from "~/features/ui/components/layouts/Normal";
import { NextPageWithLayout } from "../_app";
import LeaveList from "~/features/ui/components/leaves/components/LeaveList";

const IndexPage:NextPageWithLayout = () => {
    return (  <>
            <LeaveList></LeaveList>
    </>);
}

IndexPage.getLayout = Layout
 
export default IndexPage;