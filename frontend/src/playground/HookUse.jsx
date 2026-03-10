import { use, Suspense } from 'react'
import { useNavigate } from 'react-router-dom'

// simulamos la respuesta desde una API
const fetchMessage = () => new Promise(resolve => setTimeout(() => resolve("¡Hola desde el servidor!"), 2000));

function MessageComponent({ messagePromise }) {
  // 'use' pausa el renderizado hasta que la promesa se resuelva
  const message = use(messagePromise);
  return <p>{message}</p>;
}

export default function App() {
  const promise = fetchMessage();
  const navigate = useNavigate()

  const handleReturn = () => [
    navigate(-1)
  ]
  return (
    <>
    <div className='p-4'>
        <button onClick={handleReturn} className='p-2 bg-red-400 rounded-3xl m-4 font-semibold'>
            <p>Home hooks</p>
        </button>
        <Suspense fallback={<p>Cargando mensaje...</p>}>
            <MessageComponent messagePromise={promise} />
        </Suspense>

        <h1 className='w-[50%] mt-2'>A diferencia de los hooks tradicionales, 
            Use permite leer el valor de un recurso (como una Promesa o un Contexto) 
            directamente durante el renderizado. Lo más revolucionario es que se puede llamar 
            condicionalmente (dentro de un if o un bucle). Si se pasa una Promesa que aún no se ha resuelto, 
            el componente se "suspenderá" y mostrará el fallback del Suspense más cercano.</h1>
    </div>
        
    </>
    
  );
}