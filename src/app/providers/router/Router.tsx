import { Suspense, FC, memo, useCallback } from 'react'
import { Route, Routes } from 'react-router-dom'
import { AppRoutesWithAuthProps } from '../../../shared/config/routes/paths'
import { routeConfig } from './config/RouteConfig'
import Layout from '../../../widgets/Layout'
import DashboardLayout from '../../../widgets/DashboardLayout'

const AppRouter: FC = () => {
	const renderWithWrapper = useCallback((route: AppRoutesWithAuthProps) => {
		const { path, element, authOnly, dashboardLayout, noLayout } = route

		const renderElement = (
			<Suspense fallback={<>loading...</>}>{element}</Suspense>
		)

		return (
			<Route
				key={path}
				path={path}
				element={
					authOnly ? (
						// <RequireAuth>{renderElement}</RequireAuth>
						<>
							<Layout>{renderElement}</Layout>
						</>
					) : noLayout ? (
						renderElement
					) : dashboardLayout ? (
						<Layout>
							<DashboardLayout>{renderElement}</DashboardLayout>
						</Layout>
					) : (
						<Layout>{renderElement}</Layout>
					)
				}
			/>
		)
	}, [])

	return <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>
}

export default memo(AppRouter)
