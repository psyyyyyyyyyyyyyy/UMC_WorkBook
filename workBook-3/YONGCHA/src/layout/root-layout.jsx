import {Outlet} from "react-router-dom";
import Navbar from "../components/navbar.jsx";
import Sidebar from "../components/sideber.jsx";

const RootLayout = () => {
    return (
        <>
            <Navbar/>
            <Sidebar/>
            <Outlet/>
        </>
    );
};

export default RootLayout;
