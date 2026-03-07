import React from 'react'
import { useNavigate } from 'react-router-dom'
import HookTable from '../components/HookTable';

export default function HomeHooks() {

  const navigation = useNavigate();

  return (
    <div>
      <h1 className="text-center text-4xl font-bold m-4 text-gray-800">HomeHooks</h1>
      <h2 className='text-2xl text-center font-bold my-8 text-gray-500'>Ejemplos de Hooks de React</h2>
      <HookTable/>

      {/* Agregar lo de useNavigate a través de esta pestaña */}
      {/* <h2 className="text-2xl cursor-pointer" onClick={() => navigation('/useState')}>Ir a UseState</h2> */}


    </div>
  )
}
