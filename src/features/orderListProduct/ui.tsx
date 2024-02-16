import { FC } from 'react'
import { IProduct } from '../../entities/product/types/types'
import { ListItem, Typography, Box } from '@mui/material'
import s from './style.module.scss'
import FormattedPrice from '../FormattedPrice'
import OrderProductCount from '../OrderProductCount'
import RemoveFromCart from '../RemoveFromCart'
import { Link } from 'react-router-dom'

interface IOrderListProduct {
	product: IProduct
}

const OrderListProduct: FC<IOrderListProduct> = ({ product }) => {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const handleClick = (event: any) => {
		if (event.target.tagName.toLowerCase() === 'svg') {
			event.preventDefault()
		} else if (event.target.tagName.toLowerCase() === 'path') {
			event.preventDefault()
		} else if (event.target.tagName.toLowerCase() === 'button') {
			event.preventDefault()
		}
	}

	return (
		<ListItem
			className={s.item}
			sx={{
				position: 'relative',

				transition: 'background .2s ease-in-out',

				'&:hover': {
					background: '#f7f7f7'
				}
			}}
		>
			<Link
				to={`/products/${product.id}`}
				onClick={handleClick}
				className={s.linkContainer}
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
			</Link>
		</ListItem>
	)
}

export default OrderListProduct
