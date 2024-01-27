import { List, ListItem, Box } from '@mui/material'
import Product from '../..'
import { productAPI } from '../../model/services/product.service'
import { IProduct } from '../../types/types'

const PopularProductList = () => {
	const { data } = productAPI.useFetchAllProductsQuery('')
	return (
		<Box
			component={List}
			display={'flex'}
			gap={2}
			sx={{
				overflowX: 'scroll',

				'& li': {
					// flexBasis: "31%",
					width: 'fit-content',
					borderRadius: 5,
					padding: 0,
					border: '1px solid #F4F4F6',
					boxShadow:
						'3.891px 46.697px 23.348px 0px rgba(229, 229, 229, 0.70)'
				}
			}}
		>
			{data &&
				data.map((product: IProduct) => {
					return (
						<ListItem key={product.id}>
							<Product popular product={product} />
						</ListItem>
					)
				})}
		</Box>
	)
}

export default PopularProductList
