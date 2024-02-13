import {
	Box,
	Card,
	CardActionArea,
	CardContent,
	CardMedia
} from '@mui/material'
import s from './style.module.scss'
import { FC } from 'react'
import { RestaurantProps } from './types/types'
import CardInfo from '../../shared/ui/CardInfo'
import ToggleBookmarks from '../../features/toggleBookmarks'
import { Link } from 'react-router-dom'

const Restaurant: FC<RestaurantProps> = ({ nearby, restaurant }) => {
	const handleClick = event => {
		if (event.target.tagName.toLowerCase() === 'svg') {
			event.preventDefault()
		} else if (event.target.tagName.toLowerCase() === 'path') {
			event.preventDefault()
		}
	}

	return (
		<Link
			to={`/restaurants/${restaurant.id}`}
			className={s.link}
			onClick={handleClick}
		>
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
				<CardActionArea component='div'>
					<CardMedia
						component='img'
						image={nearby ? restaurant.image : ''}
						title={restaurant.name}
						// loading='lazy'
					/>
					<Box
						component={CardContent}
						className={s.content}
						display='flex'
						justifyContent='space-between'
						alignItems={'end'}
						sx={{
							paddingX: 3,
							paddingY: '12px !important'
						}}
					>
						<Box>
							<CardInfo item={restaurant} />
						</Box>
						{nearby && (
							<ToggleBookmarks item={restaurant} restaurant />
						)}
					</Box>
				</CardActionArea>
			</Box>
		</Link>
	)
}

export default Restaurant
