import { Box } from '@mui/material'
import AltButton from '../../shared/ui/AltButton'
import s from './style.module.scss'

const PlaceOrder = () => {
	return (
		<Box mt={6}>
			<AltButton text={'Review Payment'} className={s.button} />
		</Box>
	)
}

export default PlaceOrder
