import React from "react";
import Navbar from "@/components/Navbar";




 const view4 = () => {
    return <>
    <div>
        <h1 className="text-center text-2xl p-10 font-bold">Bienvenid@ a AccessGo</h1>

        <div className="text-center flex justify-center p-10 ">
            <form>
              
                 <div>
                 <input
                 type="text"
                 name="email"
                 placeholder="Correo Electronico" />
                 
                 </div>
                 <div>
                 <input
                 type="password"
                 name="contraseña"
                 placeholder="Contraseña"/>
                 </div>
                 <div>
                 <input
                 type="password"
                 name="confirmacion"
                 placeholder="Confirma Contraseña"/>
                 </div>
            </form>
        </div>
         <div className="text-center flex justify-center p-10 ">
            <form>
                <div>
                 <input
                 type="text"
                 name="Whatsaap"
                 placeholder="Numero de Whatsaap"/>
                 </div>
                 <div>
                 <input
                 type="password"
                 name="contraseña"
                 placeholder="Contraseña"/>
                 </div>
                 <div>
                 <input
                 type="password"
                 name="confirmacion"
                 placeholder="Confirma Contraseña"/>
                 </div>
                
            </form>
            
        </div>

        <div>
             <button className="p-2  bg-lime-800">Inicia Sesion</button>
            </div>

       

    </div>

    </>
}

export default view4; 

