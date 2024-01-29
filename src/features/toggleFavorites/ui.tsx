import { IconButton } from '@mui/material'
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded'
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded'
import { FC } from 'react'
import s from './style.module.scss'
import { useAppDispatch, useAppSelector } from '../../shared/lib/hooks/redux'
import { productSlice } from '../../entities/product/model/reducers/product.slice'
import { IProduct } from '../../entities/product/types/types'

interface IToggleFavorites {
	product?: boolean
	item: IProduct
}

const ToggleFavorites: FC<IToggleFavorites> = ({ item, product }) => {
	const dispatch = useAppDispatch()
	const { toggleFavorites } = productSlice.actions
	const { favoriteProducts } = useAppSelector(state => state.productReducer)

	const handleClick = (product: IProduct) => {
		dispatch(toggleFavorites(product))
	}

	const isIncluded = favoriteProducts.includes(item)

	return (
		<>
			<IconButton
				onClick={() => handleClick(item)}
				className={product ? s.absolute : ''}
				sx={{
					':hover': {
						backgroundColor: isIncluded && 'accent.dark'
					}
				}}
				color={isIncluded ? 'accent' : ''}
			>
				{product && !isIncluded ? (
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

export default ToggleFavorites
