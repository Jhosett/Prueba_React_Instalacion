import React, { useState, useCallback } from "react";

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
  const [contador, setContador] = useState(0);
  const [texto, setTexto] = useState("");

  //Función memorizada
  const incrementar = useCallback(() => {
    setContador((prev) => prev + 1);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">

      <h1 className="text-3xl font-bold mb-6">
        Ejemplo del Hook useCallback
      </h1>

      <div className="bg-white p-6 rounded shadow text-center w-96">

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