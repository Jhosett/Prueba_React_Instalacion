import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

//Crear el contexto
const ThemeContext = createContext();

//Componente hijo que usa el contexto
function ThemeDisplay() {

  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      className={
        theme === "dark"
          ? "bg-black text-white p-5 rounded mt-4"
          : "bg-gray-200 text-black p-5 rounded mt-4"
      }
    >
      <p className="font-semibold">Tema actual: {theme}</p>

      <button
        onClick={toggleTheme}
        className="bg-blue-500 text-white px-3 py-2 rounded mt-3"
      >
        Cambiar tema
      </button>
    </div>
  );
}

//Componente principal
export default function HookUseContext() {

  const navigate = useNavigate();
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>

      <div className="p-5">

        <button
          onClick={() => navigate(-1)}
          className="p-2 bg-red-400 rounded-3xl m-4 font-semibold"
        >
          Home hooks
        </button>

        <h1 className="text-xl font-bold mb-4">useContext</h1>

        <p className="w-[40%]">
          useContext permite acceder a datos compartidos entre múltiples
          componentes sin necesidad de pasar props manualmente. En este ejemplo,
          el contexto se utiliza para manejar el tema de la aplicación
          (claro u oscuro).
        </p>

        {/* Componente que consume el contexto */}
        <ThemeDisplay />

      </div>

    </ThemeContext.Provider>
  );
}