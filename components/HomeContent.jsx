
import LocalesCarousel from "./Molecules/establesamientoSlider";

const HomeContent = () => {
  

    return (
      <div className="flex flex-col text-[#2F4F4F] w-full justify-center font-sans"> 
        
           <div className="flex flex-col md:flex-row p-4 text-[#2F4F4F]">
            <div className="md:w-[566px] mb-4 mt-[40px]">
              <p>Encuentra tu lugar favorito</p>
              <h1 className="text-4xl font-bold mb-4">¡Bienvenido a AccessGo!</h1>
              <p>La accesibilidad es un derecho fundamental. 
                Con AccessGo facilitamos tu búsqueda de establecimientos incluyentes, ayudándote a encontrar lugares que se ajusten a tus necesidades específicas.
              </p>
            </div>

          
            <div className="relative flex flex-row justify-center items-center  mt-[43px] h-[350px] w-[640px] md:w-full">
            
              <div className="flex flex-col absolute transform rotate-[-10deg] translate-x-[-40px] bg-[#2F4F4F] w-[146px] h-[227px] rounded-[25px] shadow-lg z-20">
                <div className="flex flex-col m-3 w-[120px] h-[160px] mb-3 flex items-center justify-center">
                  <img 
                    src="/en la sala.svg" 
                    alt="imagen 1" 
                    className="w-full h-full object-cover rounded-[25px]"
                  />
                </div>
                <h5 className="text-white text-center">Accesibilidad</h5>
              </div>

            
              <div className="flex flex-col mt-[30px] ml-[100px] absolute bg-[#EFD16B] w-[146px] h-[227px] rounded-[25px] shadow-lg z-10">
                <div className="flex flex-col m-3 w-[120px] h-[160px] mb-3 flex items-center justify-center">
                  <img 
                    src="/restaurante.jpg" 
                    alt="imagen 2" 
                    className="w-full h-full object-cover rounded-[25px]"
                  />
                </div>
                <h5 className="text-white text-center">Inclusión</h5>
              </div>

            
              <div className="flex flex-col absolute mt-[80px] ml-[200px] bg-[#7F9529] w-[146px] h-[227px] rounded-[25px] shadow-lg z-0 transform rotate-[10deg]">
                <div className="flex flex-col m-3 w-[120px] h-[160px] mb-3 flex items-center justify-center">
                  <img 
                    src="/en la calle.svg" 
                    alt="imagen 3" 
                    className="w-full h-full object-cover rounded-[25px]"
                  />
                </div>
                <h5 className="text-white text-center">AccessGo</h5>
              </div>
            </div>
          </div>


         
        <div className="mt-8 mx-[80px]">
          <h3 className="text-2xl font-bold mb-2">Visita a nuestros socios</h3>
          <p>Para ti, que buscas un lugar para pasar un buen rato:</p>
          <div className="hidden md:flex flex-wrap justify-center gap-[17.5px] mt-[51px] mb-4">
            <div className="relative border w-[215px] h-[257px] rounded">
              <img 
                src="/simon-karemann-p85-MG66GRY-unsplash 1.svg" 
                alt="Imagen random de un lugar" 
                className="w-full h-full object-cover rounded"
              />
              <div className="absolute bottom-0 left-0 p-2 bg-gradient-to-t from-black to-transparent w-full text-white">
                <h4 className="text-[15px] font-bold">Restaurantes</h4>
                <div className="flex items-center mb-1">
                  <img src="/estrellita.svg" alt="star" className="w-4 h-4 mr-[3px]" />
                  <img src="/estrellita.svg" alt="star" className="w-4 h-4 mr-[3px]" />
                  <img src="/estrellita.svg" alt="star" className="w-4 h-4 mr-[3px]" />
                  <img src="/estrellita.svg" alt="star" className="w-4 h-4 mr-[3px]" />
                  <img src="/estrellita.svg" alt="star" className="w-4 h-4 mr-[3px]" />
                </div>
                <p className="text-[10px] mt-2">100% Acceso</p>
              </div>
            </div>

            <div className="relative border w-[215px] h-[257px] rounded">
              <img 
                src="/simon-karemann-p85-MG66GRY-unsplash 1.svg" 
                alt="Imagen random de un lugar" 
                className="w-full h-full object-cover rounded"
              />
              <div className="absolute bottom-0 left-0 p-2 bg-gradient-to-t from-black to-transparent w-full text-white">
                <h4 className="text-[15px] font-bold">Hoteles</h4>
                <div className="flex items-center mb-1">
                  <img src="/estrellita.svg" alt="star" className="w-4 h-4 mr-[3px]" />
                  <img src="/estrellita.svg" alt="star" className="w-4 h-4 mr-[3px]" />
                  <img src="/estrellita.svg" alt="star" className="w-4 h-4 mr-[3px]" />
                  <img src="/estrellita.svg" alt="star" className="w-4 h-4 mr-[3px]" />
                  <img src="/estrellita.svg" alt="star" className="w-4 h-4 mr-[3px]" />
                </div>
                <p className="text-[10px] mt-2">100% Acceso</p>
              </div>
            </div>
            <div className="relative border w-[215px] h-[257px] rounded">
              <img 
                src="/simon-karemann-p85-MG66GRY-unsplash 1.svg" 
                alt="Imagen random de un lugar" 
                className="w-full h-full object-cover rounded"
              />
              <div className="absolute bottom-0 left-0 p-2 bg-gradient-to-t from-black to-transparent w-full text-white">
                <h4 className="text-[15px] font-bold">Turismo</h4>
                <div className="flex items-center mb-1">
                  <img src="/estrellita.svg" alt="star" className="w-4 h-4 mr-[3px]" />
                  <img src="/estrellita.svg" alt="star" className="w-4 h-4 mr-[3px]" />
                  <img src="/estrellita.svg" alt="star" className="w-4 h-4 mr-[3px]" />
                  <img src="/estrellita.svg" alt="star" className="w-4 h-4 mr-[3px]" />
                  <img src="/estrellita.svg" alt="star" className="w-4 h-4 mr-[3px]" />
                </div>
                <p className="text-[10px] mt-2">100% Acceso</p>
              </div>
            </div>
            <div className="relative border w-[215px] h-[257px] rounded">
              <img 
                src="/simon-karemann-p85-MG66GRY-unsplash 1.svg" 
                alt="Imagen random de un lugar" 
                className="w-full h-full object-cover rounded"
              />
              <div className="absolute bottom-0 left-0 p-2 bg-gradient-to-t from-black to-transparent w-full text-white">
                <h4 className="text-[15px] font-bold">Hospitales</h4>
                <div className="flex items-center mb-1">
                  <img src="/estrellita.svg" alt="star" className="w-4 h-4 mr-[3px]" />
                  <img src="/estrellita.svg" alt="star" className="w-4 h-4 mr-[3px]" />
                  <img src="/estrellita.svg" alt="star" className="w-4 h-4 mr-[3px]" />
                  <img src="/estrellita.svg" alt="star" className="w-4 h-4 mr-[3px]" />
                  <img src="/estrellita.svg" alt="star" className="w-4 h-4 mr-[3px]" />
                </div>
                <p className="text-[10px] mt-2">100% Acceso</p>
              </div>
            </div>
            <div className="relative border w-[215px] h-[257px] rounded custom-max:block hidden">
            <img 
                src="/simon-karemann-p85-MG66GRY-unsplash 1.svg" 
                alt="Imagen random de un lugar" 
                className="w-full h-full object-cover rounded"
              />
              <div className="absolute bottom-0 left-0 p-2 bg-gradient-to-t from-black to-transparent w-full text-white">
                <h4 className="text-[15px] font-bold">Museos</h4>
                <div className="flex items-center mb-1">
                  <img src="/estrellita.svg" alt="star" className="w-4 h-4 mr-[3px]" />
                  <img src="/estrellita.svg" alt="star" className="w-4 h-4 mr-[3px]" />
                  <img src="/estrellita.svg" alt="star" className="w-4 h-4 mr-[3px]" />
                  <img src="/estrellita.svg" alt="star" className="w-4 h-4 mr-[3px]" />
                  <img src="/estrellita.svg" alt="star" className="w-4 h-4 mr-[3px]" />
                </div>
                <p className="text-[10px] mt-2">100% Acceso</p>
              </div>
            </div>
            <div className="relative border w-[215px] h-[257px] rounded custom-max:block hidden">
            <img 
                src="/simon-karemann-p85-MG66GRY-unsplash 1.svg" 
                alt="Imagen random de un lugar" 
                className="w-full h-full object-cover rounded"
              />
              <div className="absolute bottom-0 left-0 p-2 bg-gradient-to-t from-black to-transparent w-full text-white">
                <h4 className="text-[15px] font-bold">Espacios Recreativos</h4>
                <div className="flex items-center mb-1">
                  <img src="/estrellita.svg" alt="star" className="w-4 h-4 mr-[3px]" />
                  <img src="/estrellita.svg" alt="star" className="w-4 h-4 mr-[3px]" />
                  <img src="/estrellita.svg" alt="star" className="w-4 h-4 mr-[3px]" />
                  <img src="/estrellita.svg" alt="star" className="w-4 h-4 mr-[3px]" />
                  <img src="/estrellita.svg" alt="star" className="w-4 h-4 mr-[3px]" />
                </div>
                <p className="text-[10px] mt-2">100% Acceso</p>
              </div>

            </div>
          </div>

        </div>
  

        <div className="md:hidden flex justify-center">
        
        <div>
      
      <LocalesCarousel/>
    </div>
      </div>

      
        <div className="mt-12 mx-[96px]">
          <h3 className="text-2xl font-bold mb-2">Y también para ti, que buscas ser parte del cambio:</h3>
          <p>Sé parte del cambio y muestra tu compromiso con la accesibilidad</p>
          <ul className="flex flex-col sm:flex-row justify-center space-x-0 sm:space-x-4 mt-[51px]">
            <li className="card border rounded w-[223px] h-[178px] mb-4 sm:mb-0">
              <div><img className="w-[24px] h-[24px] mt-[16px] ml-[16px] mb-[13px]" src="/ayudar.png" alt="un saludo que establece el acuerdo de ayudar al prógimo" /></div>
              <div><p className="ml-[16px] font-bold">Voluntariado</p>
              <p className="ml-[16px]">Únete a nuestra red de voluntariado y contribuye con tu tiempo y habilidades.</p>
              </div>
            </li>
            <li className="card rounded border w-[223px] h-[178px] mb-4 sm:mb-0"><div><img className="w-[24px] h-[24px] mt-[16px] ml-[16px] mb-[13px]" src="/donar.svg" alt="un saludo que establece el acuerdo de ayudar al prógimo" /></div>
              <div><p className="ml-[16px] font-bold">Donaciones</p>
              <p className="ml-[16px]">Apoya con donaciones para mejorar la accesibilidad en diferentes lugares.</p>
              </div></li>
            <li className="card rounded border w-[223px] h-[178px]"><div><img className="w-[24px] h-[24px] mt-[16px] ml-[16px] mb-[13px]" src="/educacion.svg" alt="un saludo que establece el acuerdo de ayudar al prógimo" /></div>
              <div><p className="ml-[16px] font-bold">Educación</p>
              <p className="ml-[16px]">Participa en cursos y talleres para promover la conciencia sobre accesibilidad.</p>
              </div></li>
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
  