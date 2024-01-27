import { AppBar, Toolbar, IconButton, Typography, Box } from '@mui/material'
import { FunctionComponent } from 'react'
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded'
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded'
import { drawerWidth } from '../../shared/consts/drawerWidth'

interface HeaderProps {
	handleDrawerToggle(): void
}

const Header: FunctionComponent<HeaderProps> = ({ handleDrawerToggle }) => {
	return (
		<AppBar
			position='fixed'
			sx={{
				width: { md: `calc(100% - ${drawerWidth}px)` },
				ml: { md: `${drawerWidth}px` },
				p: '15px 0',
				backgroundColor: '#fff',
				color: '#111',
				boxShadow: 'none'
			}}
		>
			<Box
				component={Toolbar}
				display='flex'
				justifyContent={'space-between'}
				alignItems='center'
				paddingX={{ xs: 2, sm: 4, md: 4, lg: 6 }}
			>
				<Box display='flex' alignItems='center'>
					<Typography variant='navHeader'>Dashboard</Typography>
				</Box>
				<Box
					display='flex'
					alignItems='center'
					gap={{ xs: 1, sm: 2, md: 3 }}
				>
					{/* //!  TODO: probably this is going to be at shared */}
					<p>
						<SearchRoundedIcon />
					</p>
					<p>
						<NotificationsRoundedIcon />
					</p>
					<p>
						<AccountCircleRoundedIcon />
					</p>
					<IconButton
						color='inherit'
						aria-label='open drawer'
						edge='start'
						onClick={handleDrawerToggle}
						sx={{ ml: 2, display: { md: 'none' } }}
					>
						{/* <MenuIcon /> */}
						<MenuRoundedIcon />
					</IconButton>
				</Box>
			</Box>
		</AppBar>
	)
}

export default Header
