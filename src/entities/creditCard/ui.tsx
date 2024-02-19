import CardIcon from '../../shared/ui/icons/CardIcon'
import s from './style.module.scss'
import { Box, Typography } from '@mui/material'
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded'
import { number } from 'card-validator'

const CreditCard = ({ cardNumber = '57385967723875' }) => {
	console.log(number(cardNumber))

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
				<Box className={s.bottom} sx={{ color: '#fff' }} p={2.5} pb={4}>
					<Typography variant='body1' fontWeight={600}>
						{cardNumber}
					</Typography>
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
