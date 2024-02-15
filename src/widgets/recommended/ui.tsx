import { Box, Typography } from '@mui/material'
import RecommendedProductList from '../RecommendedProductList'

const Recommended = () => {
	return (
		<section>
			<Box
				mt={4}
				paddingX={3}
				paddingY={4}
				sx={{
					borderRadius: 4,
					border: '1px solid#edf2f7',
					height: 500
				}}
			>
				<Typography fontWeight={600} variant='h5'>
					Recommended
				</Typography>
				<RecommendedProductList />
			</Box>
		</section>
	)
}

export default Recommended
