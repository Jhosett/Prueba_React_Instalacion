import React, { useState, useTransition } from "react";
import { useNavigate } from 'react-router-dom';
import { IoIosArrowBack } from "react-icons/io";

export default function HookUseTransition() {
  const navigate = useNavigate();

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
          Ejemplo de Hook useTransition
        </h1>
      </div>
      <div className="max-w-2xl mx-auto my-8 p-6 bg-slate-50 border-l-4 border-indigo-500 rounded-r-xl shadow-sm">
        <p className="text-slate-700 leading-relaxed italic">
          Es una herramienta de gestión de prioridades en React. Te permite marcar ciertas actualizaciones de estado como
         "no urgentes", evitando que la interfaz se congele mientras se procesan cambios pesados
        </p>
      </div>

      <div className="bg-white p-6 rounded shadow w-96 mx-auto">

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