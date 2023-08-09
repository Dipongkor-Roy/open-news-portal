import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main/Main";
import Home from "../Pages/Home/Home/Home";
import Category from "../Pages/Category/Category/Category";
import News from "../Pages/News/News/News";
import LogIn from "../Pages/LogIn/LogIn";
import Register from '../Pages/Register/Register'
import PrivateRoutes from "./PrivateRoutes/PrivateRoutes";
import TermsAndCondition from "../Pages/TermsAndCondition/TermsAndCondition";
import Profile from "../Pages/Profile/Profile";

export const routes=createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader:()=>fetch('http://localhost:9000/news')
            },
            {
                path:'/category/:id', //:id use for uniq number for every category
                element:<Category></Category>,
                loader:({params})=>fetch(`http://localhost:9000/category/${params.id}`)
            },
            {
                path:'/news/:id',
                element:<PrivateRoutes><News></News></PrivateRoutes>,
                loader:({params})=>fetch(`http://localhost:9000/news/${params.id}`)
            },
            {
                path:'/logIn',
                element:<LogIn></LogIn>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/terms',
                element:<TermsAndCondition></TermsAndCondition>
            },
            {
                path:'/profile',
                element:<PrivateRoutes><Profile></Profile></PrivateRoutes>
            }
        ]
    }
])