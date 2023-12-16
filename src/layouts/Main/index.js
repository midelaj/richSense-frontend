import { Outlet } from "react-router-dom";
import Header from "layouts/Main/Header";
import Footer from "./Footer";

const MainLayout = () =>{
    return(
        <div className="main">
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}

export default MainLayout;
