import { Typography } from '@mui/material'
import { FC } from 'react'

interface ProductHeaderProps {
	name: string
	preview: string
}

const ProductHeader: FC<ProductHeaderProps> = ({
	name,
	preview
}) => {
	return (
		<>
			<Typography variant='h3' component='h2' fontWeight={500}>
				{name}
			</Typography>
			<Typography variant='body1' color='caption.main' fontWeight={500}>
				{preview}
			</Typography>
		</>
	)
}

export default ProductHeader
