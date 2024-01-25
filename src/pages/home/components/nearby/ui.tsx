import { Typography, Box } from '@mui/material'
import NearbyRestaurantList from '../../../../entities/restaurant/components/nearbyRestaurantList'

const Nearby = () => {
	return (
		<section>
			<Box
				mt={4}
				mb={3}
				display='flex'
				justifyContent='space-between'
				alignItems='center'
			>
				<Typography variant='h5' component='h2' fontWeight={600}>
					Nearby Restaurants
				</Typography>
				<Typography
					color='caption.main'
					fontWeight={500}
					sx={{ cursor: 'pointer' }}
				>
					View all
				</Typography>
			</Box>
			<NearbyRestaurantList />
		</section>
	)
}

export default Nearby
