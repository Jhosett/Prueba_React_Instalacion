import React, { useState, useMemo } from "react";

export default function HookUseMemo() {

  const [numero, setNumero] = useState(0);
  const [texto, setTexto] = useState("");

  //Lista grande de números
  const listaNumeros = Array.from({ length: 10000 }, (_, i) => i + 1);

  //Cálculo costoso memorizado
  const numerosPares = useMemo(() => {
    console.log("Calculando números pares...");
    return listaNumeros.filter(num => num % 2 === 0);
  }, [listaNumeros]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">

      <h1 className="text-3xl font-bold mb-6">
        Ejemplo del Hook useMemo
      </h1>

      <div className="bg-white p-6 rounded shadow w-96 text-center">

        <p className="mb-4">
          Total de números pares encontrados:
        </p>

        <p className="text-2xl font-bold mb-6">
          {numerosPares.length}
        </p>

        <button
          onClick={() => setNumero(numero + 1)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded mb-4"
        >
          Re-render componente
        </button>

        <input
          type="text"
          placeholder="Escribe algo..."
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          className="border p-2 w-full rounded"
        />

      </div>

    </div>
  );
}