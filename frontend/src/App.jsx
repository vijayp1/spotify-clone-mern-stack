import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import axios from 'axios'
import LayoutPage from './components/LayoutPage'
import AboutPage from './pages/AboutPage'
import ErrorPage from './pages/ErrorPage'
import HomePage from './pages/HomePage'
import BrowsePage from './pages/BrowsePage'
import LoginPage from './pages/LoginPage'
import SingupPage from './pages/SingupPage'
import CreatePlaylistPage from './pages/CreatePlaylistPage'
import PrivateRoute from './components/PrivateRoute'
import SelectedCategoryPage from './pages/SelectedCategoryPage'
import PlaySongPage from './pages/PlaySongPage'
import SongsListPage from './pages/SongsListPage'


const routes = [{
  path:'/',
  element:<LayoutPage/>,
  errorElement:<ErrorPage/>,
  children:[{
    path:'/',
    element:<HomePage/>,
    loader: async function(){
      const artists = (await axios.get('/api/artists')).data
      const songs = (await axios.get('/api/songs')).data
      return { artists, songs}
    }
  },{
    path:'/browse',
    element:<BrowsePage/>,
    loader: async function() {
      const res = await axios.get('/api/genre')
      const data = res.data
      // console.log("c:",data)
      return { data }
    }
  },{
    path:'/create-playlist',
    element:<CreatePlaylistPage/>
  },{
    path:'/genre/:id',
    element:<SelectedCategoryPage/>
  },{
    path:'/song/:id',
    element:<PlaySongPage/>,
    loader: async function({ params }) {
      const { id } = params
      const {data} = await axios.get('/api/songData/'+id)

      const ids = data?.artists
      console.log("data: ",data)
      const res = await axios.post('/api/artists',{ids})
      const artists = res.data

      return {data, artists}
      
    }
  },{
    path:'/collection/:type/:name',
    element:<SongsListPage/>,
    loader: async function({params}) {
      const { type,name } = params
      if(type=="album"){
        const {data} = await axios.get('/api/albumData/'+name)
        console.log("A:",data)
        return {data,type}
      }
      else if(type=="artist"){
        const {data} = await axios.get('/api/artistData/'+name)
        console.log("data: ",data)
        return { data,type }
      }
    }
  }]
},{
  path:'/login',
  element:<LoginPage/>
},{
  path:'/signup',
  element:<SingupPage/>
},{
  path:'/about',
  element: <AboutPage/>
}]
var router = createBrowserRouter(routes)
function App() {

  return (
    <RouterProvider router={router}/>
  )
}

export default App
