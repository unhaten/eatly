import AddBoxRoundedIcon from '@mui/icons-material/AddBoxRounded'
import { IconButton } from '@mui/material'
import { useAppDispatch } from '../../shared/lib/hooks/redux'
import { productSlice } from '../../entities/product/model/reducers/product.slice'
import { IProduct } from '../../entities/product/types/types'
import { FC } from 'react'
import AltButton from '../../shared/ui/AltButton'
import s from './style.module.scss'

interface IAddToCart {
	product: IProduct
	alternative?: boolean
}

const AddToCart: FC<IAddToCart> = ({ product, alternative }) => {
	const dispatch = useAppDispatch()
	const { addToCart } = productSlice.actions

	const handleAdd = (product: IProduct) => {
		dispatch(addToCart(product))
	}

	return (
		<>
			{!alternative ? (
				<IconButton onClick={() => handleAdd(product)}>
					<AddBoxRoundedIcon
						sx={{
							color: '#323142'
						}}
					/>
				</IconButton>
			) : (
				<AltButton
					text={'Add to cart'}
					onClick={() => handleAdd(product)}
					className={s.button}
				/>
			)}
		</>
	)
}

export default AddToCart
