# Prueba_React_Instalacion
Este es un proyecto para poner a prueba la instalación de react

# Hooks implementados en la aplicación
## useDebugValue

useDebugValue es un Hook de React que permite mostrar información personalizada de un Custom Hook dentro de React Developer Tools. Su objetivo es facilitar la depuración mostrando datos relevantes sobre el estado interno del hook.

## Cómo funciona

Cuando se usa dentro de un Custom Hook, React DevTools puede mostrar información adicional que ayuda a entender qué está pasando internamente.

## Ejemplo básico:

function useOnlineStatus(status) {
  useDebugValue(status ? "Online" : "Offline");
}

La información solo aparece en React Developer Tools, no en la interfaz de usuario.

## Uso en el proyecto

En la aplicación se implementa un Custom Hook que utiliza useDebugValue para mostrar información en React DevTools, permitiendo observar el estado interno del hook durante la ejecución.

## useSyncExternalStore

useSyncExternalStore permite a React suscribirse a un store externo y sincronizar su estado con los componentes de React.

Este hook es útil cuando el estado se encuentra fuera del sistema de estado de React, como ocurre en librerías de gestión de estado global.

 ## Ejemplo del proyecto

Se creó un store externo que contiene un contador global. Dos componentes consumen ese store:

Contador A

Contador B

Ambos se suscriben al mismo estado mediante useSyncExternalStore.

Cuando uno de los contadores se actualiza, el otro se actualiza automáticamente.

Contador A: 5
Contador B: 5

Esto demuestra cómo varios componentes pueden sincronizarse con un estado global externo.

## Estructura del store

El store externo contiene tres funciones principales:

getSnapshot → devuelve el estado actual

subscribe → permite a React escuchar cambios

increment → modifica el estado y notifica a los componentes

## useId

useId es un Hook que genera identificadores únicos y estables para elementos del DOM. Su uso principal es mejorar la accesibilidad en formularios, permitiendo asociar correctamente etiquetas (label) con campos de entrada (input).

Ejemplo
const id = useId();

<label htmlFor={id}>Nombre</label>
<input id={id} />

Esto crea una relación entre ambos elementos:

label → htmlFor="id"
input → id="id"

Cuando el usuario hace clic en el label, el navegador enfoca automáticamente el input.

## Uso en el proyecto

Se creó un componente reutilizable de formulario que utiliza useId para generar identificadores únicos automáticamente. Esto permite renderizar múltiples formularios sin provocar conflictos de IDs en el DOM.

## Ejemplo de IDs generados por React:

:r0:
:r1:
:r2:
:r3:

Cada campo del formulario recibe su propio identificador único.

## Tecnologías utilizadas

React

React Router

Tailwind CSS

React Hooks