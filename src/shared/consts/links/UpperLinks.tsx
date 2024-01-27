import HomeRoundedIcon from '@mui/icons-material/HomeRounded'
import ReceiptRoundedIcon from '@mui/icons-material/ReceiptRounded'
import ChatRoundedIcon from '@mui/icons-material/ChatRounded'
import WalletRoundedIcon from '@mui/icons-material/WalletRounded'
import MoveDownRoundedIcon from '@mui/icons-material/MoveDownRounded'

export const UpperLinks = [
	{
		name: 'Dashboard',
		path: '/',
		icon: <HomeRoundedIcon />
	},
	{
		name: 'Orders',
		path: '/orders',
		icon: <ReceiptRoundedIcon />
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
