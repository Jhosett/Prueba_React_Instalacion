import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

//Componentes
import Saludar from './playground/Component'
import HomeHooks from './playground/HomeHooks'
import HookUseNavigate from './playground/HookUseNavigate'
import HookUseState from './playground/HookUseState'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomeHooks/>}></Route>
        <Route path='/saludar' element={<Saludar/>}></Route>
        <Route path='/useState' element={<HookUseState/>}></Route>
        <Route path='/useNavigate' element={<HookUseNavigate/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
