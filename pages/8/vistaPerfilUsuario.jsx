import React from "react";
import Layout from '@/components/Layout'
import Image from 'next/image';

 const view8 = () => {
    return <>
    <Layout>
    <h1 className="text-center text-2xl p-10 font-bold">¡Bienvenid@ a AccessGo!</h1>
       
    <div>
        <div>
           <div className="grid grid-cols-2">
            <div>
            
            <Image
                  src="/iconoframe.png"
                  alt="Foto de perfil"
                  width={150}
                  height={150}
                  className="rounded-full mx-auto mb-4"
                />
                <h3 className="flex justify-center">NOMBRE</h3>
                </div>
                
                
        </div>
        </div>
        

        <h3 className="flex justify-center">Sobre mi</h3>
         <div className="text-center flex justify-center p-10 ">
            
         
                <p> <input placeholder="lorem impustun"/></p>
                
         
        </div>


    </div>
    </Layout>

    </>
}
export default view8; 