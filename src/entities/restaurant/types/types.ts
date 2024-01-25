export interface IRestaurant {
	id: string
	name: string
	type: string
	deliveryTime: number
	rate: number
	imageWide: string
	imageThin: string
	visits: number
}

export interface RestaurantProps {
	nearby?: boolean
	restaurant: IRestaurant
}
