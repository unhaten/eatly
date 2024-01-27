import { Box, IconButton } from '@mui/material'
import { useAppSelector } from '../../shared/lib/hooks/redux'
import OrderList from '../../features/orderList'

const OrdersPage = () => {
	const { products } = useAppSelector(state => state.productReducer)

	return (
		<>
			<section>
				<IconButton
					sx={{
						width: '45px',
						height: '45px',
						boxShadow:
							'5.921px 11.842px 23.684px rgba(183, 179, 193, 0.30)',
						borderRadius: 4
					}}
				>
					{'<'}
				</IconButton>
				<OrderList products={products} />
			</section>
		</>
	)
}

export default OrdersPage
