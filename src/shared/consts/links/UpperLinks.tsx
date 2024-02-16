import HomeRoundedIcon from '@mui/icons-material/HomeRounded'
import ChatRoundedIcon from '@mui/icons-material/ChatRounded'
import WalletRoundedIcon from '@mui/icons-material/WalletRounded'
import MoveDownRoundedIcon from '@mui/icons-material/MoveDownRounded'
import LocalAtmRoundedIcon from '@mui/icons-material/LocalAtmRounded';

export const UpperLinks = [
	{
		name: 'Dashboard',
		path: '/',
		icon: <HomeRoundedIcon />
	},
	{
		name: 'Orders',
		path: '/orders',
		icon: <LocalAtmRoundedIcon />
	},
	{
		name: 'Messages',
		path: '/messages',
		icon: <ChatRoundedIcon />
	},
	{
		name: 'My Wallets',
		path: '/wallets',
		icon: <WalletRoundedIcon />
	},
	{
		name: 'Activity',
		path: '/activity',
		icon: <MoveDownRoundedIcon />
	}
]
