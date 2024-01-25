import { Typography, Box } from '@mui/material'
import s from './Wallet.module.scss'
import CreditCard from '../../entities/creditCard'
import CreditCardOptions from '../creditCardOptions'

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
				<Box
					component={Typography}
					fontWeight={600}
					color='test'
					variant='h5'
				>
					Wallet
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
