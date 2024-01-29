import { IconButton } from '@mui/material'
import BookmarkBorderRoundedIcon from '@mui/icons-material/BookmarkBorderRounded'
import BookmarkRoundedIcon from '@mui/icons-material/BookmarkRounded'
import { IRestaurant } from '../../entities/restaurant/types/types'
import { FC } from 'react'
import { useAppDispatch, useAppSelector } from '../../shared/lib/hooks/redux'
import { restaurantSlice } from '../../entities/restaurant/model/reducers/restaurant.slice'

interface IToggleBookmarks {
	restaurant?: boolean
	item: IRestaurant
}

const ToggleBookmarks: FC<IToggleBookmarks> = ({ restaurant, item }) => {
	const dispatch = useAppDispatch()
	const { toggleBookmarks } = restaurantSlice.actions
	const { bookmarkedRestaurants } = useAppSelector(
		state => state.restaurantReducer
	)

	const handleClick = (restaurant: IRestaurant) => {
		dispatch(toggleBookmarks(restaurant))
	}

	const isIncluded = bookmarkedRestaurants.includes(item)

	return (
		<>
			<IconButton
				onClick={() => handleClick(item)}
				size={'large'}
				sx={{
					':hover': {
						backgroundColor: isIncluded && 'accent.dark'
					}
				}}
				color={isIncluded ? 'accent' : ''}
			>
				{restaurant && !bookmarkedRestaurants.includes(item) ? (
					<BookmarkBorderRoundedIcon
						sx={{
							color: 'accent.main'
						}}
					/>
				) : (
					<BookmarkRoundedIcon
						// fontSize={'large'}
						sx={{
							color: 'accent.main'
							// fontSize: { xs: 'large', md: 'medium' }
						}}
					/>
				)}
			</IconButton>
		</>
	)
}

export default ToggleBookmarks
