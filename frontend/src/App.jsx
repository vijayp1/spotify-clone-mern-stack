import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import LayoutPage from './components/LayoutPage'
import AboutPage from './pages/AboutPage'
import ErrorPage from './pages/ErrorPage'
import HomePage from './pages/HomePage'
import BrowsePage from './pages/BrowsePage'
import LoginPage from './pages/LoginPage'
import SingupPage from './pages/SingupPage'

const routes = [{
  path:'/',
  element:<LayoutPage/>,
  errorElement:<ErrorPage/>,
  children:[{
    path:'/',
    element:<HomePage/>
  },{
    path:'/about',
    element: <AboutPage/>
  },{
    path:'/browse',
    element:<BrowsePage/>
  }]
},{
  path:'/login',
  element:<LoginPage/>
},{
  path:'/signup',
  element:<SingupPage/>
}]
var router = createBrowserRouter(routes)
function App() {

  return (
    <RouterProvider router={router}/>
  )
}

export default App
