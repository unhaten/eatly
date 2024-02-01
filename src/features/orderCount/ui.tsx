import { Box, Typography } from '@mui/material'
import s from './style.module.scss'

const OrderCount = () => {
	return (
		<>
			<Box className={s.container} mt={5}>
				<Box className={s.subtotal}>
					<Typography variant='body1' fontWeight={400}>
						Subtotal
					</Typography>
					<Typography variant='body1' fontWeight={400}>
						cash
					</Typography>
				</Box>
				<Box className={s.delivery} mt={3}>
					<Typography variant='body1' fontWeight={400}>
						Delivery
					</Typography>
					<Typography variant='body1' fontWeight={400}>
						cash
					</Typography>
				</Box>
				<Box mt={4}>
					<Typography variant='h5' fontWeight={500}>
						Total
					</Typography>
					<Typography variant='h5' fontWeight={500}>
						cash
					</Typography>
				</Box>
			</Box>
		</>
	)
}

export default OrderCount
