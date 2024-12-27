import { RouterProvider } from 'react-router-dom'
import { router } from './routes'
import './App.css'
import { HelmetProvider,Helmet } from 'react-helmet-async'

export function App() {

  return (
    <HelmetProvider>
      <Helmet titleTemplate="%s | Inventiva Apps"  />  
      <RouterProvider router={router}/>
    </HelmetProvider>
 
  )
}

export default App
