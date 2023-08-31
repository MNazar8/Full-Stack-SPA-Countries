import Home from './views/Home/Home'
import Landing from './views/Landing/Landing'
import Detail from './views/Detail/Detail'
import Form from './views/Form/form'
import {Route, Routes} from 'react-router-dom'
import './App.css'

function App() {
  return (
    <>
    <Routes>
      <Route path = "/" element={<Landing/>}/>
      <Route path = "/home" element={<Home/>}/>
      <Route path = "/form" element={<Form/>}/>
      <Route exact path = "/countries/:id" element={<Detail/>}/>
    </Routes>
    </>
  )
}

export default App
