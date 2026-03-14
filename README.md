# Prueba_React_Instalacion
Este es un proyecto para poner a prueba la instalación de react

# Hooks implementados en la aplicación
# Referencias - Darwin
## Hook useRef
*Descripción:* Crea una "caja" persistente que guarda un valor entre renderizados sin disparar una actualización visual al cambiar.
*Uso:* Acceso directo al DOM (enfocar un input) o guardar IDs de temporizadores.
### Ejemplo implementado

Se creó un input que puede ser enfocado mediante un botón.

*Funcionamiento*

* Se crea una referencia con useRef.

* La referencia se asigna al input.

* Al presionar el botón se ejecuta focus() sobre el input.

Este ejemplo demuestra cómo acceder directamente a elementos del DOM en React.

## Hook useImperativeHandle
*Descripción:* Personaliza qué funciones o valores expone un componente hijo a su padre cuando este usa una ref
*Uso:* Crear APIs limpias para componentes hijos (ej: un modal que solo expone abrir() y cerrar()).
### Ejemplo implementado

Se creó un componente input personalizado controlado por el componente padre.

*Funcionamiento*

* El componente hijo define funciones enfocar y limpiar.

* Estas funciones se exponen usando useImperativeHandle.

* El componente padre accede a estas funciones mediante una referencia.

* Al presionar botones en el padre se ejecutan las funciones del hijo.

Este ejemplo demuestra cómo un componente padre puede controlar directamente comportamientos internos de un componente hijo.

## Hook useMemo
*Descripción:* Memoriza el resultado de un cálculo costoso para no repetirlo a menos que sus dependencias cambien.
*Uso:* Filtrar o procesar listas gigantes de datos.
### Ejemplo implementado

Se creó una lista grande de elementos que se filtra según un texto ingresado.

*Funcionamiento*

* El usuario escribe en un campo de búsqueda.

* Se filtra una lista grande de datos.

* El filtrado se memoriza usando useMemo.

* El cálculo solo se vuelve a ejecutar cuando cambia el texto de búsqueda.

Este ejemplo demuestra cómo optimizar rendimiento en operaciones costosas.

## Hook useCallback
*Descripción:* Memoriza la instancia de una función para que no se cree de nuevo en cada renderizado
*Uso:* Pasar funciones a componentes hijos optimizados con React.memo para evitar que se re-rendericen sin motivo
### Ejemplo implementado

Se creó un contador con una función que incrementa el valor.

*Funcionamiento*

* Se define una función incrementar.

* La función se memoriza usando useCallback.

* La función solo se recrea cuando cambian sus dependencias.

Este ejemplo demuestra cómo evitar renders innecesarios en componentes hijos.

## Hook useTransition
*Descripción:* Marca una actualización de estado como "no urgente", permitiendo que React priorice interacciones inmediatas (como escribir).
*Uso:* Filtrar una lista pesada mientras el usuario sigue escribiendo sin lag.
### Ejemplo implementado

Se creó un buscador que filtra una lista grande de datos.

*Funcionamiento*

* El usuario escribe en un input.

* React actualiza el texto inmediatamente.

* El filtrado de la lista se ejecuta como transición.

Esto permite que la interfaz no se bloquee mientras se realiza el cálculo.

## Hook useDeferredValue
*Descripción:* Retrasa la actualización de un valor específico para que otras partes de la UI más importantes carguen primero
*Uso:* Cuando recibes una prop "pesada" y no quieres que bloquee el renderizado principal.
### Ejemplo implementado

Se creó un buscador que filtra miles de elementos.

*Funcionamiento*

* El usuario escribe en el campo de búsqueda.

* El valor inmediato cambia rápidamente.

* El valor diferido se actualiza después.

* El filtrado utiliza el valor diferido.

Esto permite que el input responda rápidamente mientras el filtrado ocurre en segundo plano.

# Performance - Darwin
## Hook useMemo
*Descripción:* Memoriza el resultado de un cálculo costoso para no repetirlo a menos que sus dependencias cambien
*Uso:* Filtrar o procesar listas gigantes de datos.
### Ejemplo implementado

Se creó una lista grande de elementos que se filtra según un texto ingresado.

*Funcionamiento*

* El usuario escribe en un campo de búsqueda.

* Se filtra una lista grande de datos.

* El filtrado se memoriza usando useMemo.

* El cálculo solo se vuelve a ejecutar cuando cambia el texto de búsqueda.

Este ejemplo demuestra cómo optimizar rendimiento en operaciones costosas.

## Hook useCallback
*Descripción:* Memoriza la instancia de una función para que no se cree de nuevo en cada renderizado.
*Uso:* Pasar funciones a componentes hijos optimizados con React.memo para evitar que se re-rendericen sin motivo.
### Ejemplo implementado

Se creó un contador con una función que incrementa el valor.

*Funcionamiento*

* Se define una función incrementar.

* La función se memoriza usando useCallback.

* La función solo se recrea cuando cambian sus dependencias.

Este ejemplo demuestra cómo evitar renders innecesarios en componentes hijos.



# Efectos/Ciclo de vida - Darwin
## Hook useEffect
*Descripción:* Ejecuta código después de que el componente se pinta en pantalla. Es asíncrono.
*Uso:* Llamadas a APIs, suscripciones o cambiar el título del documento.
### Ejemplo implementado

En el proyecto se creó un contador que ejecuta un efecto cada vez que cambia su valor.

*Funcionamiento*

* El componente tiene un estado contador.

* Cuando el contador cambia, useEffect se ejecuta.

* En la consola se imprime el nuevo valor.

* Antes de ejecutar el nuevo efecto, se ejecuta una función de limpieza.

Este ejemplo demuestra cómo React controla efectos que dependen de cambios en el estado.

## Hook useLayoutEffect
*Descripción:* Se ejecuta antes de que el navegador pinte el cambio. Es sincrónico y bloquea el pintado.
*Uso:* Medir el tamaño de un elemento para posicionar otro sin que el usuario vea un parpadeo.
### Ejemplo implementado

Se creó una caja que mide su propio ancho utilizando una referencia (useRef).

*Funcionamiento*

* Se renderiza una caja en pantalla.

* useLayoutEffect obtiene el ancho real del elemento usando offsetWidth.

* El ancho se guarda en un estado.

* El valor se muestra en pantalla.

Este ejemplo demuestra cómo se puede acceder al DOM inmediatamente después del render pero antes de que se muestre en pantalla.

## Hook useInsertionEffect
*Descripción:* Se ejecuta antes que cualquier otro efecto y antes de los cambios en el DOM.
*Uso:* Exclusivo para bibliotecas de CSS-in-JS para inyectar etiquetas <style>
### Ejemplo implementado

Se creó una caja cuyo estilo se inserta dinámicamente en el documento.

*Funcionamiento*

* El estado color controla el color de la caja.

* useInsertionEffect crea una etiqueta <style> en el documento.

* El estilo define el color de fondo.

* Cuando cambia el color, el estilo anterior se elimina y se inserta uno nuevo.

Este ejemplo demuestra cómo los estilos pueden ser insertados antes del renderizado final del layout.

# Hooks - Juan Carlos Melo
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

# Hooks - Angel Boada
## 1. use
Este hook permite leer el valor de un recurso, como una Promesa o un Contexto, directamente durante el renderizado del componente. Si el recurso no se ha resuelto, el componente suspende su ejecución.

* *Característica principal:* A diferencia del resto de los hooks de React, use puede ser invocado de manera condicional (dentro de bloques if o bucles).
* *Caso de uso principal:* Lectura de datos asíncronos provenientes del servidor para renderizarlos sin necesidad de gestionar estados (useState) o efectos (useEffect) de forma manual.

## 2. useOptimistic
Proporciona una forma de actualizar la interfaz de usuario de manera inmediata tras una interacción del usuario, asumiendo que la petición asíncrona subyacente será exitosa.

* *Característica principal:* Si la comunicación con el servidor falla, el hook revierte automáticamente la interfaz al estado original. Para funcionar correctamente, la actualización del estado debe ejecutarse dentro de un startTransition o una Acción de React.
* *Caso de uso principal:* Mejorar la percepción de velocidad en interacciones comunes, como dar "Me gusta" a un elemento o marcar una tarea como completada.

## 3. useFormStatus
Permite conocer el estado actual de envío de un formulario sin necesidad de declarar variables de estado adicionales ni pasar propiedades entre componentes.

* *Característica principal:* Expone la propiedad pending, la cual indica si el formulario está en proceso de envío. Por diseño, este hook debe ser utilizado estrictamente dentro de un componente que sea hijo directo o descendiente de la etiqueta <form>.
* *Caso de uso principal:* Deshabilitar botones de envío y mostrar indicadores de carga de forma automática mientras el servidor procesa los datos.

## 4. useActionState
Este hook está diseñado para gestionar el resultado devuelto tras el envío de un formulario mediante Server Actions. 

* *Característica principal:* Recibe la función de la acción del formulario y un estado inicial. Devuelve el estado actualizado con la respuesta del servidor (incluyendo posibles errores o mensajes de éxito), la nueva acción a vincular en el formulario y el estado de carga.
* *Caso de uso principal:* Manejo de validaciones, visualización de errores y confirmaciones en procesos como inicios de sesión, registros o envío de información.