import { useActionState } from 'react'
import { useNavigate } from 'react-router-dom'

// Acción simulada (podría ser un Server Action)
async function registerUser(previousState, formData) {
  const name = formData.get('name');
  if (name.length < 3) {
    return { error: 'El nombre debe tener al menos 3 letras.' };
  }
  return { success: `¡Usuario ${name} registrado con éxito!` };
}

export default function RegisterForm() {
  // Retorna el estado actual, la acción para el form, y si está pendiente (React 19)
  const [state, formAction, isPending] = useActionState(registerUser, null);
  const navigate = useNavigate()

  const handleReturn = () => [
    navigate(-1)
  ]

  return (
    <>
        <button onClick={handleReturn} className='p-2 bg-red-400 rounded-3xl m-4 font-semibold'>
          <p>Home hooks</p>
        </button>
      <form action={formAction}>
        <input type="text" name="name" placeholder="Tu nombre" className='border-2 m-2' />
        <button type="submit" disabled={isPending} className='p-2 bg-slate-200 m-2 rounded-3xl'>Registrar</button>
      
        {/* Mostramos el resultado de la acción */}
        {state?.error && <p className='text-red-600 ml-2'>{state.error}</p>}
        {state?.success && <p className='text-green-600 ml-2'>{state.success}</p>}
    </form>
    <p className='w-[30%] p-3'>Permite actualizar el estado basado en el resultado de una acción de formulario (Form Action). Toma una función de acción y un estado inicial, 
      y devuelve el estado actual (ej. mensajes de error o éxito del servidor) y una nueva función que se debe pasar al atributo action del formulario.</p>
    </>
    
  );
}