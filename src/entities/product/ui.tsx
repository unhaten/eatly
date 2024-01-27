import { Box } from '@mui/material'
import { ProductProps } from './types/types'
import { FC } from 'react'
import CardInfo from '../../shared/ui/CardInfo'
import AddFavorites from '../../features/addFavorites'

const Product: FC<ProductProps> = ({ popular, product }) => {
	return (
		<Box
			width={'100%'}
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
			</Box>
			{popular && <AddFavorites product />}
		</Box>
	)
}

export default Product
