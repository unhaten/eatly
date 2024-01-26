export interface IInfo {
	id: string
	name: string
	type: string
	deliveryTime: number
	rate: number
	image: string
	imageThin: string
	visits: number
}

export interface InfoProps {
	item: IInfo
}
