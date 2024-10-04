import React from 'react';
import LoginForm from '@/components/Organism/LoginForm';
import Link from 'next/link';

const LoginPage = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center md:justify-start md:mt-[200px] lg:mt-[100px] h-screen bg-white">
        <h1 className='text-[#2F4F4F] text-xl md:text-4xl font-bold mb-2'>¡Bienvenid@ a AccessGo!</h1>
        <div className="w-[330px] mt-2 ml-2 md:w-[650px]">
          <LoginForm />
        </div>

        <div className='flex flex-col items-center justify-center w-full'>
          <Link legacyBehavior href="/25/view25"> 
            <a className='mt-4 text-[#2F4F4F] font-bold'>¿Olvidaste tu contraseña?</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
