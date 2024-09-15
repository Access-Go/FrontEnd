import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-white border-b shadow-md p-4">
        <nav className="flex items-center justify-between">
          <div className="flex-shrink-0">
            <a href="/" className="text-xl font-bold hover:underline">Logo de AccessGo que lleva a pagina de inicio</a>
          </div>
      
          <div className="flex items-center space-x-4">
            <a href="/login" className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded">Inicia Sesión</a>
            <a href="/signup" className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded">Únete</a>
         
            <div className="relative">
              <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded">Menú hamburguesa para cosas del perfil, creo</button>
              <div className="absolute right-0 mt-2 w-48 bg-white text-gray-800 rounded shadow-lg hidden group-hover:block">
                <a href="/option1" className="block px-4 py-2 hover:bg-gray-100">Opción 1</a>
                <a href="/option2" className="block px-4 py-2 hover:bg-gray-100">Opción 2</a>
                <a href="/option3" className="block px-4 py-2 hover:bg-gray-100">Opción 3</a>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <main className="flex flex-col flex-1 p-4 space-y-4">
        {children}
      </main>
      <footer className="bg-white border-t shadow-md text-center p-4">
        <p>footer</p>
      </footer>
    </div>
  );
};

export default Layout;
