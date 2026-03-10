import { useReducer } from 'react'
import { useNavigate } from 'react-router-dom'

function HookUseReducer() {
    const navigate = useNavigate()

    const reducer = (state, action) => {
        switch (action.type) {
            case 'incrementar_edad':
                return {
                    name: state.name,
                    age: state.age + 1
                }
            case 'cambiar_nombre':
                return {
                    name: action.nextName,
                    age: state.age
                }
        }

        throw Error('accion desconocida')
    }

    const initial_state = {name: 'Angel', age: 21}

    const [state, dispatch] = useReducer(reducer, initial_state )

    const handleReturn = () => {
        navigate(-1)
    }

    function handleInputChange(e) {
        dispatch({
        type: 'cambiar_nombre',
        nextName: e.target.value
        })
    }

  return (
    <>
    <div className='grid'>
        <button onClick={handleReturn} className='p-2 bg-red-400 rounded-3xl m-4 font-semibold absolute '>
            <p>Home hooks</p>
        </button>
    </div>
        <div className='text-center bg-gray-200 w-[50%] mx-auto mt-[10%]'>
            <div className='p-3'>
                <h1>Hook UseReducer</h1>
                <p>UseReducer nos permite manejar los estados que se encuentren declarados de una variable.</p>
                <br />
                <p>Podemos cambiar el nombre en la variable y el hook de reducer se encargará de determinar el valor a asignarle SOLO si la accion esta definida, en su defecto lanza un error.</p>
                <input
                    value={state.name}
                    onChange={handleInputChange}
                    className='border-2 bg-white my-2'
                    />
                <h1>Hola, {state.name}</h1>
                <p>Edad: {state.age}</p>
                <div className=''>
                <button onClick={() => {dispatch({ type: 'incrementar_edad'})}} className='rounded-3xl bg-cyan-200 p-2 m-2'>Aumentar edad</button>
                </div>
                <p>Caso de uso por ejemplo cuando se tiene un objeto de estado con multiples propiedades que suelen cambiar al mismo tiempo, en vez de cambiar varios set (del useState), usamos useReducer con un solo dispatch </p>
            </div>
            
            
        </div>
    </>
  )
}

export default HookUseReducer