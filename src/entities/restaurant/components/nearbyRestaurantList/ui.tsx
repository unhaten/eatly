import { List, ListItem, Box } from '@mui/material'
import { restaurantAPI } from '../../model/services/restaurant.service'
import { IRestaurant } from '../../types/types'
import Restaurant from '../..'

const NearbyRestaurantList = () => {
	const { data, isLoading } = restaurantAPI.useFetchAllRestaurantsQuery('')
	return (
		<Box
			component={List}
			display='flex'
			justifyContent={'space-between'}
			alignItems='center'
			flexWrap={'wrap'}
			gap={2}
			sx={{
				'& li': {
					flexBasis: '30%',
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
			{data &&
				data.map((restaurant: IRestaurant) => {
					return (
						<ListItem key={restaurant.id}>
							<Restaurant nearby restaurant={restaurant} />
						</ListItem>
					)
				})}
		</Box>
	)
}

export default NearbyRestaurantList
