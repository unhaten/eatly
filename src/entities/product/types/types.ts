export interface IProduct {
	id: string
	name: string
	price: number
	type: string
	deliveryTime: number
	rate: number
	imageWide: string
	imageThin: string
	visits: number
}

export interface ProductProps {
	popular?: boolean
	product: IProduct
}
