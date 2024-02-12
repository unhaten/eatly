import { List, ListItem, Box } from '@mui/material'
import Restaurant from '../../entities/restaurant'
import { restaurantAPI } from '../../entities/restaurant/model/services/restaurant.service'
import { IRestaurant } from '../../entities/restaurant/types/types'
import { FC } from 'react'

interface RestaurantListProps {
	nearby?: boolean
}

const RestaurantList: FC<RestaurantListProps> = ({ nearby }) => {
	const { data, isLoading, error } =
		restaurantAPI.useFetchAllRestaurantsQuery('')
	return (
		<Box
			component={List}
			display='flex'
			justifyContent={{ xs: 'center', md: 'space-between' }}
			alignItems='center'
			flexWrap={'wrap'}
			gap={{ xs: 3, md: 2 }}
			sx={{
				'& li': {
					flexBasis: { xs: '100%', sm: '40%', md: '30%' },
					maxWidth: '300px',
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
				: data?.map((restaurant: IRestaurant) => {
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
