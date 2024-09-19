const HomeContent = () => {
    return (
      <div className="flex flex-col text-[#2F4F4F] font-sans"> 
        
        <div className="flex flex-col md:flex-row p-4 text-[#2F4F4F]">
          <div className="md:w-[566px] md:ml-[80px] mb-4 md:mb-0">
            <p>Encuentra tu lugar favorito</p>
            <h1 className="text-4xl font-bold mb-4">¡Bienvenido a AccessGo!</h1>
            <p>La accesibilidad es un derecho fundamental. 
            Con AccessGo facilitamos tu búsqueda de establecimientos incluyentes, ayudándote a encontrar lugares que se ajusten a tus necesidades específicas</p>
          </div>
          <div className="flex flex-row md:w-[633px] mb-4 md:mb-0">
           
            <img src="" alt="imagen 1" className="w-full mb-4" />
            <img src="" alt="imagen 2" className="w-full mb-4" />
            <img src="" alt="imagen 3" className="w-full" />
          </div>
        </div>
  
       
        <div className="mt-8 mx-[80px]">
          <h3 className="text-2xl font-bold mb-2">Visita a nuestros socios</h3>
          <p>Para ti, que buscas un lugar para pasar un buen rato:</p>
          <div className="flex flex-wrap justify-center gap-[17.5px] mt-[51px] mb-4">
            <div className="card border w-[215px] h-[257px]">Card 1</div>
            <div className="card border w-[215px] h-[257px]">Card 2</div>
            <div className="card border w-[215px] h-[257px]">Card 3</div>
            <div className="card border w-[215px] h-[257px]">Card 4</div>
            <div className="card border w-[215px] h-[257px] custom-max:block hidden">Card 5</div>
            <div className="card border w-[215px] h-[257px] custom-max:block hidden">Card 6</div>
          </div>

        </div>
  
      
        <div className="mt-12 mx-[96px]">
          <h3 className="text-2xl font-bold mb-2">Y también para ti, que buscas ser parte del cambio:</h3>
          <p>Sé parte del cambio y muestra tu compromiso con la accesibilidad</p>
          <ul className="flex flex-col sm:flex-row justify-center space-x-0 sm:space-x-4 mt-[51px]">
            <li className="card border w-[223px] h-[178px] mb-4 sm:mb-0">Card 1</li>
            <li className="card border w-[223px] h-[178px] mb-4 sm:mb-0">Card 2</li>
            <li className="card border w-[223px] h-[178px]">Card 3</li>
          </ul>
          <div className="flex flex-col sm:flex-row justify-center lg:space-x-[245px] sm:space-x-4 mt-[86.5px]">
            <a href="#" className="bg-[#2F4F4F] hover:bg-[#4A6969] text-white px-4 py-2 rounded-full flex items-center mb-4 sm:mb-0">
                ¿Quieres ser voluntario?
            </a>
            <a href="#" className="bg-[#2F4F4F] hover:bg-[#4A6969] text-white px-4 py-2 rounded-full flex items-center">
                ¿Quieres hacer un donativo?
            </a>
          </div>
          <div className="mt-[46.5px] flex justify-center">
            <h3 className="text-2xl font-bold mb-2">¡Juntos podemos hacer del mundo un lugar más accesible para todos!</h3>
          </div>
        </div>
      </div>
    );
  };
  
  export default HomeContent;
  