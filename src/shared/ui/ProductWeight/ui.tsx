import { Typography, Box } from '@mui/material'
import WhatshotRoundedIcon from '@mui/icons-material/WhatshotRounded'
import { FC } from 'react'

interface ProductWeightProps {
	weight: number
}

const ProductWeight: FC<ProductWeightProps> = ({ weight }) => {
	return (
		<Box display='flex' gap={0.5}>
			<WhatshotRoundedIcon sx={{ color: 'error.main' }} />
			<Typography variant='body1' color='caption.main' fontWeight={500}>
				{weight} Kcal
			</Typography>
		</Box>
	)
}

export default ProductWeight
