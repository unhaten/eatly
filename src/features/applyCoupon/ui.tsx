import { Box, TextField, InputAdornment } from '@mui/material'
import AltButton from '../../shared/ui/AltButton'
import ConfirmationNumberRoundedIcon from '@mui/icons-material/ConfirmationNumberRounded'
import s from './style.module.scss'

const ApplyCoupon = () => {
	return (
		<>
			<Box
				mt={15}
				display={{ xs: 'block', sm: 'flex' }}
				gap={1}
				alignItems='center'
			>
				<TextField
					fullWidth
					placeholder='Apply Coupon'
					InputProps={{
						startAdornment: (
							<InputAdornment position='start'>
								<ConfirmationNumberRoundedIcon
									fontSize='large'
									sx={{ mr: 1, color: '#ACADB9' }}
								/>
							</InputAdornment>
						)
					}}
					sx={{
						backgroundColor: '#F1F1F1',
						height: 1
					}}
				/>
				<AltButton text={'Apply'} className={s.button} />
			</Box>
		</>
	)
}

export default ApplyCoupon
