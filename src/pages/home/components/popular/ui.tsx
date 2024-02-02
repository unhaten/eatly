import { Typography, Box, Button } from '@mui/material'
import PopularProductList from '../../../../entities/product/components/popularProductList'
import { Link } from 'react-router-dom'

const Popular = () => {
	return (
		<section>
			<Box
				mt={4}
				mb={3}
				display='flex'
				justifyContent='space-between'
				alignItems='center'
			>
				<Typography variant='h5' component='h2' fontWeight={600}>
					Most Popular
				</Typography>
				<Link to='/products'>
					<Box component={Button} color='caption.main'>
						<span>View all</span>
					</Box>
				</Link>
			</Box>
			<PopularProductList />
		</section>
	)
}

export default Popular
