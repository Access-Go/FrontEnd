import React from "react";

 const view6 = () => {
    return <>
    <h1 className="text-center text-2xl p-10 font-bold">¡Cuentanos un poco de ti!</h1>
        <h3>Para personalizar tu perfil te pedimos que respondas los siguientes campos</h3>

    <div>
        <div>
            
        </div>
        
        <div className="text-center flex justify-center p-10 ">
            <form>
                 <div>
                 <input
                 type="text"
                 name="Nombre"
                 placeholder="Nombre" /> 
                 </div>
                 <div>
                 <input
                 type="text"
                 name="apellido"
                 placeholder="Apellido"/>
                 </div>
                 <div>
                 <input
                 type="date"
                 name="fechanacimiento"
                 placeholder="Fecha de Nacimiento"/>
                 </div>
            </form>
        </div>

        <h3>¿Te gustaria describirte un poco? </h3>
         <div className="text-center flex justify-center p-10 ">
            
            <form>
                <p> <input placeholder="Cuentanos un poco de ti"/></p>
                
            </form>
        </div>

        <button className="p-2 bg-lime-800">Inicia Sesion</button>


    </div>

    </>
}

export default view6; 