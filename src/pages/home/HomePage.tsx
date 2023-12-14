import { Grid } from "@mui/material";
import Hero from "./components";
import Wallet from "../../widgets/wallet";
import Filter from "../../widgets/filter";

const HomePage = () => {
    return (
        <>
            <Grid container justifyContent={"space-between"} gap={4}>
                <Grid item xs={12} md={6} lg={6.5}>
                    <Hero />
                    <Filter />
                </Grid>
                <Grid item xs={12} md={5}>
                    <Wallet />
                </Grid>
            </Grid>
        </>
    );
};

export default HomePage;
