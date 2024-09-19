import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white border-t shadow-md text-center p-4">
      <div className='flex items-center justify-between mx-[100px] mb-[20px]'>
        <p>Términos y condiciones</p>
        <span>Política de privacidad</span>
        <span>Contacto</span>
      </div>
      <div className='flex items-center justify-center space-x-2 mb-[20px]'>
        <img src="/Vector - 0 (1).svg" alt="Icon" />
        <span><img src="/insta.svg" alt="Instagram" /></span>
      </div>
      <div className='flex items-center justify-center'>
        © 2024 AccessGo. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;
