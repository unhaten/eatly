export interface IInfo {
	id: string
	name: string
	type: string
	deliveryTime: number
	rate: number
	imageWide: string
	imageThin: string
	visits: number
}

export interface InfoProps {
	item: IInfo
}
