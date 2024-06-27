import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import ErrorPage from "../pages/ErrorPage";
import Home from "../Home/Home";
import PrivateRoute from "./PrivateRoute";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AddCraft from "../pages/AddCraft";
import AllCrafts from "../Home/AllCrafts";
import MyCraftList from "../pages/MyCraftList";

const Routes = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/craft')
            },
            {
                path: "craft",
                element: <AllCrafts></AllCrafts>,
                loader: () => fetch('http://localhost:5000/craft')
              },
            {
                path: 'craftlist',
                element: <PrivateRoute>
                    <MyCraftList></MyCraftList>
                    </PrivateRoute>,
                loader: () => fetch('http://localhost:5000/craft')                    
            },
            {
                path: 'login',
                element: <Login></Login>,
            },
            {
                path: 'register',
                element: <Register></Register>,
            },
            {
                path: "add",
                element: <AddCraft></AddCraft>
              },
        ]
},
]);

export default Routes;