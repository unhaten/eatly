import { Box, FormControl, Input } from '@mui/material'
import AltButton from '../../shared/ui/AltButton'

const ApplyCoupon = () => {
	return (
		<>
			<Box mt={15}>
				<FormControl>
					<Input placeholder='Apply Coupon'></Input>
					<AltButton text={'Apply'} />
				</FormControl>
			</Box>
		</>
	)
}

export default ApplyCoupon
