import { createTheme, responsiveFontSizes } from "@mui/material";
import themeConfig from "./config/themeConfig";

declare module "@mui/material/styles" {
    interface TypographyVariants {
        navHeader: React.CSSProperties;
        navLinks: React.CSSProperties;
        logoText: React.CSSProperties;
    }

    // allow configuration using `createTheme`
    interface TypographyVariantsOptions {
        navHeader?: React.CSSProperties;
        navLinks?: React.CSSProperties;
        logoText?: React.CSSProperties;
    }

    interface Palette {
        test?: Palette["primary"];
        // yellow?: Palette["primary"];
    }
    interface PaletteOptions {
        test?: PaletteOptions["primary"];
        // yellow?: PaletteOptions["primary"];
    }
}

// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
    interface TypographyPropsVariantOverrides {
        navHeader: true;
        navLinks: true;
        logoText: true;
    }

    interface TypographyPropsColorOverrides {
        test: true;
    }
}

let theme = createTheme({
    palette: {
        // primary: {
        //     main: themeConfig.palette.primary,
        // },
        // secondary: {
        //     main: themeConfig.palette.secondary,
        // },
        // background:{},

        text: {
            primary: themeConfig.palette.primary,
            secondary: themeConfig.palette.secondary,
            // !FIXME: uncomment to see an error
            // test: "#f1f",
        },
    },
    typography: {
        // h2: {
        //     fontSize: "1.5rem",
        // },
        navHeader: {
            color: themeConfig.navHeader.color,
            fontWeight: 600,
            fontSize: "1.5rem",
            lineHeight: "1.95rem",
        },
        navLinks: {
            color: themeConfig.navLinks.color,
            fontWeight: 500,
            fontSize: "0.875rem",
            letterSpacing: "0.0125rem",
            lineHeight: "1.3125rem",
        },
        logoText: {
            color: themeConfig.logoText.color,
            fontWeight: 600,
            fontSize: "1.13235rem",
            lineHeight: "1.72056rem",
        },
    },
    components: {
        MuiTypography: {
            defaultProps: {
                variantMapping: {
                    // Map the new variant to render a <h1> by default
                    navHeader: "h1",
                    logoText: "h2",
                },
            },
        },
    },
});

theme = responsiveFontSizes(theme);

export default theme;
