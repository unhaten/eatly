import { Box } from '@mui/material'
import { ProductProps } from './types/types'
import { FC } from 'react'
import CardInfo from '../../shared/ui/CardInfo'
import ToggleFavorites from '../../features/toggleFavorites'
import AddToCart from '../../features/addToCart'
import FormattedPrice from '../../features/formattedPrice'

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
				// loading='lazy'
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
					<FormattedPrice price={product.price} inCard />
					<AddToCart product={product} />
				</Box>
			</Box>
			{popular && <ToggleFavorites item={product} product />}
		</Box>
	)
}

export default Product
