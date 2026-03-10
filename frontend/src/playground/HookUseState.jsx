import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function HookUseState() {
    const [count, setCount] = useState(0)
    const navigate = useNavigate()

    function aumentar() {
        setCount(count + 1);
    }

    function disminuir() {
        
        setCount(count - 1);
    }

    const handleReturn = () => [
        navigate(-1)
    ]

  return (
    <>
    <div className='grid'>
        <button onClick={handleReturn} className='p-2 bg-red-400 rounded-3xl m-4 font-semibold absolute '>
            <p>Home hooks</p>
        </button>
    </div>
        <div className='text-center bg-gray-200 w-[20%] mx-auto mt-[10%]'>
            <div className='p-2'>
                <h1>Hook UseState</h1>
                <br />
                <h1>Contador: {count}</h1>
            </div>
            
            <div className=''>
                <button onClick={aumentar} className='rounded-3xl bg-cyan-200 p-2 m-2'>Aumentar</button>
                <button onClick={disminuir} className='rounded-3xl bg-amber-200 p-2'>Disminuir</button>
            </div>
            
        </div>
    </>
  )
}
