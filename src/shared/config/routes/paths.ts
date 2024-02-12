import { RouteProps } from 'react-router'

export type AppRoutesWithAuthProps = RouteProps & {
	authOnly?: boolean
	dashboardLayout?: boolean
	noLayout?: boolean
}

export enum AppRoutes {
	HOME = 'home',
	REGISTER = 'register',
	AUTH = 'auth',
	ORDERS = 'orders',
	MESSAGES = 'messages',
	PRODUCTS = 'products',
	PRODUCT_DETAILS = 'productDetails',
	RESTAURANTS = 'restaurants',
	RESTAURANT_DETAILS = 'restaurantDetails',
	NOT_FOUND = 'notFound'
}

export const paths: Record<AppRoutes, string> = {
	[AppRoutes.HOME]: '/',
	[AppRoutes.REGISTER]: '/register',
	[AppRoutes.AUTH]: '/auth',
	[AppRoutes.ORDERS]: '/orders',
	[AppRoutes.MESSAGES]: '/messages',
	[AppRoutes.PRODUCTS]: '/products',
	[AppRoutes.PRODUCT_DETAILS]: '/products/:id',
	[AppRoutes.RESTAURANTS]: '/restaurants',
	[AppRoutes.RESTAURANT_DETAILS]: '/restaurants/:id',
	[AppRoutes.NOT_FOUND]: '*'
}
