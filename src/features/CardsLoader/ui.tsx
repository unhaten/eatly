import { FC } from 'react'
import RestaurantSkeleton from '../../shared/ui/RestaurantSkeleton'
import ProductSkeleton from '../../shared/ui/ProductSkeleton/ui'

interface CardsLoaderProps {
	nearby?: boolean
	restaurants?: boolean
	products?: boolean
	popular?: boolean
}

const CardsLoader: FC<CardsLoaderProps> = ({
	nearby,
	restaurants,
	products,
	popular
}) => {
	return (
		<>
			{restaurants &&
				(nearby
					? [1, 2, 3].map(index => <RestaurantSkeleton key={index} />)
					: [1, 2, 3, 4, 5, 6, 7, 8, 9].map(index => (
							<RestaurantSkeleton key={index} />
						)))}
			{products &&
				(popular
					? [1, 2, 3, 4, 5].map(index => (
							<ProductSkeleton key={index} />
						))
					: [1, 2, 3, 4, 5, 6, 7, 8, 9].map(index => (
							<ProductSkeleton key={index} />
						)))}
		</>
	)
}

export default CardsLoader
