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
                loader: () => fetch('https://assignment-10-jute-home-decor-server-inh2majw4.vercel.app/craft')
            },
            {
                path: "craft",
                element: <AllCrafts></AllCrafts>,
                loader: () => fetch('https://assignment-10-jute-home-decor-server-inh2majw4.vercel.app/craft')
              },
            {
                path: 'craftlist',
                element: <PrivateRoute>
                    <MyCraftList></MyCraftList>
                    </PrivateRoute>,
                loader: () => fetch('https://assignment-10-jute-home-decor-server-inh2majw4.vercel.app/craft')                    
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