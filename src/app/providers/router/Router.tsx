import { FunctionComponent } from "react";
import {
    RouterProvider,
    Route,
    createBrowserRouter,
    createRoutesFromElements,
} from "react-router-dom";
import { paths } from "../../../shared/config/routes/paths";
import Layout from "../../../widgets/layout";

interface RouterProps {}

const Router: FunctionComponent<RouterProps> = () => {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <>
                <Route path={paths.home} element={<Layout />}>
                    <Route index element={<>homepage</>}></Route>
                    <Route path={paths.auth} element={<>Auth</>}></Route>
                    <Route path={paths.register} element={<>reg</>}></Route>
                </Route>
            </>
        )
    );

    return <RouterProvider router={router}></RouterProvider>;
};

export default Router;
