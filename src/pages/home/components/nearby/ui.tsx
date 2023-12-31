import { Typography, Box } from "@mui/material";
import NearbyProductList from "../../../../entities/product/components/nearbyProductList";

const Nearby = () => {
    return (
        <section>
            <Box
                mt={4}
                mb={3}
                display="flex"
                justifyContent="space-between"
                alignItems="center"
            >
                <Typography variant="h5" component="h2">
                    Nearby Restaurants
                </Typography>
                <Typography>View all</Typography>
            </Box>
            <NearbyProductList />
        </section>
    );
};

export default Nearby;
