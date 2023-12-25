import { Box, Typography } from "@mui/material";
import s from "./style.module.scss";
import IProduct from "./types/types";
import { FC } from "react";

const Product: FC<IProduct> = ({ nearby, popular }) => {
    return (
        <Box
            width={"100%"}
            // borderRadius={5}
            sx={{
                "& img": {
                    display: "block",
                    margin: "0 auto",
                    width: popular ? "100px" : "100%",
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                },
            }}
        >
            <img
                src={
                    nearby
                        ? "/img/placeholderNearby.jpg"
                        : popular
                        ? "/img/foodPopular.png"
                        : ""
                }
                alt="productImage"
            />
            <Box
                className={s.content}
                sx={{
                    paddingX: 3,
                    paddingY: 1,
                }}
            >
                <Box className={s.badge}>
                    <Typography>healthy</Typography>
                </Box>
                <Typography className={s.name}>Test</Typography>
                <Box display={"flex"}>
                    <Typography className={s.time}>24min</Typography>
                    <Box className={s.dot} />
                    <Box className={s.star} />
                    <Typography className={s.rate}>4.8</Typography>
                    {nearby && <Box>fav</Box>}
                </Box>
            </Box>
        </Box>
    );
};

export default Product;
