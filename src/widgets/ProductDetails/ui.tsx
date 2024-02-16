import { Box, Typography } from '@mui/material'
import { IProduct } from '../../entities/product/types/types'
import { FC } from 'react'
import ExtraInfo from '../../shared/ui/CardInfo/components/ExtraInfo/ui'
import Badge from '../../shared/ui/CardInfo/components/Badge'
import s from './style.module.scss'
import AddToCart from '../../features/AddToCart'
import ProductHeader from '../../shared/ui/ProductHeader'
import ProductWeight from '../../shared/ui/ProductWeight'

interface ProductDetailsProps {
	product: IProduct
}

const ProductDetails: FC<ProductDetailsProps> = ({ product }) => {
	return (
		<Box mt={3} display='flex' justifyContent={'space-around'} gap={2}>
			<Box
				display='flex'
				flexDirection='column'
				justifyContent={{ xs: '', md: 'space-between' }}
				flexBasis={'50%'}
			>
				<Box>
					<ProductHeader
						name={product.name}
						preview={product.preview}
					/>
					<Box display='flex' alignItems='center' gap={1} mt={2}>
						<ExtraInfo
							deliveryTime={product.deliveryTime}
							rate={product.rate}
						/>
						<ProductWeight weight={product.weight} />
					</Box>
					<Box mt={9} className={s.badgeContainer}>
						<Badge type={product.type} />
					</Box>
					<Typography variant='h6' fontWeight={500} mt={0.5}>
						Description
					</Typography>
					<Typography variant='body1' color='caption.main' mt={1}>
						{product.description}
					</Typography>
				</Box>
				<Box mt={4}>
					<AddToCart alternative product={product} />
				</Box>
			</Box>
			<Box flexBasis={'45%'}>
				<img src={product.image} alt={product.name} className={s.img} />
			</Box>
		</Box>
	)
}

export default ProductDetails
