import { IconButton } from '@mui/material'
import { productSlice } from '../../entities/product/model/reducers/product.slice'
import { useAppDispatch } from '../../shared/lib/hooks/redux'
import { IProduct } from '../../entities/product/types/types'
import { FC } from 'react'

interface IRemoveFromCart {
	product: IProduct
}

const RemoveFromCart: FC<IRemoveFromCart> = ({ product }) => {
	const { removeFromCart } = productSlice.actions
	const dispatch = useAppDispatch()

	const handleClick = (product: IProduct) => {
		dispatch(removeFromCart(product))
	}

	return (
		<>
			<IconButton onClick={() => handleClick(product)}>delete</IconButton>
		</>
	)
}

export default RemoveFromCart
