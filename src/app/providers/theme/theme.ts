import { createTheme, responsiveFontSizes } from '@mui/material'
import themeConfig from './config/themeConfig'

declare module '@mui/material/styles' {
	interface TypographyVariants {
		navHeader: React.CSSProperties
		navLinks: React.CSSProperties
		logoText: React.CSSProperties
	}

	// allow configuration using `createTheme`
	interface TypographyVariantsOptions {
		navHeader: React.CSSProperties
		navLinks: React.CSSProperties
		logoText: React.CSSProperties
	}

	interface Palette {
		accent: Palette['primary']
		error: Palette['primary']
		caption: Palette['primary']
		badges: Palette['primary']
		filterPizza: Palette['primary']
		filterMexican: Palette['primary']
		filterDonut: Palette['primary']
		filterIce: Palette['primary']
		filterAsian: Palette['primary']
	}

	interface PaletteOptions {
		accent: PaletteOptions['primary']
		caption: PaletteOptions['primary']
		badges: PaletteOptions['primary']

		filterPizza: PaletteOptions['primary']
		filterMexican: PaletteOptions['primary']
		filterDonut: PaletteOptions['primary']
		filterIce: PaletteOptions['primary']
		filterAsian: PaletteOptions['primary']
	}

	interface PaletteColorOptions {
		// accent: PaletteOptions["primary"];
		// caption: PaletteOptions["primary"];
		main?: string
		dark?: string
		light?: string
		color?: string
		bgColor?: string
		contrastText?: string
		healthy?: {
			color?: string
			bgColor?: string
		}
		trending?: {
			color?: string
			bgColor?: string
		}
		supreme?: {
			color?: string
			bgColor?: string
		}
	}
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
	interface TypographyPropsVariantOverrides {
		navHeader: true
		navLinks: true
		logoText: true
	}

	// interface TypographyPropsColorOverrides {
	//     test: true;
	// }
}

declare module '@mui/material/styles' {
	interface CustomPalette {
		violet: PaletteColorOptions
	}
	interface Palette extends CustomPalette {}
	interface PaletteOptions extends CustomPalette {}
}

declare module '@mui/material/Button' {
	interface ButtonPropsColorOverrides {
		violet: true
		accent: true
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
		violet: {},
		accent: {
			main: themeConfig.palette.accent.main,
			dark: themeConfig.palette.accent.dark,
			light: '#6c5fbc6e',
			contrastText: themeConfig.palette.secondary
		},
		error: {
			main: themeConfig.palette.error
		},
		caption: {
			main: themeConfig.palette.caption
		},
		filterPizza: {
			color: themeConfig.filter.pizza.color,
			bgColor: themeConfig.filter.pizza.bgColor
		},
		filterMexican: {
			color: themeConfig.filter.mexican.color,
			bgColor: themeConfig.filter.mexican.bgColor
		},
		filterDonut: {
			color: themeConfig.filter.donut.color,
			bgColor: themeConfig.filter.donut.bgColor
		},
		filterIce: {
			color: themeConfig.filter.ice.color,
			bgColor: themeConfig.filter.ice.bgColor
		},
		filterAsian: {
			color: themeConfig.filter.asian.color,
			bgColor: themeConfig.filter.asian.bgColor
		},
		badges: {
			healthy: {
				color: themeConfig.badges.healthy.color,
				bgColor: themeConfig.badges.healthy.bgColor
			},
			trending: {
				color: themeConfig.badges.trending.color,
				bgColor: themeConfig.badges.trending.bgColor
			},
			supreme: {
				color: themeConfig.badges.supreme.color,
				bgColor: themeConfig.badges.supreme.bgColor
			}
		},

		text: {
			primary: themeConfig.palette.primary,
			secondary: themeConfig.palette.secondary
		}
	},
	typography: {
		// h2: {
		//     fontSize: "1.5rem",
		// },
		fontFamily: [
			'Poppins',
			'Roboto',
			'"Helvetica Neue"',
			'Arial',
			'sans-serif'
		].join(','),
		navHeader: {
			color: themeConfig.navHeader.color,
			fontWeight: 600,
			fontSize: '1.5rem',
			lineHeight: '1.95rem'
		},
		navLinks: {
			color: themeConfig.navLinks.color,
			fontWeight: 500,
			fontSize: '0.875rem',
			letterSpacing: '0.0125rem',
			lineHeight: '1.3125rem',
			fontFamily: [
				'Manrope',
				'Roboto',
				'"Helvetica Neue"',
				'Arial',
				'sans-serif'
			].join(',')
		},
		logoText: {
			color: themeConfig.logoText.color,
			fontWeight: 600,
			fontSize: '1.13235rem',
			lineHeight: '1.72056rem'
		}
	},
	components: {
		MuiTypography: {
			defaultProps: {
				variantMapping: {
					// Map the new variant to render a <h1> by default
					navHeader: 'h1',
					logoText: 'h2'
				}
			}
		}
	}
})

console.log(theme)

theme = responsiveFontSizes(theme)

export default theme
