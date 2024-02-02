import { Route, Routes } from 'react-router-dom'
import { AppRoutesWithAuthProps } from '../../../../shared/config/routes/paths'
import { routeConfig } from '../config/RouteConfig'

const AppRouter = () => {
	const renderPage = (route: AppRoutesWithAuthProps) => {
		const { path, element, authOnly } = route

		const renderElement = <>{element}</>

		return (
			<Route
				key={path}
				path={path}
				element={authOnly ? renderElement : renderElement}
			/>
		)
	}

	return <Routes>{Object.values(routeConfig).map(renderPage)}</Routes>
}

export default AppRouter
