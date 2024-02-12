import { Box } from '@mui/material'
import Invoicing from '../../features/invoicing'
import Receive from '../../features/receive'
import Send from '../../features/send'
import More from '../../features/more'

const CreditCardOptions = () => {
	return (
		<Box
			display='flex'
			justifyContent={'center'}
			alignItems='center'
			gap={3}
			mt={6}
		>
			<Send />
			<Receive />
			<Invoicing />
			<More />
		</Box>
	)
}

export default CreditCardOptions
