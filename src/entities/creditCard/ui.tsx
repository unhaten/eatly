import s from './style.module.scss'
import { Box } from '@mui/material'

const CreditCard = () => {
	return (
		<>
			<Box className={s.card}>
				<Box className={s.top} bgcolor={'accent.main'}></Box>
				<Box className={s.bottom}></Box>
			</Box>
		</>
	)
}

export default CreditCard
