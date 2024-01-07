import {useEffect} from 'react'
import AOS from "aos";
import { Outlet } from "react-router-dom";
import Header from "layouts/Main/Header";
import Footer from "./Footer";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'assets/styles/theme.css'

const MainLayout = () =>{
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
      }, []);
    return(
        <div className="main-wrapper">
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}

export default MainLayout;
