import { Box, Typography } from "@mui/material";

const Recommended = () => {
    return (
        <section>
            <Box
                paddingX={3}
                paddingY={4}
                sx={{
                    borderRadius: 4,
                    border: "1px solid#edf2f7",
                    height: 500,
                }}
            >
                <Typography>Recommended</Typography>
            </Box>
        </section>
    );
};

export default Recommended;
