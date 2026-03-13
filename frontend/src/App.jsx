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
import HookUseEffect from './playground/HookUseEffect'
import HookUseLayoutEffect from './playground/HookUseLayoutEffect'
import HookUseInsertionEffect from './playground/HookUseInsertionEffect'
import HookUseReducer from './playground/HookUseReducer'
import HookUse from './playground/HookUse'
import HookUseOptimistic from './playground/HookUseOptimistic'
import HookUseFormStatus from './playground/HookUseFormStatus'
import HookUseActionState from './playground/HookUseActionState'
import HookUseDebugValue from './playground/HookUseDebugValue'
import HookUseContext from './playground/HookUseContex'


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
        <Route path='/useEffect' element={<HookUseEffect/>}></Route>
        <Route path='/useLayoutEffect' element={<HookUseLayoutEffect/>}></Route>
        <Route path='/useInsertionEffect' element={<HookUseInsertionEffect/>}></Route>
        <Route path='/useReducer' element={<HookUseReducer/>}></Route>
        <Route path='/use' element={<HookUse/>}></Route>
        <Route path='/useOptimistic' element={<HookUseOptimistic/>}></Route>
        <Route path='/useFormStatus' element={<HookUseFormStatus/>}></Route>
        <Route path='/useActionState' element={<HookUseActionState/>}></Route>
        <Route path="/useDebugValue" element={<HookUseDebugValue/>}></Route>
        <Route path="/useContext" element={<HookUseContext/>}></Route> 
      </Routes>
    </BrowserRouter>
  )
}

export default App
