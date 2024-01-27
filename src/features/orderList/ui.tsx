import { Box, Button, List, ListItem, Typography } from '@mui/material'
import { IProduct } from '../../entities/product/types/types'
import { FC } from 'react'
import s from './style.module.scss'
import FormattedPrice from '../formattedPrice'
import { Link } from 'react-router-dom'

interface IOrderList {
	products: IProduct[]
}

const OrderList: FC<IOrderList> = ({ products }) => {
	return (
		<>
			<List
				sx={{
					mt: 4,

					'& li': {
						padding: 2,
						margin: '0 auto',
						maxWidth: '700px'
					}
				}}
			>
				{products.length > 0 ? (
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
					))
				) : (
					<Box>
						<Typography
							variant='h3'
							fontWeight={500}
							textAlign={'center'}
						>
							You have not ordered anything yet!
						</Typography>
						<Box display={'flex'} justifyContent={'center'} mt={2}>
							<Link to='/'>
								<Button variant='outlined'>
									<span>Go to dashboard</span>
								</Button>
							</Link>
						</Box>
					</Box>
				)}
			</List>
		</>
	)
}

export default OrderList
