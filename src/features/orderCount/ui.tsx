import { Box, Typography } from '@mui/material'
import s from './style.module.scss'

const OrderCount = () => {
	return (
		<>
			<Box className={s.container}>
				<Box className={s.subtotal}>
					<Typography>Subtotal</Typography>
					<Typography>cash</Typography>
				</Box>
				<Box className={s.delivery}>
					<Typography>Delivery</Typography>
					<Typography>cash</Typography>
				</Box>
				<Box>
					<Typography>Total</Typography>
					<Typography>cash</Typography>
				</Box>
			</Box>
		</>
	)
}

export default OrderCount
