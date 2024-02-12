import Restaurant from '../../entities/restaurant'
import { restaurantAPI } from '../../entities/restaurant/model/services/restaurant.service'

const RestaurantsPage = () => {
	const { data } = restaurantAPI.useFetchAllRestaurantsQuery('')

	return (
		<section>
			{data?.map(restaurant => <Restaurant restaurant={restaurant} />)}
		</section>
	)
}

export default RestaurantsPage
