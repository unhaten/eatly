import { List } from '@mui/material'
import { IProduct } from '../../entities/product/types/types'
import { FC } from 'react'
import OrderListProduct from '../orderListProduct'
import s from './style.module.scss'

interface IOrderList {
	products: IProduct[]
}

const OrderList: FC<IOrderList> = ({ products }) => {
	return (
		<>
			<List
				className={s.list}
				sx={{
					mt: 4,

					'& li': {
						padding: { xs: 4, sm: 2 },
						margin: '0 auto',
						width: { xs: 'fit-content', sm: '1' }
					}
				}}
			>
				{products.map(product => (
					<OrderListProduct key={product.id} product={product} />
				))}
			</List>
		</>
	)
}

export default OrderList
