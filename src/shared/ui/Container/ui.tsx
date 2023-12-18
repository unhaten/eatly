import { Box } from "@mui/material";
import { FC, ReactNode } from "react";

interface ContainerProps {
    children: ReactNode;
}

const Container: FC<ContainerProps> = ({ children }) => {
    return (
        <Box
            maxWidth={"1920px"}
            paddingX={{ xs: 2, sm: 4, md: 4, lg: 6 }}
            margin={"0 auto"}
        >
            {children}
        </Box>
    );
};

export default Container;
