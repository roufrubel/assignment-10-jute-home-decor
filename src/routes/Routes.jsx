import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import ErrorPage from "../pages/ErrorPage";
import Home from "../Home/Home";
import PrivateRoute from "./PrivateRoute";
import Login from "../pages/Login";
import Register from "../pages/Register";

const Routes = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/house.json')
            },
            {
                path: '/house/:id',
                element: <PrivateRoute>
                    {/* <House></House> */}
                    </PrivateRoute>,
                loader: () => fetch('/house.json')
            },
            {
                path: '/login',
                element: <Login></Login>,
            },
            {
                path: '/register',
                element: <Register></Register>,
            },
        ]
},
]);

export default Routes;