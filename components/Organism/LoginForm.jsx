import React from 'react';
import { Form, Input } from '../Molecules/FormStyles'; // Ajusta la ruta según tu estructura

const LoginForm = () => {
  return (
    <Form onSubmit={(e) => e.preventDefault()}>
      <h1 className="text-xl mb-4">Iniciar Sesión</h1>
      
      <Input
        label="Correo Electrónico"
        name="email"
        type="email"
        id="email"
        placeholder="Introduce tu correo"
        value="" // Sin valor inicial
        onChange={() => {}} // Función vacía
      />

      <Input
        label="Número de WhatsApp"
        name="whatsapp"
        type="tel"
        id="whatsapp"
        placeholder="Introduce tu número de WhatsApp"
        value="" // Sin valor inicial
        onChange={() => {}} // Función vacía
      />

      <div className="mb-4">
        <Input
          label="Contraseña"
          name="password"
          type="password" // Campo de contraseña
          id="password"
          placeholder="Introduce tu contraseña"
          value="" // Sin valor inicial
          onChange={() => {}} // Función vacía
        />
        <div className="flex items-center mt-2">
          <input
            type="checkbox"
            className="mr-2 leading-tight"
          />
          <span className="text-sm underline cursor-pointer">Mostrar</span> {/* Subrayado */}
        </div>
      </div>

      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Iniciar Sesión
      </button>
    </Form>
  );
};

export default LoginForm;
