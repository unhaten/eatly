import React from 'react'
import ReactDOM from 'react-dom/client'
import './app/styles/normalize.css'
import './app/styles/global.scss'
import { ThemeProvider } from '@mui/material'
import theme from './app/providers/theme/theme.ts'
import { BrowserRouter } from 'react-router-dom'
import StoreProvider from './app/providers/store/index.ts'
import App from './app/App.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<BrowserRouter>
				<StoreProvider>
					<App />
				</StoreProvider>
			</BrowserRouter>
		</ThemeProvider>
	</React.StrictMode>
)
