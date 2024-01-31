import { Button } from '@mui/material'
import { FC } from 'react'

interface IAltButton {
	text: string
}

const AltButton: FC<IAltButton> = ({ text }) => {
	return (
		<Button
			variant='contained'
			// color='accent' sx={{ color: 'white' }}
		>
			<span>{text}</span>
		</Button>
	)
}

export default AltButton
