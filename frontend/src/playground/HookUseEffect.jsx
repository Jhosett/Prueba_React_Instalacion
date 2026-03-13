import React, { useState, useEffect } from "react";

export default function HookUseEffect() {

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
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">

      <div className="bg-white p-8 rounded shadow-md text-center w-96">

        <h1 className="text-3xl font-bold mb-6">
          Ejemplo Hook useEffect
        </h1>

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