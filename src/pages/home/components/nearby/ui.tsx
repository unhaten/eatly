import { Typography, Box, Button } from '@mui/material'
import NearbyRestaurantList from '../../../../entities/restaurant/components/nearbyRestaurantList'
import { Link } from 'react-router-dom'

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
				<Link to='/restaurants'>
					<Box component={Button} color='caption.main'>
						<span>View all</span>
					</Box>
				</Link>
			</Box>
			<NearbyRestaurantList />
		</section>
	)
}

export default Nearby
