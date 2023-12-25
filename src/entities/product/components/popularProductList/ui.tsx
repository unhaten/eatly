import { List, ListItem, Box } from "@mui/material";
import Product from "../..";

const PopularProductList = () => {
    return (
        <Box
            component={List}
            sx={{
                "& li": {
                    // flexBasis: "31%",
                    width: "fit-content",
                    borderRadius: 4,
                    padding: 0,
                    border: "1px solid #F4F4F6",
                    boxShadow:
                        "3.891px 46.697px 23.348px 0px rgba(229, 229, 229, 0.70)",
                },
            }}
        >
            <ListItem>
                <Product popular />
            </ListItem>
        </Box>
    );
};

export default PopularProductList;
