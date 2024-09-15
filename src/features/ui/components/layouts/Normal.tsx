import { ReactNode } from "react";

export interface LaytouProps{ // export interface ไปด้วยให้คนอื่นใช้ได้
    children:ReactNode;  // ของต่างๆ ใน  react 

}

const Layout = ({children}) => {
    return ( 
        <>
        <header>Header </header>
        <main>{children}</main>
        <footer>Footer</footer>
        </>
     );
}
 
export default Layout;