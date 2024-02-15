import {
	AppRoutes,
	AppRoutesWithAuthProps,
	paths
} from '../../../../shared/config/routes/paths'
import HomePage from '../../../../pages/home'
import OrdersPage from '../../../../pages/Orders'
import RestaurantsPage from '../../../../pages/Restaurants'
import ProductsPage from '../../../../pages/Products'
import ProductDetailsPage from '../../../../pages/ProductDetails'

export const routeConfig: Record<AppRoutes, AppRoutesWithAuthProps> = {
	[AppRoutes.HOME]: {
		path: paths.home,
		element: <HomePage />,
		dashboardLayout: true
	},
	[AppRoutes.ORDERS]: {
		path: paths.orders,
		element: <OrdersPage />
	},
	[AppRoutes.MESSAGES]: {
		path: paths.messages,
		element: <>messages</>
	},
	[AppRoutes.AUTH]: {
		path: paths.auth,
		element: <>auth</>
	},
	[AppRoutes.REGISTER]: {
		path: paths.register,
		element: <>register</>
	},
	[AppRoutes.PRODUCTS]: {
		path: paths.products,
		element: <ProductsPage />,
		dashboardLayout: true
	},
	[AppRoutes.PRODUCT_DETAILS]: {
		path: paths.productDetails,
		element: <ProductDetailsPage />,
		dashboardLayout: true
	},
	[AppRoutes.RESTAURANTS]: {
		path: paths.restaurants,
		element: <RestaurantsPage />,
		dashboardLayout: true
	},
	[AppRoutes.RESTAURANT_DETAILS]: {
		path: paths.restaurantDetails,
		element: <>restaurant details</>
	},
	[AppRoutes.NOT_FOUND]: {
		path: paths.notFound,
		element: <>not found</>
	}
}
