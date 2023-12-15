import { Typography, Box, useTheme } from "@mui/material";
import s from "./Hero.module.scss";

const Hero = () => {
    const theme = useTheme();
    return (
        <section>
            <Box
                borderRadius={5.5}
                position={"relative"}
                maxWidth={"710px"}
                margin={"0 auto"}
                overflow={"hidden"}
                sx={{
                    backgroundColor: theme.typography.logoText.color,
                }}
            >
                <img
                    src="/img/herobg.png"
                    alt="backgroundHero"
                    className={s.img}
                />
                <Box position={"relative"} paddingY={3} paddingX={4}>
                    <Typography
                        variant="h2"
                        color="text.secondary"
                        fontWeight={800}
                    >
                        50% OFF
                    </Typography>
                    <Typography
                        variant="body1"
                        color="text.secondary"
                        fontWeight={600}
                    >
                        Daily Deals
                    </Typography>
                </Box>
            </Box>
        </section>
    );
};

export default Hero;
