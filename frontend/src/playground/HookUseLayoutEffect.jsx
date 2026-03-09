import React, { useState, useRef, useLayoutEffect } from "react";

export default function HookUseLayoutEffect() {

  const [ancho, setAncho] = useState(0);

  const cajaRef = useRef(null);

  useLayoutEffect(() => {
    const anchoCaja = cajaRef.current.offsetWidth;
    setAncho(anchoCaja);

    console.log("Ancho de la caja:", anchoCaja);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="bg-white p-8 rounded shadow-md text-center w-125">

        <h1 className="text-3xl font-bold mb-6">
          Ejemplo Hook useLayoutEffect
        </h1>

        <div
          ref={cajaRef}
          className="bg-blue-500 text-white p-6 rounded mb-4"
        >
          Esta es una caja que será medida con useLayoutEffect
        </div>

        <p className="text-lg">
          Ancho de la caja: <span className="font-bold">{ancho}px</span>
        </p>

      </div>

    </div>
  );
}