import { List, ListItem, Box } from '@mui/material'
import Restaurant from '../../entities/restaurant'
import { restaurantAPI } from '../../entities/restaurant/model/services/restaurant.service'
import { IRestaurant } from '../../entities/restaurant/types/types'
import { FC, useEffect } from 'react'
import { useAppSelector } from '../../shared/lib/hooks/redux'

interface RestaurantListProps {
	nearby?: boolean
}

const RestaurantList: FC<RestaurantListProps> = ({ nearby }) => {
	const { data, isLoading, isSuccess, error } =
		restaurantAPI.useFetchAllRestaurantsQuery('')

	const { bookmarkedRestaurants } = useAppSelector(
		state => state.restaurantReducer
	)

	useEffect(() => {}, [])

	//! filtering items by bookmarks

	let allItems: IRestaurant[] = []
	let unFavoriteItems: IRestaurant[] = []
	let filteredItems: IRestaurant[] = []

	if (isSuccess) {
		allItems = [...data, ...bookmarkedRestaurants]
		unFavoriteItems = allItems.filter(
			item => !bookmarkedRestaurants.includes(item)
		)
		filteredItems = [...bookmarkedRestaurants, ...unFavoriteItems]
	}

	return (
		<Box
			component={List}
			display='flex'
			justifyContent={{ xs: 'center', md: 'space-between' }}
			alignItems='stretch'
			flexWrap={'wrap'}
			rowGap={{ xs: 2, md: 4, lg: 7 }}
			columnGap={{ xs: 3, md: 2 }}
			sx={{
				'& li': {
					flexBasis: { xs: '100%', sm: '40%', md: '30%' },
					maxWidth: '300px',
					width: 'max-content',
					borderRadius: 4,
					padding: 0,
					border: '1px solid #F4F4F6',
					boxShadow: '3px 40px 20px 0px rgba(229, 229, 229, 0.70)'
				}
			}}
		>
			{/* //! TODO: make service/slice that grabs 3 items from db and map it here */}
			{isLoading && <h1>Loading...</h1>}
			{error && <h1>Error has occurred</h1>}

			{nearby
				? data?.slice(0, 3).map((restaurant: IRestaurant) => {
						return (
							<ListItem key={restaurant.id}>
								<Restaurant nearby restaurant={restaurant} />
							</ListItem>
						)
					})
				: filteredItems?.map((restaurant: IRestaurant) => {
						return (
							<ListItem key={restaurant.id}>
								<Restaurant nearby restaurant={restaurant} />
							</ListItem>
						)
					})}
		</Box>
	)
}

export default RestaurantList
