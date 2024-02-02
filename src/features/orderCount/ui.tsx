import { Box, Typography } from '@mui/material'
import s from './style.module.scss'
import { useAppSelector } from '../../shared/lib/hooks/redux'
import FormattedPrice from '../formattedPrice'

const OrderCount = () => {
	const { products } = useAppSelector(state => state.productReducer)
	const deliveryPrice = 9.99
	let subtotal = 0
	products.map(item => {
		const multipliedPrice = item.quantity * item.price
		subtotal += multipliedPrice
	})
	// ! TODO: round the number (cuz now it can return 55.0000000098)

	return (
		<>
			<Box className={s.container} mt={5}>
				<Box className={s.subtotal}>
					<Typography variant='body1' fontWeight={400}>
						Subtotal
					</Typography>
					<FormattedPrice price={subtotal} inOrder fontWeight={400} />
				</Box>
				<Box className={s.delivery} mt={3}>
					<Typography variant='body1' fontWeight={400}>
						Delivery
					</Typography>
					<FormattedPrice
						inOrder
						price={deliveryPrice}
						fontWeight={400}
					/>
				</Box>
				<Box mt={4}>
					<Typography variant='h5' fontWeight={500}>
						Total
					</Typography>
					<FormattedPrice
						variant='h5'
						inOrder
						price={subtotal + deliveryPrice}
						fontWeight={500}
					/>
				</Box>
			</Box>
		</>
	)
}

export default OrderCount
