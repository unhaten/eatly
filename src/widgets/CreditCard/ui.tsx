import CardIcon from '../../shared/ui/icons/CardIcon'
import s from './style.module.scss'
import { Box, Typography } from '@mui/material'
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded'
import ValidateCardNumber from '../../features/ValidateCardNumber'

const CreditCard = ({ cardNumber = 5425233430109903 }) => {
	return (
		<>
			<Box className={s.card}>
				<Box
					className={s.top}
					bgcolor={'accent.main'}
					display='flex'
					justifyContent='space-between'
					alignItems='center'
					py={1}
					px={3}
				>
					<CardIcon />
					<MoreHorizRoundedIcon
						sx={{ color: 'white' }}
						fontSize='large'
					/>
				</Box>
				<Box className={s.bottom} sx={{ color: '#fff' }} p={3} pb={4}>
					<ValidateCardNumber cardNumber={cardNumber} />
					<Box mt={4}>
						<Typography fontWeight={500} variant='caption'>
							Card Holder
						</Typography>
						<Typography fontWeight={600} variant='body1'>
							John Doe
						</Typography>
					</Box>
				</Box>
			</Box>
		</>
	)
}

export default CreditCard
