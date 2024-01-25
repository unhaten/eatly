import { Box, Typography } from '@mui/material'
import s from './style.module.scss'
import { FC } from 'react'
import { InfoProps } from './types/types'

const CardInfo: FC<InfoProps> = ({ item }) => {
	return (
		<>
			<Box
				className={s.content}
				sx={{
					paddingX: 3,
					paddingY: 1
				}}
			>
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
				<Typography fontWeight={600} variant='body1' className={s.name}>
					{item.name}
				</Typography>
				<Box className={s.info}>
					<Typography className={s.time}>
						{item.deliveryTime}min
					</Typography>
					<Box className={s.dot} />
					<Box className={s.star} />
					<Typography className={s.rate}>{item.rate}</Typography>
				</Box>
			</Box>
		</>
	)
}

export default CardInfo
