import {
	AppRoutes,
	AppRoutesWithAuthProps,
	paths
} from '../../../../shared/config/routes/paths'
import HomePage from '../../../../pages/home'
import Layout from '../../../../widgets/layout'
import DashboardLayout from '../../../../widgets/dashboardLayout'
import OrdersPage from '../../../../pages/orders'

export const routeConfig: Record<AppRoutes, AppRoutesWithAuthProps> = {
	[AppRoutes.INDEX]: {
		path: paths.messages,
		element: <Layout />
	},
	[AppRoutes.HOME]: {
		path: paths.home,
		element: <HomePage />
	},
	[AppRoutes.ORDERS]: {
		path: paths.messages,
		element: <OrdersPage />
	},
	[AppRoutes.MESSAGES]: {
		path: paths.messages,
		element: <HomePage />
	},
	[AppRoutes.AUTH]: {
		path: paths.messages,
		element: <HomePage />
	},
	[AppRoutes.REGISTER]: {
		path: paths.messages,
		element: <HomePage />
	},
	[AppRoutes.PRODUCTS]: {
		path: paths.messages,
		element: <HomePage />
	},
	[AppRoutes.PRODUCT_DETAILS]: {
		path: paths.messages,
		element: <HomePage />
	},
	[AppRoutes.RESTAURANTS]: {
		path: paths.messages,
		element: <HomePage />
	},
	[AppRoutes.RESTAURANT_DETAILS]: {
		path: paths.messages,
		element: <HomePage />
	},
	[AppRoutes.NOT_FOUND]: {
		path: paths.messages,
		element: <HomePage />
	}
}
