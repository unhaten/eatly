import { Typography, Box } from "@mui/material";

const Nearby = () => {
    return (
        <section>
            <Box
                mt={4}
                display="flex"
                justifyContent="space-between"
                alignItems="center"
            >
                <Typography variant="h5" component="h2">
                    Nearby Restaurants
                </Typography>
                <Typography>View all</Typography>
            </Box>
        </section>
    );
};

export default Nearby;
