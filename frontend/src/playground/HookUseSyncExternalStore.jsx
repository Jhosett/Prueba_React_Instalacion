import React, { useSyncExternalStore } from "react";
import { useNavigate } from "react-router-dom";
import { counterStore } from "../stores/conterStore";

export default function HookUseSyncExternalStore() {

  const navigate = useNavigate();

  // React se suscribe al store externo
  const count = useSyncExternalStore(
    counterStore.subscribe,
    counterStore.getSnapshot
  );

  return (
    <div className="p-5">

      <button
        onClick={() => navigate(-1)}
        className="p-2 bg-red-400 rounded-3xl m-4 font-semibold"
      >
        Home hooks
      </button>

      <h1 className="text-2xl font-bold mb-4">
        Ejemplo de useSyncExternalStore
      </h1>

      <p className="mb-4 w-[50%]">
        Este ejemplo usa un <strong>store externo</strong>. Dos componentes
        consumen el mismo estado global, por lo que cuando uno actualiza el
        contador, ambos se sincronizan automáticamente.
      </p>

      <div className="flex gap-6">

        {/* Contador A */}
        <div className="bg-gray-200 p-4 rounded shadow">
          <h2 className="font-semibold">Contador A</h2>
          <p className="text-lg">Valor: {count}</p>

          <button
            onClick={counterStore.increment}
            className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded mt-2"
          >
            Incrementar
          </button>
        </div>

        {/* Contador B */}
        <div className="bg-gray-200 p-4 rounded shadow">
          <h2 className="font-semibold">Contador B</h2>
          <p className="text-lg">Valor: {count}</p>

          <button
            onClick={counterStore.increment}
            className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded mt-2"
          >
            Incrementar
          </button>
        </div>

      </div>

    </div>
  );
}