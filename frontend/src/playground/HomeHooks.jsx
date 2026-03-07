import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function HomeHooks() {

  const navigation = useNavigate();

  return (
    <div>
        <h1>HomeHooks</h1>

        {/* Agregar lo de useNavigate a través de esta pestaña */}
        <h2 onClick={() => navigation('/useState')}>Ir a UseState</h2>


    </div>
  )
}
