import { Grid } from "@mui/material";
import Hero from "./components/hero";
import Wallet from "../../widgets/wallet";
import Filter from "../../features/filter";
import Nearby from "./components/nearby";
import Popular from "./components/popular";
import Recommended from "../../widgets/recommended";

const HomePage = () => {
    return (
        <>
            <Grid container justifyContent={"space-between"} gap={4}>
                <Grid item xs={12} lg={6}>
                    <Hero />
                    <section>
                        <Filter />
                    </section>
                    <Nearby />
                    <Popular />
                </Grid>
                <Grid item xs={12} lg={5.5}>
                    <Wallet />
                    <Recommended />
                </Grid>
            </Grid>
        </>
    );
};

export default HomePage;
