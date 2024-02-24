import { Typography, Box, IconButton } from '@mui/material'
import s from './Wallet.module.scss'
import CreditCard from '../CreditCard'
import CreditCardOptions from '../CreditCardOptions'
import WalletSettings from '../../features/WalletSettings'

const Wallet = () => {
	return (
		<section>
			<Box paddingX={3} paddingY={4} className={s.wallet}>
				<Box
					display='flex'
					justifyContent={'space-between'}
					alignItems='center'
				>
					<Typography fontWeight={600} variant='h5'>
						Wallet
					</Typography>
					<WalletSettings />
				</Box>
				<Box marginTop={3}>
					<CreditCard />
					<CreditCardOptions />
				</Box>
			</Box>
		</section>
	)
}

export default Wallet
