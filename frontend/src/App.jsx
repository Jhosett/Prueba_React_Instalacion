import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

//Componentes
import Saludar from './playground/Component'
import HomeHooks from './playground/HomeHooks'
import HookUseNavigate from './playground/HookUseNavigate'
import HookUseState from './playground/HookUseState'
import HookUseRef from './playground/HookUseRef'
import HookUseTransition from './playground/HookUseTransition'
import HookUseMemo from './playground/HookUseMemo'
import HookUseCallback from './playground/HookUseCallback'
import HookUseImperativeHandle from './playground/HookUseImperativeHandle'
import HookUseDeferredValue from './playground/HookUseDeferredValue'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomeHooks/>}></Route>
        <Route path='/saludar' element={<Saludar/>}></Route>
        <Route path='/useState' element={<HookUseState/>}></Route>
        <Route path='/useNavigate' element={<HookUseNavigate/>}></Route>
        <Route path='/useRef' element={<HookUseRef/>}></Route>
        <Route path='/useImperativeHandle' element={<HookUseImperativeHandle/>}></Route>
        <Route path='/useMemo' element={<HookUseMemo/>}></Route>
        <Route path='/useCallback' element={<HookUseCallback/>}></Route>
        <Route path='/useTransition' element={<HookUseTransition/>}></Route>
        <Route path='/useDeferredValue' element={<HookUseDeferredValue/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
