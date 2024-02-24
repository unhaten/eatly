import { Typography } from '@mui/material'
import { FC } from 'react'
import { number } from 'card-validator'

interface ValidateCardNumberProps {
	cardNumber: number
}

const ValidateCardNumber: FC<ValidateCardNumberProps> = ({ cardNumber }) => {
	console.log(number(cardNumber))

	const formattedCardNumber = cardNumber
		.toString()
		.split('')
		.reduce((seed, next, index) => {
			if (index !== 0 && !(index % 4)) seed += '&emsp;'
			return seed + next
		}, '')

	return (
		<>
			<Typography variant='body1' fontWeight={600}>
				{formattedCardNumber}
			</Typography>
		</>
	)
}

export default ValidateCardNumber
