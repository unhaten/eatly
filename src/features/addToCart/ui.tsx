import AddBoxRoundedIcon from '@mui/icons-material/AddBoxRounded'
import { IconButton } from '@mui/material'
import { useAppDispatch } from '../../shared/lib/hooks/redux'
import { productSlice } from '../../entities/product/model/reducers/product.slice'

const AddToCart = ({ product }) => {
	const dispatch = useAppDispatch()
	const { addToCart } = productSlice.actions

	const handleAdd = product => {
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
