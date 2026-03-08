import React, { useRef, forwardRef, useImperativeHandle } from "react";

const InputPersonalizado = forwardRef((props, ref) => {

  const inputRef = useRef();

  useImperativeHandle(ref, () => ({
    
    enfocar: () => {
      inputRef.current.focus();
    },

    limpiar: () => {
      inputRef.current.value = "";
    }

  }));

  return (
    <input
      ref={inputRef}
      type="text"
      placeholder="Escribe algo..."
      className="border p-2 rounded w-full"
    />
  );
});

export default InputPersonalizado;