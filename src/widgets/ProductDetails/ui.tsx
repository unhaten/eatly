import { Box, Typography } from '@mui/material'
import { IProduct } from '../../entities/product/types/types'
import { FC } from 'react'
import ExtraInfo from '../../shared/ui/CardInfo/components/ExtraInfo/ui'
import Badge from '../../shared/ui/CardInfo/components/Badge'
import WhatshotRoundedIcon from '@mui/icons-material/WhatshotRounded'
import s from './style.module.scss'

interface ProductDetailsProps {
	product: IProduct
}

const ProductDetails: FC<ProductDetailsProps> = ({ product }) => {
	return (
		<Box mt={3} display='flex' justifyContent={'space-around'}>
			<Box>
				<Typography variant='h3' component='h2' fontWeight={500}>
					{product.name}
				</Typography>
				<Typography
					variant='body1'
					color='caption.main'
					fontWeight={500}
				>
					{product.preview}
				</Typography>
				<Box display='flex' alignItems='center' gap={1} mt={2}>
					<ExtraInfo
						deliveryTime={product.deliveryTime}
						rate={product.rate}
					/>
					<Box display='flex' gap={0.5}>
						<WhatshotRoundedIcon sx={{ color: 'error.main' }} />
						<Typography
							variant='body1'
							color='caption.main'
							fontWeight={500}
						>
							{product.weight} Kcal
						</Typography>
					</Box>
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
			<Box>
				<img src={product.image} alt={product.name} className={s.img} />
			</Box>
		</Box>
	)
}

export default ProductDetails
