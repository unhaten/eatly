import { List, ListItem, Box } from '@mui/material'
import Product from '../../entities/product'
import { productAPI } from '../../entities/product/model/services/product.service'
import { IProduct } from '../../entities/product/types/types'
import { FC } from 'react'
import { useAppSelector } from '../../shared/lib/hooks/redux'

interface ProductListProps {
	popular?: boolean
}

const ProductList: FC<ProductListProps> = ({ popular }) => {
	const { data, isLoading, isSuccess, error } =
		productAPI.useFetchAllProductsQuery('')

	const { favoriteProducts } = useAppSelector(state => state.productReducer)

	//! filtering items by bookmarks

	let allItems: IProduct[] = []
	let unFavoriteItems: IProduct[] = []
	let filteredItems: IProduct[] = []

	if (isSuccess) {
		allItems = [...data, ...favoriteProducts]
		unFavoriteItems = allItems.filter(
			item => !favoriteProducts.includes(item)
		)
		filteredItems = [...favoriteProducts, ...unFavoriteItems]
	}
	return (
		<Box
			component={List}
			display={'flex'}
			alignItems={'stretch'}
			gap={2}
			sx={{
				overflowX: popular ? 'scroll' : '',
				flexWrap: !popular ? 'wrap' : '',

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
			{isLoading && <h1>Loading...</h1>}
			{error && <h1>Error has occurred</h1>}
			{popular
				? data?.map((product: IProduct) => {
						return (
							<ListItem key={product.id}>
								<Product popular product={product} />
							</ListItem>
						)
					})
				: filteredItems?.map((product: IProduct) => {
						return (
							<ListItem key={product.id}>
								<Product popular product={product} />
							</ListItem>
						)
					})}
		</Box>
	)
}

export default ProductList
