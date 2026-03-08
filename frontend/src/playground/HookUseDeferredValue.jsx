import React, { useState, useDeferredValue } from "react";

export default function HookUseDeferredValue() {

  const [texto, setTexto] = useState("");

  const textoDiferido = useDeferredValue(texto);

  //Lista grande para simular trabajo pesado
  const lista = Array.from({ length: 15000 }, (_, i) => `Producto ${i + 1}`);

  const listaFiltrada = lista.filter(item =>
    item.toLowerCase().includes(textoDiferido.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 p-8">

      <h1 className="text-3xl font-bold mb-6">
        Ejemplo del Hook useDeferredValue
      </h1>

      <div className="bg-white p-6 rounded shadow w-96">

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