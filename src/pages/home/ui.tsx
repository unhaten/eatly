import { Grid } from "@mui/material";
import Hero from "./components/hero";
import Wallet from "../../widgets/wallet";
import Filter from "../../features/filter";
import Nearby from "./components/nearby";

const HomePage = () => {
    return (
        <>
            <Grid container justifyContent={"space-between"} gap={4}>
                <Grid item xs={12} md={6} lg={6.5}>
                    <Hero />
                    <section>
                        <Filter />
                    </section>
                    <Nearby />
                </Grid>
                <Grid item xs={12} md={5}>
                    <Wallet />
                </Grid>
            </Grid>
        </>
    );
};

export default HomePage;
