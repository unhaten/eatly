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
		<>
			<ListItem className={s.item} key={product.id}>
				<Box
					display='flex'
					justifyContent={'space-between'}
					alignItems='center'
					width={1}
				>
					<Box
						className={s.left}
						display='flex'
						alignItems='center'
						gap={2}
					>
						<img
							src={product.image}
							width={'100px'}
							height={'100px'}
							alt=''
						/>
						<Box display='flex' flexDirection='column'>
							<Typography fontWeight={600}>
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
		</>
	)
}

export default OrderListProduct
