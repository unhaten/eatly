import MoveDownRoundedIcon from '@mui/icons-material/MoveDownRounded'
import HomeIcon from '../../ui/icons/HomeIcon/ui'
import OrdersIcon from '../../ui/icons/OrdersIcon'
import MessagesIcon from '../../ui/icons/MessagesIcon'
import WalletsIcon from '../../ui/icons/WalletsIcon/ui'

export const UpperLinks = [
	{
		name: 'Dashboard',
		path: '/',
		icon: <HomeIcon />
	},
	{
		name: 'Orders',
		path: '/orders',
		icon: <OrdersIcon />
	},
	{
		name: 'Messages',
		path: '/messages',
		icon: <MessagesIcon />
	},
	{
		name: 'My Wallets',
		path: '/wallets',
		icon: <WalletsIcon />
	},
	{
		name: 'Activity',
		path: '/activity',
		icon: <MoveDownRoundedIcon />
	}
]
