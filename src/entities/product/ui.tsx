import { Box } from '@mui/material'
import { ProductProps } from './types/types'
import { FC } from 'react'
import CardInfo from '../../shared/ui/CardInfo'

const Product: FC<ProductProps> = ({ popular, product }) => {
	return (
		<Box
			width={'100%'}
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
			<img src={popular ? product.image : ''} alt='productImage' />
			<Box
				sx={{
					paddingX: 3,
					paddingY: 1
				}}
			>
				<CardInfo item={product} />
			</Box>
		</Box>
	)
}

export default Product
