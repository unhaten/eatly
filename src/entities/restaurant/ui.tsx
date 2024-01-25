import { Typography, Box } from '@mui/material'
import s from './style.module.scss'
import { FC } from 'react'
import { RestaurantProps } from './types/types'
import CardInfo from '../../shared/ui/CardInfo'

const Restaurant: FC<RestaurantProps> = ({ nearby, restaurant }) => {
	return (
		<Box
			width={'100%'}
			// borderRadius={5}
			sx={{
				'& img': {
					display: 'block',
					margin: '0 auto',
					width: '100%',
					borderTopLeftRadius: 20,
					borderTopRightRadius: 20
				}
			}}
		>
			<img
				src={nearby ? '/img/placeholderNearby.jpg' : ''}
				alt='productImage'
			/>
			<CardInfo item={restaurant} />
			{nearby && <Box>fav</Box>}
		</Box>
	)
}

export default Restaurant
