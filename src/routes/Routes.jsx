import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main.jsx";
import Home from "../pages/Home/Home/Home.jsx";
import NewsLayout from "../layouts/NewsLayout.jsx";
import News from "../pages/News/News.jsx";
import Categories from "../pages/Home/Catagories/Categories.jsx";
import LogInLayout from "../layouts/LogInLayout.jsx";
import LogIn from "../pages/LogIn/LogIn.jsx";
import Register from "../pages/LogIn/Register.jsx";
import PrivateRoutes from "./PrivateRoutes.jsx";


const router = createBrowserRouter([
    {
        path: "/",
        element: <LogInLayout></LogInLayout>,
        children: [
            {

                path: "/",
                element:<Navigate to='/category/0'></Navigate>

            },
            {
                path: "login",
                element: <LogIn></LogIn>

            },
            {
                path: "register",
                element: <Register></Register>

            },
        ],
    },
    {
        path: "category",
        element: <Main></Main>,
        children: [
            {
                path: ":id",
                element: <Categories></Categories>,
                loader: ({ params }) =>fetch(`http://localhost:5000/categories/${params.id}`),

            },
        ],
    },
    {
        path: "news",
        element: <NewsLayout></NewsLayout>,
        children: [
            {
                path: ":id",
                element: <PrivateRoutes><News></News></PrivateRoutes>,
                loader:({params})=>fetch(`http://localhost:5000/news/${params.id}`)
            },
        ],
    }
]);

export default router;