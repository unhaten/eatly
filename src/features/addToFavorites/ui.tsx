import { IconButton } from '@mui/material'
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded'
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded'
import { FC } from 'react'
import s from './style.module.scss'
import { useAppDispatch, useAppSelector } from '../../shared/lib/hooks/redux'
import { productSlice } from '../../entities/product/model/reducers/product.slice'
import { IProduct } from '../../entities/product/types/types'

interface IAddToFavorites {
	product?: boolean
	item: IProduct
}

const AddToFavorites: FC<IAddToFavorites> = ({ item, product }) => {
	const dispatch = useAppDispatch()
	const { addToFavorites } = productSlice.actions
	const { favoriteProducts } = useAppSelector(state => state.productReducer)

	const handleClick = (product: IProduct) => {
		dispatch(addToFavorites(product))
	}

	return (
		<>
			<IconButton
				onClick={() => handleClick(item)}
				className={product ? s.absolute : ''}
			>
				{product && !favoriteProducts.includes(item) ? (
					<FavoriteBorderRoundedIcon fontSize='small' />
				) : (
					<FavoriteRoundedIcon
						fontSize='small'
						sx={{ color: 'accent.main' }}
					/>
				)}
			</IconButton>
		</>
	)
}

export default AddToFavorites
