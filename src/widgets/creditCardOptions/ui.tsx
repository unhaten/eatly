import { Box } from '@mui/material'
import Invoicing from '../../features/Invoicing'
import Receive from '../../features/Receive'
import Send from '../../features/Send'
import More from '../../features/More'

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
