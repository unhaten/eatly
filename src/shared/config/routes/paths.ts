export enum AppRoutes {
	HOME = 'home'
}

export const paths = {
	index: '/',
	home: '/',
	register: '/register',
	auth: 'auth',
	orders: '/orders',
	messages: '/messages',
	products: '/products',
	productDetails: '/products/:id',
	restaurants: '/restaurants',
	restaurantDetails: '/restaurants/:id',
	notFound: '*'
}
