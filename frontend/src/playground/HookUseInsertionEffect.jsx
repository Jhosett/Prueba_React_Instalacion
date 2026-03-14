import React, { useState, useInsertionEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { IoIosArrowBack } from "react-icons/io";

export default function HookUseInsertionEffect() {
  const navigate = useNavigate();

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
          Ejemplo de Hook useInsertionEffect
        </h1>
      </div>
      <div className="max-w-2xl mx-auto my-8 p-6 bg-slate-50 border-l-4 border-indigo-500 rounded-r-xl shadow-sm">
        <p className="text-slate-700 leading-relaxed italic">
        Sirve para insertar elementos de estilo en el documento antes de que React calcule el diseño 
        de los componentes.
        </p>
      </div>

      <div className="dynamic-box w-64 mx-auto">
        Caja con estilo dinámico
      </div>

      <div className="flex justify-center my-2">
        <button
          onClick={() => setColor(color === "blue" ? "green" : "blue")}
          className="bg-black text-white px-4 py-2 rounded mx-auto"
        >
          Cambiar color
        </button>
      </div>

    </div>
  );
}