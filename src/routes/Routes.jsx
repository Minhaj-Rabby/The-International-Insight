import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main.jsx";
import Home from "../pages/Home/Home/Home.jsx";
import NewsLayout from "../layouts/NewsLayout.jsx";
import News from "../pages/News/News.jsx";
import Categories from "../pages/Home/Catagories/Categories.jsx";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Categories></Categories>,
                loader:()=>fetch('http://localhost:5000/news')
            },
            {
                path: "/category/:id",
                // console.log(params.id)
                element: <Categories></Categories>,
                loader: ({ params }) =>
                   fetch(`http://localhost:5000/categories/${params.id}`),

            },
        ],
    },
    {
        path: "/news",
        element: <NewsLayout></NewsLayout>,
        children: [
            {
                path: ":id",
                element: <News></News>,
                loader:({params})=>fetch(`http://localhost:5000/news/${params.id}`)
            },
        ],
    }
]);

export default router;