export interface IProduct {
	id: string
	name: string
	price: number
	type: string
	deliveryTime: number
	rate: number
	image: string
	imageThin: string
	visits: number
	quantity: number
}

export interface ProductProps {
	popular?: boolean
	product: IProduct
}
