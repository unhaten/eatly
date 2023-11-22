import { createTheme, responsiveFontSizes } from "@mui/material";

declare module "@mui/material/styles" {
    interface TypographyVariants {
        highlighted: React.CSSProperties;
    }

    // allow configuration using `createTheme`
    interface TypographyVariantsOptions {
        highlighted?: React.CSSProperties;
    }
}

// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
    interface TypographyPropsVariantOverrides {
        highlighted: true;
    }
}

let theme = createTheme({
    palette: {
        // primary: {
        // },
    },
    typography: {},
    components: {},
});

theme = responsiveFontSizes(theme);

export default theme;
