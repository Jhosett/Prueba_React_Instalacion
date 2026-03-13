import React, { useState, useInsertionEffect } from "react";

export default function HookUseInsertionEffect() {

  const [color, setColor] = useState("blue");

  useInsertionEffect(() => {

    const style = document.createElement("style");

    style.innerHTML = `
      .dynamic-box {
        background-color: ${color};
        color: white;
        padding: 20px;
        border-radius: 8px;
        text-align: center;
        transition: background-color 0.3s;
      }
    `;

    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };

  }, [color]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 gap-6">

      <h1 className="text-3xl font-bold">
        Ejemplo Hook useInsertionEffect
      </h1>

      <div className="dynamic-box w-64">
        Caja con estilo dinámico
      </div>

      <button
        onClick={() => setColor(color === "blue" ? "green" : "blue")}
        className="bg-black text-white px-4 py-2 rounded"
      >
        Cambiar color
      </button>

    </div>
  );
}