import {
	Box,
	Divider,
	Drawer,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	// ListItemText,
	Typography,
	useMediaQuery,
	useTheme
} from '@mui/material'
import { FunctionComponent } from 'react'
import { NavLink, Link } from 'react-router-dom'

import { drawerWidth } from '../../shared/consts/drawerWidth'
import { UpperLinks } from '../../shared/consts/links/UpperLinks'
import { LowerLinks } from '../../shared/consts/links/LowerLinks'
import SidebarEventCount from '../../features/sidebarEventCount'

interface SidebarProps {
	mobileOpen: boolean
	handleDrawerToggle(): void
}

const Sidebar: FunctionComponent<SidebarProps> = ({
	mobileOpen,
	handleDrawerToggle
}) => {
	const theme = useTheme()

	const isMd = useMediaQuery(theme.breakpoints.up('md'), {
		defaultMatches: true
	})

	const drawer = (
		<Box
			padding={3}
			height={'100%'}
			borderRight='1px solid transparent'
			borderColor={'#E0E0E0'}
		>
			<Box
				component={Link}
				to='/'
				display='flex'
				alignItems='center'
				gap={2}
				width='fit-content'
			>
				<img src='/img/logo.svg' alt='' />
				<Typography variant='logoText'>eatly</Typography>
			</Box>
			<Box component={Divider} marginTop={2} />
			<Box
				display='flex'
				flexDirection='column'
				justifyContent={'space-between'}
				height={'calc(100% - 70px)'}
			>
				<Box component={List} marginTop={{ xs: 0, md: 4 }}>
					{UpperLinks.map((item, index) => {
						return (
							<NavLink key={index} to={item.path}>
								<ListItem disablePadding>
									<ListItemButton>
										<ListItemIcon>{item.icon}</ListItemIcon>
										{/* <ListItemText primary={text} /> */}
										<Typography variant='navLinks'>
											{item.name}
										</Typography>
                                        <SidebarEventCount />
									</ListItemButton>
								</ListItem>
							</NavLink>
						)
					})}
				</Box>
				<Box>
					<Box component={List} marginTop={{ xs: 0, md: 4 }}>
						{LowerLinks.map((item, index) => {
							return (
								<NavLink key={index} to={item.path}>
									<ListItem disablePadding>
										<ListItemButton>
											<ListItemIcon>
												{item.icon}
											</ListItemIcon>
											{/* <ListItemText primary={text} /> */}
											<Typography variant='navLinks'>
												{item.name}
											</Typography>
										</ListItemButton>
									</ListItem>
								</NavLink>
							)
						})}
					</Box>
				</Box>
			</Box>
		</Box>
	)

	return (
		<Box
			component='aside'
			sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}
			aria-label='mailbox folders'
		>
			{/* The implementation can be swapped with js to avoid SEO duplication of links. */}
			{!isMd ? (
				<Drawer
					// container={container}
					variant='temporary'
					open={mobileOpen}
					onClose={handleDrawerToggle}
					ModalProps={{
						keepMounted: true // Better open performance on mobile.
					}}
					sx={{
						'& .MuiDrawer-paper': {
							width: drawerWidth
						}
					}}
				>
					{drawer}
				</Drawer>
			) : (
				<Drawer
					variant='permanent'
					sx={{
						'& .MuiDrawer-paper': {
							width: drawerWidth,
							borderRight: 'none'
						}
					}}
					open
				>
					{drawer}
				</Drawer>
			)}
		</Box>
	)
}

export default Sidebar
