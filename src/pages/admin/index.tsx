import Layout from "~/features/ui/components/layouts/Admin";
import { NextPageWithLayout } from "../_app";

const IndexPage:NextPageWithLayout = () => {
    return (<div>Index page</div> );
}

IndexPage.getLayout = Layout
 
export default IndexPage;