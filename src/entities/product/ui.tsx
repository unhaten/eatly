import { Box, Typography } from '@mui/material'
import { ProductProps } from './types/types'
import { FC } from 'react'
import CardInfo from '../../shared/ui/CardInfo'
import AddFavorites from '../../features/addFavorites'
import AddToCart from '../../features/addToCart'

const formatter = new Intl.NumberFormat('en-US', {
	style: 'currency',
	currency: 'USD'

	//minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
	//maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
})

const Product: FC<ProductProps> = ({ popular, product }) => {
	return (
		<Box
			width={'100%'}
			minWidth={'145px'}
			py={2}
			// borderRadius={5}
			sx={{
				'& img': {
					display: 'block',
					margin: '0 auto',
					width: popular ? '100px' : '100%',
					borderTopLeftRadius: 20,
					borderTopRightRadius: 20
				}
			}}
		>
			<img
				src={popular ? product.image : ''}
				alt='productImage'
				loading='lazy'
			/>
			<Box
				sx={{
					paddingX: 3,
					paddingY: 1
				}}
			>
				<CardInfo item={product} />
				<Box
					display={'flex'}
					alignItems='center'
					justifyContent={'space-between'}
				>
					<Typography>{formatter.format(product.price)}</Typography>
					<AddToCart />
				</Box>
			</Box>
			{popular && <AddFavorites product />}
		</Box>
	)
}

export default Product
