import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main/Main";
import Home from "../Pages/Home/Home/Home";
import Category from "../Pages/Category/Category/Category";
import News from "../Pages/News/News/News";

export const routes=createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/category/:id', //:id use for uniq number for every category
                element:<Category></Category>
            },
            {
                path:'/news/:id',
                element:<News></News>
            }
        ]
    }
])