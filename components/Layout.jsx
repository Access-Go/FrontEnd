import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col h-screen max-w-full">
    
      <Navbar />
      
     
      <main className="flex flex-col flex-1 w-full max-w-4xl mx-auto p-4 space-y-4 items-center">
        {children}
      </main>
     
      <Footer />
    </div>
  );
};

export default Layout;
