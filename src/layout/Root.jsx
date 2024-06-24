import { Outlet } from "react-router-dom";
import Footer from "../shared/Footer";
import Navbar from "../shared/Navbar";


const Root = () => {
    return (
        <>
        <div className="max-w-6xl mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </>
        
    );
};

export default Root;