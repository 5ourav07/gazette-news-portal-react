import Main from "../../Layouts/Main";
import Home from "../../Pages/Home/Home";
import Category from "../../Pages/Category/Category";
import News from "../../Pages/News/News";
import Login from "../../Pages/Users/Login/Login";
import SignUp from "../../Pages/Users/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import TermsAndConditions from "../../Pages/Others/TermsAndConditions/TermsAndConditions";
import Profile from "../../Pages/Others/Profile/Profile";

const { createBrowserRouter } = require("react-router-dom");

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://gazette-server-side.vercel.app/news')
            },
            {
                path: '/category/:id',
                element: <Category></Category>,
                loader: ({ params }) => fetch(`https://gazette-server-side.vercel.app/category/${params.id}`)
            },
            {
                path: '/news/:id',
                element: <PrivateRoute><News></News></PrivateRoute>,
                loader: ({ params }) => fetch(`https://gazette-server-side.vercel.app/news/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/terms',
                element: <TermsAndConditions></TermsAndConditions>
            },
            {
                path: '/profile',
                element: <PrivateRoute><Profile></Profile></PrivateRoute>
            }
        ]
    }
]);