import React from 'react'
import ReactDOM from 'react-dom/client'
import './app/styles/normalize.css'
import './app/styles/global.scss'
import { Provider } from 'react-redux'
import { ThemeProvider } from '@mui/material'
import theme from './app/providers/theme/theme.ts'
import Router from './app/providers/router/Router.tsx'
import { setupStore } from './app/providers/store/store.ts'

const store = setupStore()

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<Provider store={store}>
				<Router></Router>
			</Provider>
		</ThemeProvider>
	</React.StrictMode>
)
