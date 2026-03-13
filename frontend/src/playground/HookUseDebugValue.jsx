import { useState, useDebugValue } from "react";
import { useNavigate } from "react-router-dom";

function useCounter() {
    const [count, setCount] = useState(0);

    const debugMessage = `Contador actual: ${count}`;

    useDebugValue(debugMessage);

    return { count, setCount, debugMessage };
}

export default function UseDebugValue() {

    const { count, setCount, debugMessage } = useCounter();
    const navigate = useNavigate();

    return (
        <div className="p-5">

            <button
                onClick={() => navigate(-1)}
                className="p-2 bg-red-400 rounded-3xl m-4 font-semibold"
            >
                Home hooks
            </button>

            <h1 className="text-xl font-bold mb-4">useDebugValue</h1>

            <button
                onClick={() => setCount(count + 1)}
                className="bg-blue-200 p-3 rounded-3xl"
            >
                Contador: {count}
            </button>

            {/* Panel visual de debug */}
            <div className="mt-6 p-4 border rounded-lg bg-gray-900 text-green-400 font-mono w-[40%]">
                <p>🛠 Debug Console</p>
                <p>{debugMessage}</p>
            </div>

            <p className="w-[40%] mt-4">
                useDebugValue permite mostrar información personalizada de un Custom Hook
                dentro de React DevTools para facilitar la depuración.
                Cómo verlo en React DevTools
            </p>

            <div className="w-[40%] mt-4">
                <p className="font-semibold">Cómo verlo en React DevTools:</p>
                <ul className="list-disc ml-6">
                    <li>Instalar React Developer Tools</li>
                    <li>Abrir la aplicación React</li>
                    <li>Presionar F12 para abrir DevTools</li>
                    <li>Ir a la pestaña Components ⚛</li>
                    <li>Seleccionar el componente</li>
                    <li>Revisar la sección Hooks</li>
                </ul>
            </div>

        </div>
    );
}