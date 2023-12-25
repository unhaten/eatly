import { FunctionComponent, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../header";
import Footer from "../footer";
import { Box, CssBaseline } from "@mui/material";
import Sidebar from "../sidebar";
import Container from "../../shared/ui/Container";

interface LayoutProps {}

const Layout: FunctionComponent<LayoutProps> = () => {

    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    console.log(window.location.pathname);

    return (
        <>
            <CssBaseline />
            <Header
                handleDrawerToggle={handleDrawerToggle}
            />
            <Box component="main" display="flex">
                <Sidebar
                    mobileOpen={mobileOpen}
                    handleDrawerToggle={handleDrawerToggle}
                />
                <Box marginTop={"100px"} width="100%">
                    <Container>
                        <Outlet />
                    </Container>
                </Box>
            </Box>
            <Footer />
        </>
    );
};

export default Layout;
