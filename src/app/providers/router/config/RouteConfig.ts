import HomePage from '../../../../pages/home'
import {
	AppRoutes,
	AppRoutesWithAuthProps,
	paths
} from '../../../../shared/config/routes/paths'

export const routeConfig: Record<AppRoutes, AppRoutesWithAuthProps> = {
	[AppRoutes.HOME]: {
		path: paths.home,
		element: <><HomePage />
	},
}
