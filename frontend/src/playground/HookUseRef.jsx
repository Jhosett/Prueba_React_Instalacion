import React from 'react'
import { useRef } from 'react'

export default function HookUseRef() {

    //Se crea la referencia
    const inputRef = useRef(null);

    const enfocarInput = () => {
        inputRef.current.focus();
    };

  return (
    <div>
        <h1 className="text-center text-4xl font-bold m-4 text-gray-600">
            Ejemplo de Hook useRef
        </h1>

        <div className='flex items-center justify-center mt-20'>
            <div className='bg-white p-6 rounded shadow w-96 text-center'>
                <input 
                    ref={inputRef}  
                    type="text" 
                    placeholder='Escribe algo...' 
                    className='border p-2 w-full mb-4 rounded'
                />

                <button onClick={enfocarInput} className='bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded'>
                    Enfocar Input
                </button>
            </div>
        </div>
    </div>
  )
}
