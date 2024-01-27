import { IconButton } from '@mui/material'
import { useAppSelector } from '../../shared/lib/hooks/redux'
import OrderList from '../../features/orderList'
import ApplyCoupon from '../../features/applyCoupon'
import OrderCount from '../../features/orderCount'
import PlaceOrder from '../../features/placeOrder'

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
				<form>
					<OrderList products={products} />
					<ApplyCoupon />
					<OrderCount />
					<PlaceOrder />
				</form>
			</section>
		</>
	)
}

export default OrdersPage
