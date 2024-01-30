import { List } from '@mui/material'
import { IProduct } from '../../entities/product/types/types'
import { FC } from 'react'
import OrderListProduct from '../orderListProduct'

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
				{products.map(product => (
					<OrderListProduct product={product} />
				))}
			</List>
		</>
	)
}

export default OrderList
