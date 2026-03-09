import React, { useRef } from "react";
import InputPersonalizado from "./InputPersonalizado";
import { useNavigate } from 'react-router-dom';
import { IoIosArrowBack } from "react-icons/io";

export default function HookUseImperativeHandle() {
  const inputRef = useRef();
  const navigate = useNavigate();

  return (
    <div>
      <div className="relative flex items-center justify-center mb-8">
        <button
          onClick={() => navigate(-1)}
          className="absolute left-0 flex items-center gap-1 text-gray-500 hover:text-indigo-600 transition-colors font-medium"
        >
          <IoIosArrowBack className="text-3xl" />
          <span className="text-xl">Atrás</span>
        </button>
        <h1 className="text-center text-4xl font-bold m-4 text-gray-600">
          Ejemplo de Hook useRef
        </h1>
      </div>
      <div className="max-w-2xl mx-auto my-8 p-6 bg-slate-50 border-l-4 border-indigo-500 rounded-r-xl shadow-sm">
        <p className="text-slate-700 leading-relaxed italic">
          Es el "puente de control" personalizado. Es un Hook que se usa para personalizar el valor o las funciones 
          que un componente padre puede ver cuando usa una referencia (ref) de un componente hijo.
        </p>
      </div>

      <div className="bg-white p-6 rounded shadow w-96 mx-auto">
        <InputPersonalizado ref={inputRef} />

        <div className="mt-4 flex gap-2">
          <button
            onClick={() => inputRef.current.enfocar()}
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            Enfocar
          </button>

          <button
            onClick={() => inputRef.current.limpiar()}
            className="bg-red-600 text-white px-4 py-2 rounded"
          >
            Limpiar
          </button>
        </div>
      </div>
    </div>
  );
}
