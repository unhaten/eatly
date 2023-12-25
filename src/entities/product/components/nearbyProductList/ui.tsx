import { List, ListItem, Box } from "@mui/material";
import Product from "../..";

const NearbyProductList = () => {
    return (
        <Box
            component={List}
            display="flex"
            flexWrap={"wrap"}
            gap={2}
            sx={{
                "& li": {
                    flexBasis: "31%",
                    borderRadius: 4,
                    padding: 0,
                    border: "1px solid #F4F4F6",
                    boxShadow:
                        "3.416px 40.996px 20.498px 0px rgba(229, 229, 229, 0.70)",
                },
            }}
        >
            <ListItem>
                <Product nearby />
            </ListItem>
            <ListItem>
                <Product nearby />
            </ListItem>
            <ListItem>
                <Product nearby />
            </ListItem>
        </Box>
    );
};

export default NearbyProductList;
