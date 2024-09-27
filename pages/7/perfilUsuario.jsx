import React from "react";
import Layout from '@/components/Layout';
import Image from 'next/image';

 const view7 = () => {
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
        
        <div>
        <div >
            <button className="text-center flex justify-center p-1 w-40 bg-[#F5F0E5]">Lugares que visitaste</button>
        </div>
        <div >
            <button className="text-center flex justify-center p-1  w-40 bg-[#F5F0E5] ">Tus comentarios</button>
        </div>
        </div>

        <h3 className="flex justify-center">Sobre mi</h3>
         <div className="text-center flex justify-center p-10 ">
            
            <form>
                <p> <input placeholder="Cuentanos un poco de ti"/></p>
                
            </form>
        </div>

        

    </div>
    </Layout>

    </>
}

export default view7; 