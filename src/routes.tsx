import {createBrowserRouter} from 'react-router-dom'
import { LoginPage } from './pages/auth/login'
import Home from './app/dashboard/dashboard'

export const router = createBrowserRouter(
    [
        {path: '/', element: <LoginPage/>},
        {
            path: '/dashboard', element: <Home/>
        }
        
    ]
)