import {createBrowserRouter} from 'react-router-dom'
import { LoginPage } from './pages/auth/login'
import { Dashboard } from './pages/app/dashboard'
export const router = createBrowserRouter(
    [
        {path: '/', element: <LoginPage/>},
        {path: '/dashboard', element: <Dashboard/>}
        
    ]
)