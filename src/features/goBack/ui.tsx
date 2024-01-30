import { IconButton } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const GoBack = () => {
	const navigate = useNavigate()

	const handleClick = () => {
		navigate(-1)
	}

	return (
		<>
			<IconButton
				onClick={handleClick}
				sx={{
					width: '45px',
					height: '45px',
					boxShadow:
						'5.921px 11.842px 23.684px rgba(183, 179, 193, 0.30)',
					borderRadius: 4
				}}
			>
				{'<'}
			</IconButton>
		</>
	)
}

export default GoBack