import React from 'react'
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import { IoIosArrowBack } from "react-icons/io";

export default function HookUseRef() {

    //Se crea la referencia
    const inputRef = useRef(null);

    const enfocarInput = () => {
        inputRef.current.focus();
    };

    const navigate = useNavigate();

  return (
    <div>
        <div className="relative flex items-center justify-center mb-8">
            <button onClick={() => navigate(-1)} className="absolute left-0 flex items-center gap-1 text-gray-500 hover:text-indigo-600 transition-colors font-medium">
                <IoIosArrowBack className='text-3xl'/>
                <span className='text-xl'>Atrás</span>
            </button>
            <h1 className="text-center text-4xl font-bold m-4 text-gray-600">
                Ejemplo de Hook useRef
            </h1>
        </div>
        <div className='max-w-2xl mx-auto my-8 p-6 bg-slate-50 border-l-4 border-indigo-500 rounded-r-xl shadow-sm'>
            <p className='text-slate-700 leading-relaxed italic'>
            Es el "compartimento secreto" de tu componente. Es un Hook que te permite crear una referencia persistente
            a un valor o a un elemento del DOM, con una característica clave: modificarlo no provoca un nuevo renderizado.
            </p>
        </div>

        <div className='flex items-center justify-center mt-10'>
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
