import { Box, Button } from '@mui/material'
import { FC } from 'react'

interface IAltButton {
	text: string
	className?: string
	onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const AltButton: FC<IAltButton> = ({ text, className = '', onClick }) => {
	return (
		<Box
			component={Button}
			variant='contained'
			padding={2}
			sx={{
				backgroundColor: 'accent.main',
				'&:hover': {
					backgroundColor: 'accent.dark'
				}
			}}
			className={className}
			onClick={onClick}
		>
			<span>{text}</span>
		</Box>
	)
}

export default AltButton
