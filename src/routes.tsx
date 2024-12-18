import {createBrowserRouter} from 'react-router-dom'
import { LoginPage } from './pages/auth/login'
import Home from './pages/app/dashboard/dashboard'
import Inbox from './pages/app/inbox/inbox'
import Calendar from './pages/app/calendar/calendar'
import Settings from './pages/app/settings/settings'
import Search from './pages/app/search/search'

export const router = createBrowserRouter(
    [
        {path: '/', element: <LoginPage/>},
        {
            path: '/dashboard', element: <Home/>
        },
        {
            path: '/inbox', element: <Inbox/>
        },
        {
            path: '/calendar', element: <Calendar/>
        },
        {
            path: '/search', element: <Search/>
        },
        {
            path: '/settings', element: <Settings/>
        }

        
    ]
)