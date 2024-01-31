import { FC } from 'react'
import { IProduct } from '../../entities/product/types/types'
import { Box, IconButton, Typography } from '@mui/material'
import { productSlice } from '../../entities/product/model/reducers/product.slice'
import { useAppDispatch } from '../../shared/lib/hooks/redux'
import FormattedPrice from '../formattedPrice'
import AddRoundedIcon from '@mui/icons-material/AddRounded'
import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded'

interface IOrderProductCount {
	product: IProduct
}

const OrderProductCount: FC<IOrderProductCount> = ({ product }) => {
	const { incrementQuantity, decrementQuantity } = productSlice.actions
	const dispatch = useAppDispatch()

	const handleIncrement = (id: string) => {
		dispatch(incrementQuantity(id))
	}

	const handleDecrement = (id: string) => {
		dispatch(decrementQuantity(id))
	}

	return (
		<>
			<Box
				my={3}
				mr={{ sm: 6 }}
				display='flex'
				flexDirection='column'
				alignItems='center'
			>
				<Box display='flex' gap={1} alignItems='center'>
					<IconButton
						onClick={() => handleDecrement(product.id)}
						size='large'
					>
						<RemoveRoundedIcon />
					</IconButton>
					<Typography variant='h6'>
						{product.quantity < 10
							? `0${product.quantity}`
							: product.quantity}
					</Typography>
					<IconButton
						onClick={() => handleIncrement(product.id)}
						size='large'
					>
						<AddRoundedIcon />
					</IconButton>
				</Box>
				<Typography variant='body1' fontWeight={600}>
					<FormattedPrice
						inOrder
						price={product.price * product.quantity}
					/>
				</Typography>
			</Box>
		</>
	)
}

export default OrderProductCount
