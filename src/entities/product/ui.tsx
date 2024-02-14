import {
	Box,
	Card,
	CardActionArea,
	CardActions,
	CardMedia
} from '@mui/material'
import { ProductProps } from './types/types'
import { FC } from 'react'
import CardInfo from '../../shared/ui/CardInfo'
import ToggleFavorites from '../../features/toggleFavorites'
import AddToCart from '../../features/addToCart'
import FormattedPrice from '../../features/formattedPrice'
import { Link } from 'react-router-dom'
import s from './style.module.scss'

const Product: FC<ProductProps> = ({ popular, product }) => {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const handleClick = (event: any) => {
		if (event.target.tagName.toLowerCase() === 'svg') {
			event.preventDefault()
		} else if (event.target.tagName.toLowerCase() === 'path') {
			event.preventDefault()
		}
	}

	return (
		<Link
			to={`/products/${product.id}`}
			className={s.link}
			onClick={handleClick}
		>
			<Box
				component={Card}
				width={1}
				height={1}
				minWidth={'145px'}
				borderRadius={3}
				sx={{
					'& img': {
						display: 'block',
						margin: '0 auto',
						width: popular ? '100px' : '100%',
						borderTopLeftRadius: 20,
						borderTopRightRadius: 20
					}
				}}
			>
				<CardActionArea component='div' sx={{ py: 2, height: '100%' }}>
					<CardMedia
						component='img'
						image={popular ? product.image : ''}
						title={product.name}
					/>
					<Box
						sx={{
							paddingX: 3,
							paddingY: 1,
							pb: 0
						}}
					>
						<CardInfo item={product} />
						<Box
							display={'flex'}
							alignItems='center'
							justifyContent={'space-between'}
						>
							<FormattedPrice price={product.price} inCard />
							<AddToCart product={product} />
						</Box>
					</Box>
					<CardActions sx={{ p: 0 }}>
						{popular && <ToggleFavorites item={product} product />}
					</CardActions>
				</CardActionArea>
			</Box>
		</Link>
	)
}

export default Product
