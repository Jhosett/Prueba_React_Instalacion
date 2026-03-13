import { useFormStatus } from 'react-dom';
import { useNavigate } from 'react-router-dom'


function SubmitButton() {
  // Lee el estado del formulario padre
  const { pending } = useFormStatus();

  return (
    <button type="submit" disabled={pending} className='bg-amber-200 p-2 rounded-3xl cursor-pointer'>
      {pending ? 'Guardando...' : 'Guardar Datos'}
    </button>
  );
}

export default function MyForm() {
  const action = async () => {
    await new Promise(resolve => setTimeout(resolve, 2000)); // Simula envío
  };

  const navigate = useNavigate()

  const handleReturn = () => [
    navigate(-1)
  ]

  return (
    <>
        <button onClick={handleReturn} className='p-2 bg-red-400 rounded-3xl m-4 font-semibold'>
          <p>Home hooks</p>
        </button>
      <form action={action}>
        <input type="text" name="username" placeholder="Tu nombre" className='border-2 mx-2'/>
        {/* El botón debe ser un componente separado para usar useFormStatus */}
        <SubmitButton />
      </form>
      <p className='w-[30%] p-2'>Este hook da información sobre el estado del envío del formulario padre más cercano. Es perfecto para saber si un 
        formulario está en proceso de envío (pending) sin tener que crear estados isLoading manuales ni pasar props. 
        Nota: Debe usarse dentro de un componente hijo del form, no en el componente que declara el formulario.</p>
    </>
    
  );
}