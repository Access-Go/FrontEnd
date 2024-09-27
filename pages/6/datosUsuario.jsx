import React from "react";
import Layout from '@/components/Layout'
import Image from 'next/image';


 const view6 = () => {
    return <>
    <Layout>
    <h1 className="text-center text-2xl p-10 font-bold">¡Cuentanos un poco de ti!</h1>
        <h3 className="text-center p-20">Para personalizar tu perfil te pedimos que respondas los siguientes campos</h3>

    <div>
        <div className="grid grid-cols-2">
            <div>
            <h3 className="flex justify-center">Datos personales</h3>
            <Image
                  src="/iconoframe.png"
                  alt="Foto de perfil"
                  width={150}
                  height={150}
                  className="rounded-full mx-auto mb-4"
                />
                </div>
                
        </div>
        
        <div className="text-center flex justify-center p-10 ">
            <form>
                 <div className="max-w-5xl min-w-40 mx-auto p-4 md:p-3 bg-white rounded-lg shadow-sm">
                 <input
                 type="text"
                 name="Nombre"
                 placeholder="Nombre" 
                 className="px-4 py-2 border bg-[#F9F9F9] rounded-md text-sm font-medium text-[#546E7A] hover:bg-[#ECEFF1] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#B0BEC5]" />
                </div>

                 <div className="max-w-5xl min-w-40 mx-auto p-4 md:p-3 bg-white rounded-lg shadow-sm">
                 <input
                 type="text"
                 name="apellido"
                 placeholder="Apellido"
                 className="px-4 py-2 border bg-[#F9F9F9] rounded-md text-sm font-medium text-[#546E7A] hover:bg-[#ECEFF1] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#B0BEC5]" />
                 </div>
                
                 <div className="max-w-5xl min-w-40 mx-auto p-4 md:p-3 bg-white rounded-lg shadow-sm">
                 <input
                 type="date"
                 name="fechanacimiento"
                 placeholder="Fecha de Nacimiento"
                 className="px-9 py-2 border bg-[#F9F9F9] rounded-md text-sm font-medium text-[#546E7A] hover:bg-[#ECEFF1] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#B0BEC5]" />
                 </div>
            </form>
        </div>

        <div>
        <h3 className="text-center">¿Te gustaria describirte un poco? </h3>
         <div className="text-center flex justify-center p-10 ">
            
            <form>
                <div className="max-w-5xl  min-w-40 mx-auto p-4 md:p-3 bg-white rounded-lg shadow-sm">
                 <input placeholder="Cuentanos un poco de ti" />
                </div>
            </form>
        </div>
        </div>

        <div className="flex justify-center items-center">
         <button className="px-6 py-2 border border-transparent rounded-md shadow-sm
              text-white bg-[#2F4F4F] hover:bg-[#004D40] focus:outline-none
              focus:ring-2 focus:ring-offset-2 focus:ring-[#00695C]">Inicia Sesion</button>
        </div>      


    </div>
    </Layout>

    </>
}

export default view6; 