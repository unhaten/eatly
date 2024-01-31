import { Box, FormControl, Input } from '@mui/material'
import AltButton from '../../shared/ui/AltButton'

const ApplyCoupon = () => {
	return (
		<>
			<Box mt={15}>
				<Box component={FormControl}>
					<Input placeholder='Apply Coupon' />
					<AltButton text={'Apply'} />
				</Box>
			</Box>
		</>
	)
}

export default ApplyCoupon
