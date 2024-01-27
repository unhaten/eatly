import { Box, List, ListItem, Typography } from '@mui/material'
import { IProduct } from '../../entities/product/types/types'
import { FC } from 'react'
import s from './style.module.scss'
import FormattedPrice from '../formattedPrice'

interface IOrderList {
	products: IProduct[]
}

const OrderList: FC<IOrderList> = ({ products }) => {
	return (
		<>
			<List sx={{ mt: 4 }}>
				{products.length > 0 &&
					products.map(product => (
						<ListItem className={s.item}>
							<Box
								className={s.left}
								display='flex'
								alignItems='center'
								gap={2}
							>
								<img
									src={product.image}
									width={'100px'}
									height={'100px'}
									alt=''
								/>
								<Box display='flex' flexDirection='column'>
									<Typography fontWeight={600}>
										{product.name}
									</Typography>
									<FormattedPrice
										price={product.price}
										inOrder
									/>
								</Box>
							</Box>
							<Box className={s.right}></Box>
						</ListItem>
					))}
			</List>
		</>
	)
}

export default OrderList
