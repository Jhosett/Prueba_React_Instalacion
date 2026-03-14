import React, { useState, useRef, useLayoutEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { IoIosArrowBack } from "react-icons/io";

export default function HookUseLayoutEffect() {
  const navigate = useNavigate();

  const [ancho, setAncho] = useState(0);

  const cajaRef = useRef(null);

  useLayoutEffect(() => {
    const anchoCaja = cajaRef.current.offsetWidth;
    setAncho(anchoCaja);

    console.log("Ancho de la caja:", anchoCaja);
  }, []);

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
          Ejemplo de Hook useLayoutEffect
        </h1>
      </div>
      <div className="max-w-2xl mx-auto my-8 p-6 bg-slate-50 border-l-4 border-indigo-500 rounded-r-xl shadow-sm">
        <p className="text-slate-700 leading-relaxed italic">
        Es una versión de useEffect que se ejecuta de forma sincrónica inmediatamente después de que React realiza los 
        cambios en el DOM, pero antes de que el navegador tenga oportunidad de pintar esos cambios en la pantalla.
        </p>
      </div>

      <div className="bg-white p-8 rounded shadow-md text-center w-125 mx-auto">
        <div
          ref={cajaRef}
          className="bg-blue-500 text-white p-6 rounded mb-4"
        >
          Esta es una caja que será medida con useLayoutEffect
        </div>

        <p className="text-lg">
          Ancho de la caja: <span className="font-bold">{ancho}px</span>
        </p>

      </div>

    </div>
  );
}