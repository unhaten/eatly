import { Box, Typography } from '@mui/material'
import s from './style.module.scss'
import { ProductProps } from './types/types'
import { FC } from 'react'

const Product: FC<ProductProps> = ({ popular, product }) => {
	return (
		<Box
			width={'100%'}
			// borderRadius={5}
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
			<img
				src={popular ? '/img/foodPopular.png' : ''}
				alt='productImage'
			/>
			<Box
				className={s.content}
				sx={{
					paddingX: 3,
					paddingY: 1
				}}
			>
				<Box className={s.badge}>
					<Typography
						variant='caption'
						color={
							product.type === 'healthy'
								? 'badges.healthy.color'
								: product.type === 'trending'
									? 'badges.trending.color'
									: product.type === 'supreme'
										? 'badges.supreme.color'
										: 'primary.main'
						}
						bgcolor={
							product.type === 'healthy'
								? 'badges.healthy.bgColor'
								: product.type === 'trending'
									? 'badges.trending.bgColor'
									: product.type === 'supreme'
										? 'badges.supreme.bgColor'
										: 'primary.main'
						}
						className={s.type}
					>
						{product.type}
					</Typography>
				</Box>
				<Typography fontWeight={600} variant='body1' className={s.name}>
					{product.name}
				</Typography>
				<Box className={s.info}>
					<Typography className={s.time}>
						{product.deliveryTime}min
					</Typography>
					<Box className={s.dot} />
					<Box className={s.star} />
					<Typography className={s.rate}>{product.rate}</Typography>
				</Box>
			</Box>
		</Box>
	)
}

export default Product
