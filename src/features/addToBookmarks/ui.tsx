import { IconButton } from '@mui/material'
import BookmarkBorderRoundedIcon from '@mui/icons-material/BookmarkBorderRounded'
import BookmarkRoundedIcon from '@mui/icons-material/BookmarkRounded'
import { IRestaurant } from '../../entities/restaurant/types/types'
import { FC } from 'react'

interface IAddToBookmarks {
	restaurant?: boolean
	item: IRestaurant
}

const AddToBookmarks: FC<IAddToBookmarks> = ({ restaurant, item }) => {
	return (
		<>
			<IconButton>
				{restaurant && (
					<BookmarkBorderRoundedIcon
						sx={{
							color: 'accent.main'
						}}
					/>
				)}
			</IconButton>
		</>
	)
}

export default AddToBookmarks
