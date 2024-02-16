import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded'
import { IconButton } from '@mui/material'

const WalletSettings = () => {
	return (
		<IconButton size={'small'}>
			<MoreHorizRoundedIcon
				fontSize={'large'}
				sx={{ color: '#CBD5E0' }}
			/>
		</IconButton>
	)
}

export default WalletSettings
