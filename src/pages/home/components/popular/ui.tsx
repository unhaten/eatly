import { Typography, Box } from "@mui/material";
import PopularProductList from "../../../../entities/product/components/popularProductList";

const Popular = () => {
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
                    Most Popular
                </Typography>
                <Typography>View all</Typography>
            </Box>
            <PopularProductList />
        </section>
    );
};

export default Popular;
