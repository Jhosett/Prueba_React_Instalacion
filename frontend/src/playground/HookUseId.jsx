import React, { useId, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function HookUseId() {

  const navigate = useNavigate();

  const nameId = useId();
  const emailId = useId();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [users, setUsers] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      id: crypto.randomUUID(),
      name,
      email,
      nameInputId: nameId,
      emailInputId: emailId
    };

    setUsers([...users, newUser]);

    setName("");
    setEmail("");
  };

  return (
    <div className="p-5">

      <button
        onClick={() => navigate(-1)}
        className="p-2 bg-red-400 rounded-3xl m-4 font-semibold"
      >
        Home hooks
      </button>

      <h1 className="text-2xl font-bold mb-6">
        Ejemplo de useId
      </h1>

      <p className="mb-6 w-[60%]">
        El hook <strong>useId</strong> genera identificadores únicos que se
        utilizan para asociar elementos como <strong>label</strong> e
        <strong> input</strong>. En este ejemplo, cada envío del formulario
        registra los datos junto con los IDs generados.
      </p>

      <div className="flex gap-10">

        {/* FORMULARIO */}

        <form
          onSubmit={handleSubmit}
          className="bg-gray-200 p-6 rounded shadow w-[350px]"
        >

          <div className="mb-4">

            <label htmlFor={nameId} className="block font-semibold">
              Nombre
            </label>

            <input
              id={nameId}
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              className="border p-2 w-full rounded mt-1"
              placeholder="Tu nombre"
            />

            <p className="text-xs mt-1">
              ID generado: <span className="font-mono">{nameId}</span>
            </p>

          </div>

          <div className="mb-4">

            <label htmlFor={emailId} className="block font-semibold">
              Email
            </label>

            <input
              id={emailId}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="border p-2 w-full rounded mt-1"
              placeholder="correo@email.com"
            />

            <p className="text-xs mt-1">
              ID generado: <span className="font-mono">{emailId}</span>
            </p>

          </div>

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
          >
            Enviar
          </button>

        </form>

        {/* TABLA DE RESULTADOS */}

        <div>

          <h2 className="font-bold mb-3">
            Datos enviados
          </h2>

          <table className="border border-gray-300">

            <thead className="bg-gray-800 text-white">
              <tr>
                <th className="px-3 py-2">Nombre</th>
                <th className="px-3 py-2">Email</th>
                <th className="px-3 py-2">ID Nombre</th>
                <th className="px-3 py-2">ID Email</th>
              </tr>
            </thead>

            <tbody>

              {users.map((user) => (
                <tr key={user.id} className="border-t">

                  <td className="px-3 py-2">{user.name}</td>
                  <td className="px-3 py-2">{user.email}</td>
                  <td className="px-3 py-2 font-mono text-sm">
                    {user.nameInputId}
                  </td>
                  <td className="px-3 py-2 font-mono text-sm">
                    {user.emailInputId}
                  </td>

                </tr>
              ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}