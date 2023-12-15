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
        navHeader: React.CSSProperties;
        navLinks: React.CSSProperties;
        logoText: React.CSSProperties;
    }

    interface Palette {
        accent: Palette["primary"];
        error: Palette["primary"];
        caption: Palette["primary"];
        filterPizza: Palette["primary"];
        filterMexican: Palette["primary"];
        filterDonut: Palette["primary"];
        filterIce: Palette["primary"];
        filterAsian: Palette["primary"];
    }

    interface PaletteOptions {
        accent: PaletteOptions["primary"];
        caption: PaletteOptions["primary"];
        filterPizza: PaletteOptions["primary"];
        filterMexican: PaletteOptions["primary"];
        filterDonut: PaletteOptions["primary"];
        filterIce: PaletteOptions["primary"];
        filterAsian: PaletteOptions["primary"];
    }

    interface PaletteColorOptions {
        // accent: PaletteOptions["primary"];
        // caption: PaletteOptions["primary"];
        main?: string;
        color?: string;
        bgColor?: string;
    }
}

// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
    interface TypographyPropsVariantOverrides {
        navHeader: true;
        navLinks: true;
        logoText: true;
    }

    // interface TypographyPropsColorOverrides {
    //     test: true;
    // }
}

let theme = createTheme({
    palette: {
        // primary: {
        //     main: themeConfig.palette.primary,
        // },
        // secondary: {
        //     main: themeConfig.palette.secondary,
        // },
        accent: {
            main: themeConfig.palette.accent,
        },
        error: {
            main: themeConfig.palette.error,
        },
        caption: {
            main: themeConfig.palette.caption,
        },
        filterPizza: {
            color: themeConfig.filter.pizza.color,
            bgColor: themeConfig.filter.pizza.bgColor,
        },
        filterMexican: {
            color: themeConfig.filter.mexican.color,
            bgColor: themeConfig.filter.mexican.bgColor,
        },
        filterDonut: {
            color: themeConfig.filter.donut.color,
            bgColor: themeConfig.filter.donut.bgColor,
        },
        filterIce: {
            color: themeConfig.filter.ice.color,
            bgColor: themeConfig.filter.ice.bgColor,
        },
        filterAsian: {
            color: themeConfig.filter.asian.color,
            bgColor: themeConfig.filter.asian.bgColor,
        },

        text: {
            primary: themeConfig.palette.primary,
            secondary: themeConfig.palette.secondary,
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

console.log(theme);

theme = responsiveFontSizes(theme);

export default theme;
