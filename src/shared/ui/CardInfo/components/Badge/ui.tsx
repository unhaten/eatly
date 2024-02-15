import { Typography, Box } from '@mui/material'
import s from './style.module.scss'
import { FC } from 'react'

interface BadgeProps {
	type: string
}

const Badge: FC<BadgeProps> = ({ type }) => {
	return (
		<Box className={s.badge}>
			<Typography
				variant='caption'
				color={
					type === 'healthy'
						? 'badges.healthy.color'
						: type === 'trending'
							? 'badges.trending.color'
							: type === 'supreme'
								? 'badges.supreme.color'
								: 'primary.main'
				}
				bgcolor={
					type === 'healthy'
						? 'badges.healthy.bgColor'
						: type === 'trending'
							? 'badges.trending.bgColor'
							: type === 'supreme'
								? 'badges.supreme.bgColor'
								: 'primary.main'
				}
				className={s.type}
			>
				{type}
			</Typography>
		</Box>
	)
}

export default Badge
