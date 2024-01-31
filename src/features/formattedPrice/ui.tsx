import { Typography } from '@mui/material'
import s from './style.module.scss'
import { IProduct } from '../../entities/product/types/types'
import { FC } from 'react'

interface IFormattedPrice {
	price: IProduct['price']
	inCard?: boolean
	inOrder?: boolean
}

const FormattedPrice: FC<IFormattedPrice> = ({ price, inCard, inOrder }) => {
	const formatter = new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD'

		//minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
		//maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
	})

	const formattedCurrency = formatter.format(price).split('.')
	return (
		<>
			{inCard && (
				<Typography
					variant='h6'
					fontWeight={700}
					className={s.bigPrice}
				>
					{formattedCurrency[0]}
					<span className={s.smallPrice}>
						.{formattedCurrency[1]}
					</span>
				</Typography>
			)}
			{inOrder && (
				<Typography variant='body1' align='center' fontWeight={600}>
					{formattedCurrency[0]}.{formattedCurrency[1]}
				</Typography>
			)}
		</>
	)
}

export default FormattedPrice
