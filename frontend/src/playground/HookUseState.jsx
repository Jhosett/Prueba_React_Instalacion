import React from 'react'
import { useState } from 'react'

export default function HookUseState() {
    const [count, setCount] = useState(0)

    function aumentar() {
        setCount(count + 1);
    }

    function disminuir() {
        setCount(count - 1);
    }

  return (
    <div>
        <h1>HoookUseState</h1>
        <h1>Contador = {count}</h1>
        <button onClick={aumentar}>Aumentar</button>
        <button onClick={disminuir}>Disminuir</button>
    </div>
  )
}
