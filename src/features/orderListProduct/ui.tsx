import { FC } from 'react'
import { IProduct } from '../../entities/product/types/types'
import { ListItem, Typography, Box } from '@mui/material'
import s from './style.module.scss'
import FormattedPrice from '../formattedPrice'
import OrderProductCount from '../orderProductCount'
import RemoveFromCart from '../removeFromCart'

interface IOrderListProduct {
	product: IProduct
}

const OrderListProduct: FC<IOrderListProduct> = ({ product }) => {
	return (
		<ListItem
			className={s.item}
			sx={{
				position: 'relative'
			}}
		>
			<Box
				display='flex'
				justifyContent={{ xs: 'start', sm: 'space-between' }}
				alignItems='center'
				flexDirection={{ xs: 'column', sm: 'row' }}
				width={{ sm: 1 }}
			>
				<Box
					className={s.left}
					display={{ sm: 'flex' }}
					alignItems='center'
					gap={2}
				>
					<img src={product.image} alt='' className={s.image} />
					<Box
						display='flex'
						flexDirection='column'
						mt={{ xs: 2, sm: 0 }}
					>
						<Typography fontWeight={600} align='center'>
							{product.name}
						</Typography>
						<FormattedPrice price={product.price} inOrder />
					</Box>
				</Box>
				<Box className={s.right}>
					<OrderProductCount product={product} />
				</Box>
				<RemoveFromCart product={product} />
			</Box>
		</ListItem>
	)
}

export default OrderListProduct
