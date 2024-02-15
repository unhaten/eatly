import { useParams } from 'react-router-dom'
import GoBack from '../../features/GoBack'
import ProductDetails from '../../widgets/ProductDetails'
import { productAPI } from '../../entities/product/model/services/product.service'

const ProductDetailsPage = () => {
	const { id } = useParams()
	const { data, isLoading } = productAPI.useFetchProductByIdQuery(id)

	console.log(data)

	return (
		<section>
			<GoBack />
			{data && <ProductDetails product={data} />}
			{isLoading && <h1>Loading...</h1>}
		</section>
	)
}

export default ProductDetailsPage
