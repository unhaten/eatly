import {
	Box,
	Card,
	CardActionArea,
	CardActions,
	CardContent,
	CardMedia
} from '@mui/material'
import s from './style.module.scss'
import { FC } from 'react'
import { RestaurantProps } from './types/types'
import CardInfo from '../../shared/ui/CardInfo'
import ToggleBookmarks from '../../features/ToggleBookmarks'
import { Link } from 'react-router-dom'

const Restaurant: FC<RestaurantProps> = ({ nearby, restaurant }) => {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const handleClick = (event: any) => {
		if (event.target.tagName.toLowerCase() === 'svg') {
			event.preventDefault()
		} else if (event.target.tagName.toLowerCase() === 'path') {
			event.preventDefault()
		} else if (event.target.tagName.toLowerCase() === 'button') {
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
				height={1}
				borderRadius={3}
				className={s.cardContainer}
				sx={{
					transition: 'background .2s ease-in-out',

					'&:hover': {
						background: '#f7f7f7'
					},

					'& img': {
						display: 'block',
						margin: '0 auto',
						width: '100%',
						maxHeight: '200px',
						borderTopLeftRadius: 12,
						borderTopRightRadius: 12
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
					<CardInfo item={restaurant} />
					<CardActions>
						{nearby && (
							<ToggleBookmarks item={restaurant} restaurant />
						)}
					</CardActions>
				</Box>
			</Box>
		</Link>
	)
}

export default Restaurant
