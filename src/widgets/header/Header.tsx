import { AppBar, Toolbar, IconButton, Typography, Box } from "@mui/material";
import { FunctionComponent } from "react";

interface HeaderProps {
    handleDrawerToggle(): void;
    drawerWidth: number;
}

const Header: FunctionComponent<HeaderProps> = ({
    handleDrawerToggle,
    drawerWidth,
}) => {
    return (
        <AppBar
            position="fixed"
            sx={{
                width: { sm: `calc(100% - ${drawerWidth}px)` },
                ml: { sm: `${drawerWidth}px` },
                p: "15px 0",
                backgroundColor: "#fff",
                color: "#111",
                boxShadow: "none",
            }}
        >
            <Box
                component={Toolbar}
                display="flex"
                justifyContent={"space-between"}
                alignItems="center"
                paddingX={{ xs: 2, sm: 4, md: 4, lg: 6 }}
            >
                <Box display="flex" alignItems="center">
                    <Typography variant="navHeader">Dashboard</Typography>
                </Box>
                <Box
                    display="flex"
                    alignItems="center"
                    gap={{ xs: 1, sm: 2, md: 3 }}
                >
                    {/* //!  TODO: probably this is going to be at shared */}
                    <p>search</p>
                    <p>notifications</p>
                    <p>account</p>
                    <p>menu</p>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ ml: 2, display: { sm: "none" } }}
                    >
                        {/* <MenuIcon /> */}
                        <div>icon</div>
                    </IconButton>
                </Box>
            </Box>
        </AppBar>
    );
};

export default Header;
