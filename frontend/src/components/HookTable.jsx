import React from 'react'
import { Link } from 'react-router-dom';

export default function HookTable() {

  //Información de contenido de la tabla de Hooks
  const hooks = [
    {
    hook: "useState",
    ruta: "/useState",
    descripcion: "Permite usar estado en componentes funcionales",
    categoria: "Estado"
    },
    {
      hook: "useNavigate",
      ruta: "/useNavigate",
      descripcion: "Permite navegar entre rutas en React Router.",
      categoria: "Navegación",
    },
    {
      hook: "useRef",
      ruta: "/useRef",
      descripcion: "Permite acceder directamente a un elemento del DOM o almacenar valores persistentes.",
      categoria: "Referencia"
    },
    {
      hook: "useTransition",
      ruta: "/useTransition",
      descripcion: "Permite marcar actualizaciones como de baja prioridad para mejorar la experiencia de usuario.",
      categoria: "Concurrencia"
    }
  ];

  return (
    <div className='w-full max-w-5xl mx-auto'>
        <table className='w-full border border-gray-300 rounded-lg overflow-hidden shadow'>
          {/* Encabezado de la tabla */}
          <thead className='bg-gray-800 text-white'>
            <tr>
              <th className='px-4 py-3 text-left'>Ruta</th>
              <th className='px-4 py-3 text-center'>Hook</th>
              <th className='px-4 py-3 text-left'>Descripción</th>
              <th className='px-4 py-3 text-center'>Categoría</th>
            </tr>
          </thead>

          {/* Cuerpo de la tabla */}
          <tbody className='bg-white'>
            {
              hooks.map((item, index) => (
                <tr key={index} className='border-t hover:bg-gray-100 transition'>
                  <td className='px-4 py-3 font-bold border border-gray-300'>
                    {item.hook}
                  </td>
                  <td className="px-4 py-3 text-center border border-gray-300">
                    <Link to={item.ruta}>
                      <button className='bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-md text-sm'>
                        Ir a ejemplo
                      </button>
                    </Link>
                  </td>
                  <td className="px-4 py-3 border border-gray-300">
                    {item.descripcion}
                  </td>
                  <td className="px-4 py-3 text-center font-semibold border border-gray-300">
                    {item.categoria}
                  </td>
                </tr>
              )
              )
            }
          </tbody>
        </table>
    </div>
  )
}
