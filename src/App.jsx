
import Header from './component/Header'
import Footer from './component/Footer'
import './App.css'
import Landingpage from './pages/Landingpage'
import WatchHistory from './pages/WatchHistory'
import Home from './pages/Home'
import {Route, Routes} from 'react-router-dom'

function App() {


  return (
    <>

    <Header/>
<Routes>
     <Route path='/' element={ <Landingpage/>} />
     <Route path='/Home' element={<Home/>}/>
     <Route path='/WatchHistory' element={<WatchHistory/>}/>
</Routes>



  <Footer/>
    </>
  )
}

export default App
