import React, { useState, useDeferredValue } from "react";
import { useNavigate } from 'react-router-dom';
import { IoIosArrowBack } from "react-icons/io";

export default function HookUseDeferredValue() {
  const navigate = useNavigate();

  const [texto, setTexto] = useState("");

  const textoDiferido = useDeferredValue(texto);

  //Lista grande para simular trabajo pesado
  const lista = Array.from({ length: 15000 }, (_, i) => `Producto ${i + 1}`);

  const listaFiltrada = lista.filter(item =>
    item.toLowerCase().includes(textoDiferido.toLowerCase())
  );

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
          Ejemplo de Hook useDeferredValue
        </h1>
      </div>
      <div className="max-w-2xl mx-auto my-8 p-6 bg-slate-50 border-l-4 border-indigo-500 rounded-r-xl shadow-sm">
        <p className="text-slate-700 leading-relaxed italic">
        Es muy similar a useTransition, pero con una diferencia fundamental: mientras useTransition te da una función para
        envolver una acción, useDeferredValue se aplica directamente sobre un valor.
        </p>
      </div>

      <div className="bg-white p-6 rounded shadow w-96 mx-auto">

        <input
          type="text"
          placeholder="Buscar producto..."
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          className="border p-2 w-full mb-4 rounded"
        />

        <p className="text-sm text-gray-500 mb-2">
          Valor inmediato: {texto}
        </p>

        <p className="text-sm text-blue-600 mb-4">
          Valor diferido: {textoDiferido}
        </p>

        <ul className="max-h-60 overflow-y-auto text-sm">

          {listaFiltrada.slice(0, 20).map((item, index) => (
            <li key={index} className="border-b p-1">
              {item}
            </li>
          ))}

        </ul>

      </div>

    </div>
  );
}