import { useState, useOptimistic, startTransition } from 'react';
import { useNavigate } from 'react-router-dom'


// 1. Solución al NaN: Añadimos '= 0' como valor por defecto
export default function LikeButton({ initialLikes = 0 }) {
  const [likes, setLikes] = useState(initialLikes);
  
  const [optimisticLikes, addOptimisticLike] = useOptimistic(
    likes,
    (currentLikes, newAmount) => currentLikes + newAmount
  );

  const navigate = useNavigate()

  const handleReturn = () => [
    navigate(-1)
  ]

  const handleLike = async () => {
    // 2. Solución al error de consola: Envolvemos en startTransition
    startTransition(() => {
      addOptimisticLike(1); 
    });
    
    // Simulamos la llamada al servidor (espera 1 segundo)
    await new Promise(resolve => setTimeout(resolve, 1000)); 
    
    // Actualizamos el estado real
    setLikes((prevLikes) => prevLikes + 1);
  };

  return (
    <>
    <div className='p-5'>
      <button onClick={handleReturn} className='p-2 bg-red-400 rounded-3xl m-4 font-semibold'>
          <p>Home hooks</p>
      </button>
      <button onClick={handleLike} className='bg-blue-200 p-3 rounded-3xl'>
      ❤️ {optimisticLikes} Likes
      </button>
      <p className='w-[40%]'>Ideal para mejorar la experiencia de usuario (UX). Permite actualizar la interfaz de usuario de forma "optimista" 
        asumiendo que una petición asíncrona (como guardar datos) tendrá éxito, antes de que el servidor responda. 
        Si la petición falla, React revierte automáticamente la UI a su estado real.</p>
    </div>
      
    </>
    
  );
}