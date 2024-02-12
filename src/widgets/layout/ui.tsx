import { FunctionComponent, ReactNode, useState } from 'react'
import Header from '../header'
import Footer from '../footer'
import { Box, CssBaseline } from '@mui/material'
import Sidebar from '../sidebar'
import Container from '../../shared/ui/Container'
import s from './styles.module.scss'

interface LayoutProps {
	children: ReactNode
}

const Layout: FunctionComponent<LayoutProps> = ({ children }) => {
	const [mobileOpen, setMobileOpen] = useState(false)

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen)
	}

	return (
		<div className={s.container}>
			<CssBaseline />
			<Header handleDrawerToggle={handleDrawerToggle} />
			<Box component='main' display='flex'>
				<Sidebar
					mobileOpen={mobileOpen}
					handleDrawerToggle={handleDrawerToggle}
				/>
				<Box marginTop={'100px'} width='100%'>
					<Container>{children}</Container>
				</Box>
			</Box>
			<Footer />
		</div>
	)
}

export default Layout
