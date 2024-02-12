import { Box, Card, CardMedia } from '@mui/material'
import s from './style.module.scss'
import { FC } from 'react'
import { RestaurantProps } from './types/types'
import CardInfo from '../../shared/ui/CardInfo'
import ToggleBookmarks from '../../features/toggleBookmarks'

const Restaurant: FC<RestaurantProps> = ({ nearby, restaurant }) => {
	return (
		<Box
			component={Card}
			width={'100%'}
			borderRadius={3}
			sx={{
				'& img': {
					display: 'block',
					margin: '0 auto',
					width: '100%',
					maxHeight: '200px',
					borderTopLeftRadius: 20,
					borderTopRightRadius: 20
				}
			}}
		>
			<CardMedia
				component='img'
				image={nearby ? restaurant.image : ''}
				title={restaurant.name}
				// loading='lazy'
			/>
			<Box
				className={s.content}
				display='flex'
				justifyContent='space-between'
				alignItems={'end'}
				sx={{
					paddingX: 3,
					paddingY: 1
				}}
			>
				<Box>
					<CardInfo item={restaurant} />
				</Box>
				{nearby && <ToggleBookmarks item={restaurant} restaurant />}
			</Box>
		</Box>
	)
}

export default Restaurant
