import React, { useRef } from "react";
import InputPersonalizado from "./InputPersonalizado";

export default function HookUseImperativeHandle() {

  const inputRef = useRef();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">

      <h1 className="text-3xl font-bold mb-6">
        Ejemplo de useImperativeHandle
      </h1>

      <div className="bg-white p-6 rounded shadow w-96">

        <InputPersonalizado ref={inputRef} />

        <div className="mt-4 flex gap-2">

          <button
            onClick={() => inputRef.current.enfocar()}
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            Enfocar
          </button>

          <button
            onClick={() => inputRef.current.limpiar()}
            className="bg-red-600 text-white px-4 py-2 rounded"
          >
            Limpiar
          </button>

        </div>

      </div>

    </div>
  );
}