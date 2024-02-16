import { Typography, Box } from '@mui/material'
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded'
import s from './style.module.scss'
import { FC } from 'react'

interface ExtraInfoProps {
	deliveryTime: number
	rate: number
	inCard?: boolean
}

const ExtraInfo: FC<ExtraInfoProps> = ({ deliveryTime, rate, inCard }) => {
	return (
		<>
			<Typography
				variant={inCard ? 'caption' : 'body1'}
				mt={'2px'}
				className={s.time}
				fontWeight={inCard ? 400 : 500}
			>
				{deliveryTime}min •
			</Typography>
			<Box
				display='flex'
				alignItems={inCard ? 'end' : 'center'}
				gap={inCard ? 0 : 0.5}
			>
				<StarRateRoundedIcon
					fontSize={inCard ? 'small' : 'medium'}
					className={s.star}
					sx={{
						color: 'accent.main',
						marginBottom: '2px'
					}}
				/>
				<Typography
					variant={inCard ? 'caption' : 'body1'}
					className={s.rate}
					fontWeight={inCard ? 400 : 500}
				>
					{rate}
				</Typography>
			</Box>
		</>
	)
}

export default ExtraInfo
