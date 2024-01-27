import { Box, Typography } from '@mui/material'
import s from './style.module.scss'
import { FC } from 'react'
import { InfoProps } from './types/types'
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded'

const CardInfo: FC<InfoProps> = ({ item }) => {
	return (
		<>
			<Box className={s.badge}>
				<Typography
					variant='caption'
					color={
						item.type === 'healthy'
							? 'badges.healthy.color'
							: item.type === 'trending'
								? 'badges.trending.color'
								: item.type === 'supreme'
									? 'badges.supreme.color'
									: 'primary.main'
					}
					bgcolor={
						item.type === 'healthy'
							? 'badges.healthy.bgColor'
							: item.type === 'trending'
								? 'badges.trending.bgColor'
								: item.type === 'supreme'
									? 'badges.supreme.bgColor'
									: 'primary.main'
					}
					className={s.type}
				>
					{item.type}
				</Typography>
			</Box>
			<Typography
				fontWeight={600}
				variant='body1'
				className={s.name}
				mt={0.5}
			>
				{item.name}
			</Typography>
			<Box className={s.info}>
				<Typography variant='caption' mt={'2px'} className={s.time}>
					{item.deliveryTime}min •
				</Typography>
				<Box display='flex' alignItems='end'>
					<StarRateRoundedIcon
						fontSize='small'
						className={s.star}
						sx={{
							color: 'accent.main',
							marginBottom: '2px'
						}}
					/>
					<Typography variant='caption' className={s.rate}>
						{item.rate}
					</Typography>
				</Box>
			</Box>
		</>
	)
}

export default CardInfo
