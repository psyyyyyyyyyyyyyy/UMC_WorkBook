import './App.css'

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./pages/home.jsx";
import NotFound from "./pages/not-found.jsx";
import MoviesCategory from "./pages/moviesCategory.jsx";
import Movies from './pages/movies.jsx';
import Login from "./pages/login.jsx";
import Signup from "./pages/signup.jsx";
import Search from './pages/search.jsx';
import RootLayout from "./layout/root-layout.jsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        errorElement: <NotFound />,
        // 1. Navbar 밑에 path에 해당하는 element를 보여주고 싶으면 아래와 같이 children을 활용
        children: [
            {
                // 2. index: true는 위의 path: '/' 즉, 홈 경로를 의미한다.
                index: true,
                element: <HomePage />
            },
            {
                // 3. 부모의 path가 '/'이니, /를 붙이지 않아도 /movies랑 동일하게 동작한다.
                path: 'movies',
                element: <MoviesCategory />,
            },
            {
                path: 'movies/:type',
                element: <Movies/>
            },
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'signup',
                element: <Signup />
            },
            {
                path: 'search',
                element: <Search />
            },
            {
                path: 'signup',
                element: <Signup />
            }
        ]
    },

])

function App() {
    return <RouterProvider router={router} />
}

export default App
