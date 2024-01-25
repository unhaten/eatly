import {
	RouterProvider,
	Route,
	createBrowserRouter,
	createRoutesFromElements,
	Link
} from 'react-router-dom'
import { paths } from '../../../shared/config/routes/paths'
import Layout from '../../../widgets/layout'
import HomePage from '../../../pages/home'
import { FC } from 'react'

interface RouterProps {}

const Router: FC<RouterProps> = () => {
	// console.log(window.location.pathname);
	const router = createBrowserRouter(
		createRoutesFromElements(
			<>
				<Route path={paths.home} element={<Layout />}>
					<Route index element={<HomePage></HomePage>} />
					<Route path={paths.orders} element={<>orders</>} />
					<Route path={paths.messages} element={<>messages</>} />
				</Route>
				<Route path={paths.auth} element={<>Auth</>} />
				<Route path={paths.register} element={<>reg</>} />
				<Route
					path={paths.notFound}
					element={
						<>
							not found, <Link to='/'>go home</Link>
						</>
					}
				/>
			</>
		)
	)

	return <RouterProvider router={router}></RouterProvider>
}

export default Router
