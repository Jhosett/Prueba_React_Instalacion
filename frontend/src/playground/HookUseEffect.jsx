import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { IoIosArrowBack } from "react-icons/io";

export default function HookUseEffect() {
  const navigate = useNavigate();

  const [contador, setContador] = useState(0);

  //Se ejecuta cada vez que cambia el contador
  useEffect(() => {

    console.log("El contador cambió:", contador);

    //Función de limpieza
    return () => {
      console.log("Limpiando efecto anterior...");
    };

  }, [contador]);

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
          Ejemplo de Hook useEffect
        </h1>
      </div>
      <div className="max-w-2xl mx-auto my-8 p-6 bg-slate-50 border-l-4 border-indigo-500 rounded-r-xl shadow-sm">
        <p className="text-slate-700 leading-relaxed italic">
        Su función es permitirte ejecutar "efectos secundarios" en tus componentes.
        </p>
      </div>

      <div className="bg-white p-8 rounded shadow-md text-center w-96 mx-auto">
        <p className="text-xl mb-4">
          Contador: <span className="font-bold">{contador}</span>
        </p>

        <button
          onClick={() => setContador(contador + 1)}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Incrementar
        </button>

      </div>

    </div>
  );
}