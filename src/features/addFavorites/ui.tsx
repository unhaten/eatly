import { IconButton } from '@mui/material'
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded'
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded'
import BookmarkBorderRoundedIcon from '@mui/icons-material/BookmarkBorderRounded'
import BookmarkRoundedIcon from '@mui/icons-material/BookmarkRounded'

import { FC } from 'react'
import s from './style.module.scss'

interface IAddFavorites {
	restaurant?: boolean
	product?: boolean
}

const AddFavorites: FC<IAddFavorites> = ({ restaurant, product }) => {
	return (
		<>
			<IconButton className={product ? s.absolute : ''}>
				{restaurant && <BookmarkRoundedIcon />}
				{product && <FavoriteBorderRoundedIcon fontSize='small' />}
			</IconButton>
		</>
	)
}

export default AddFavorites
