import React from 'react'
import ReactDOM from 'react-dom/client'
import './app/styles/normalize.css'
import './app/styles/global.scss'
import { ThemeProvider } from '@mui/material'
import theme from './app/providers/theme/theme.ts'
import { RouterProvider } from 'react-router-dom'
import { router } from './app/providers/router/Router.tsx'
import StoreProvider from './app/providers/store/index.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<StoreProvider>
				<RouterProvider router={router}></RouterProvider>
			</StoreProvider>
		</ThemeProvider>
	</React.StrictMode>
)
