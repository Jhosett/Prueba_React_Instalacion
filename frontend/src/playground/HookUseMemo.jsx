import React, { useState, useMemo } from "react";
import { useNavigate } from 'react-router-dom';
import { IoIosArrowBack } from "react-icons/io";

export default function HookUseMemo() {
  const navigate = useNavigate();

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
          Ejemplo de Hook useMemo
        </h1>
      </div>
      <div className="max-w-2xl mx-auto my-8 p-6 bg-slate-50 border-l-4 border-indigo-500 rounded-r-xl shadow-sm">
        <p className="text-slate-700 leading-relaxed italic">
          Es la herramienta de optimización de rendimiento de React que sirve para "memorizar" el resultado de un cálculo 
          costoso.
        </p>
      </div>

      <div className="bg-white p-6 rounded shadow w-96 text-center mx-auto">

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