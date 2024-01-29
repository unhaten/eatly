import { Button, Typography, Box } from '@mui/material'
import { useAppSelector } from '../../shared/lib/hooks/redux'
import OrderList from '../../features/orderList'
import ApplyCoupon from '../../features/applyCoupon'
import OrderCount from '../../features/orderCount'
import PlaceOrder from '../../features/placeOrder'
import { Link } from 'react-router-dom'
import s from './style.module.scss'
import GoBack from '../../features/goBack'

const OrdersPage = () => {
	const { products } = useAppSelector(state => state.productReducer)

	return (
		<>
			<section className={s.section}>
				<GoBack />
				{products.length > 0 ? (
					<form>
						<OrderList products={products} />
						<ApplyCoupon />
						<OrderCount />
						<PlaceOrder />
					</form>
				) : (
					<Box className={s.centeredContainer}>
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
			</section>
		</>
	)
}

export default OrdersPage
