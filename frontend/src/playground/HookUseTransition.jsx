import React, { useState, useTransition } from "react";

export default function HookUseTransition() {

  const [texto, setTexto] = useState("");
  const [listaFiltrada, setListaFiltrada] = useState([]);

  const [isPending, startTransition] = useTransition();

  //Lista grande de datos
  const listaGrande = Array.from({ length: 20000 }, (_, i) => `Producto ${i + 1}`);

  const manejarCambio = (e) => {
    const valor = e.target.value;
    setTexto(valor);

    startTransition(() => {
      const resultado = listaGrande.filter((item) =>
        item.toLowerCase().includes(valor.toLowerCase())
      );

      setListaFiltrada(resultado);
    });
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 p-8">

      <h1 className="text-3xl font-bold mb-6">
        Ejemplo del Hook useTransition
      </h1>

      <div className="bg-white p-6 rounded shadow w-96">

        <input
          type="text"
          placeholder="Buscar producto..."
          value={texto}
          onChange={manejarCambio}
          className="border p-2 w-full mb-4 rounded"
        />

        {isPending && (
          <p className="text-blue-600 mb-2">
            Cargando resultados...
          </p>
        )}

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