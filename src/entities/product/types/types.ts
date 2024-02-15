export interface IProduct {
	id: string
	name: string
	description: string
	preview: string
	price: number
	type: string
	deliveryTime: number
	weight: number
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
