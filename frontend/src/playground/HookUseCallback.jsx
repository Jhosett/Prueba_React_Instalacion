import React, { useState, useCallback } from "react";
import { useNavigate } from 'react-router-dom';
import { IoIosArrowBack } from "react-icons/io";

const BotonHijo = React.memo(({ onClick, texto }) => {
  console.log("Renderizando botón:", texto);

  return (
    <button
      onClick={onClick}
      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded mr-2"
    >
      {texto}
    </button>
  );
});

export default function HookUseCallback() {
  const navigate = useNavigate();

  const [contador, setContador] = useState(0);
  const [texto, setTexto] = useState("");

  //Función memorizada
  const incrementar = useCallback(() => {
    setContador((prev) => prev + 1);
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
          Ejemplo de Hook useCallback
        </h1>
      </div>
      <div className="max-w-2xl mx-auto my-8 p-6 bg-slate-50 border-l-4 border-indigo-500 rounded-r-xl shadow-sm">
        <p className="text-slate-700 leading-relaxed italic">
          Es el compañero de optimización de useMemo, pero con una diferencia clave: en lugar de memorizar un resultado,
          memoriza la definición de una función.
        </p>
      </div>

      <div className="bg-white p-6 rounded shadow text-center w-96 mx-auto">

        <p className="text-xl mb-4">
          Contador: {contador}
        </p>

        <BotonHijo
          onClick={incrementar}
          texto="Incrementar contador"
        />

        <div className="mt-6">
          <input
            type="text"
            placeholder="Escribe algo..."
            value={texto}
            onChange={(e) => setTexto(e.target.value)}
            className="border p-2 w-full rounded"
          />
        </div>

      </div>

    </div>
  );
}