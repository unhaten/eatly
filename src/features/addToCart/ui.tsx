import AddBoxRoundedIcon from '@mui/icons-material/AddBoxRounded'
import { IconButton } from '@mui/material'
import { useAppDispatch } from '../../shared/lib/hooks/redux'
import { productSlice } from '../../entities/product/model/reducers/product.slice'
import { IProduct } from '../../entities/product/types/types'
import { FC } from 'react'

interface IAddToCart {
	product: IProduct
}

const AddToCart: FC<IAddToCart> = ({ product }) => {
	const dispatch = useAppDispatch()
	const { addToCart } = productSlice.actions

	const handleAdd = (product: IProduct) => {
		dispatch(addToCart(product))
	}

	return (
		<>
			<IconButton onClick={() => handleAdd(product)}>
				<AddBoxRoundedIcon />
			</IconButton>
		</>
	)
}

export default AddToCart
