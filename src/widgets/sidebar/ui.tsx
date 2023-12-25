import {
    Box,
    Divider,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    // ListItemText,
    Typography,
    useMediaQuery,
    useTheme,
} from "@mui/material";
import { FunctionComponent } from "react";
import { NavLink, Link } from "react-router-dom";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import ReceiptRoundedIcon from "@mui/icons-material/ReceiptRounded";
import ChatRoundedIcon from "@mui/icons-material/ChatRounded";
import WalletRoundedIcon from "@mui/icons-material/WalletRounded";
import MoveDownRoundedIcon from "@mui/icons-material/MoveDownRounded";
import drawerWidth from "../../shared/consts";

interface SidebarProps {
    mobileOpen: boolean;
    handleDrawerToggle(): void;
}

const Sidebar: FunctionComponent<SidebarProps> = ({
    mobileOpen,
    handleDrawerToggle,
}) => {
    const theme = useTheme();

    const isMd = useMediaQuery(theme.breakpoints.up("md"), {
        defaultMatches: true,
    });

    const drawer = (
        <Box padding={3} height={"100%"}>
            <Box
                component={Link}
                to="/"
                display="flex"
                alignItems="center"
                gap={2}
                width="fit-content"
            >
                <img src="/img/logo.svg" alt="" />
                <Typography variant="logoText">eatly</Typography>
            </Box>
            <Box component={Divider} marginTop={2} />
            <Box
                display="flex"
                flexDirection="column"
                justifyContent={"space-between"}
                height={"calc(100% - 70px)"}
            >
                <Box component={List} marginTop={{ xs: 0, md: 4 }}>
                    {[
                        "Dashboard",
                        "Orders",
                        "Messages",
                        "My Wallets",
                        "Activity",
                    ].map((text, index) => {
                        const splittedText = text.split(" ");
                        return (
                            <NavLink
                                key={text}
                                to={
                                    splittedText.length < 2
                                        ? text === "Dashboard"
                                            ? "/"
                                            : text.toLowerCase()
                                        : splittedText[1].toLowerCase()
                                }
                            >
                                <ListItem disablePadding>
                                    <ListItemButton>
                                        <ListItemIcon>
                                            {index === 0 ? (
                                                <HomeRoundedIcon />
                                            ) : index === 1 ? (
                                                <ReceiptRoundedIcon />
                                            ) : index === 2 ? (
                                                <ChatRoundedIcon />
                                            ) : index === 3 ? (
                                                <WalletRoundedIcon />
                                            ) : index === 4 ? (
                                                <MoveDownRoundedIcon />
                                            ) : (
                                                <div>icon</div>
                                            )}
                                        </ListItemIcon>
                                        {/* <ListItemText primary={text} /> */}
                                        <Typography variant="navLinks">
                                            {text}
                                        </Typography>
                                    </ListItemButton>
                                </ListItem>
                            </NavLink>
                        );
                    })}
                </Box>
                <Box>
                    <Box component={List} marginTop={{ xs: 0, md: 4 }}>
                        {["Get Help", "Settings"].map((text, index) => {
                            const splittedText = text.split(" ");

                            return (
                                <NavLink
                                    key={text}
                                    to={
                                        splittedText.length < 2
                                            ? text === "Dashboard"
                                                ? "/"
                                                : text.toLowerCase()
                                            : splittedText[1].toLowerCase()
                                    }
                                >
                                    <ListItem disablePadding>
                                        <ListItemButton>
                                            <ListItemIcon>
                                                {index % 2 === 0 ? (
                                                    // <InboxIcon />
                                                    <div>icon</div>
                                                ) : (
                                                    // <MailIcon />
                                                    <div>icon</div>
                                                )}
                                            </ListItemIcon>
                                            {/* <ListItemText primary={text} /> */}
                                            <Typography variant="navLinks">
                                                {text}
                                            </Typography>
                                        </ListItemButton>
                                    </ListItem>
                                </NavLink>
                            );
                        })}
                    </Box>
                </Box>
            </Box>
        </Box>
    );

    return (
        <Box
            component="aside"
            sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}
            aria-label="mailbox folders"
        >
            {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
            {!isMd ? (
                <Drawer
                    // container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        "& .MuiDrawer-paper": {
                            width: drawerWidth,
                        },
                    }}
                >
                    {drawer}
                </Drawer>
            ) : (
                <Drawer
                    variant="permanent"
                    sx={{
                        "& .MuiDrawer-paper": {
                            width: drawerWidth,
                            borderRight: "none",
                        },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            )}
        </Box>
    );
};

export default Sidebar;
