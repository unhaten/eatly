import { Box, Button } from '@mui/material'
import { FC } from 'react'

interface IAltButton {
	text: string
	className?: string
}

const AltButton: FC<IAltButton> = ({ text, className = '' }) => {
	return (
		<Box
			component={Button}
			variant='contained'
			color={'accent.contrastColor'}
			borderRadius={3.5}
			padding={2}
			sx={{
				backgroundColor: 'accent.main',
				'&:hover': {
					backgroundColor: 'accent.dark'
				}
			}}
			className={className}
		>
			<span>{text}</span>
		</Box>
	)
}

export default AltButton
