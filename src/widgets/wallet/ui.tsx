import { Typography, Box } from '@mui/material'
import s from './Wallet.module.scss'
import CreditCard from '../../entities/CreditCard'
import CreditCardOptions from '../CreditCardOptions'

const Wallet = () => {
	return (
		<section>
			<Box
				paddingX={3}
				paddingY={4}
				className={s.wallet}
				sx={{
					height: 500
				}}
			>
				<Typography fontWeight={600} variant='h5'>
					Wallet
				</Typography>
				<Box marginTop={3}>
					<CreditCard />
					<CreditCardOptions />
				</Box>
			</Box>
		</section>
	)
}

export default Wallet
