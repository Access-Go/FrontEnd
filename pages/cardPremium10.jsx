import Layout from '@/components/Layout';

export default function CardPremium() {
  return (
    <Layout>
      <div className='grid grid-row: auto '>
        <div className='w-[118px] h-[62px] flex justify-center items-center'>
          <p className='text-[#2F4F4F] text-[10_px]'>¡AccessGo!</p>
        </div>
        <img className='w-[236px] h-[300px]' src='' alt='Lugar accesible' />

        <section className='w-[328px] h-[418px] grid grid-row: auto'>
          <p className='w-[189px] h-[40px] text-[#7E952A]'>Cielito querido</p>
          <img className='w-[150px] h-[30px]' src='' alt='' />
          <p className='w-[328px] h-[80px]'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam
            deleniti maiores ullam aut esse, alias, adipisci quasi voluptates
            saepe quaerat maxime tempore facilis porro voluptatibus et nostrum
            doloribus dolorum repellat.
          </p>
          <p>Horarios</p>

          <img src='' alt='Schedule' />
          <p>D, L, Ma, Mi, J, V, S</p>
          <img src='' alt='Clock' />
          <p>01:00PM</p>
          <img src='' alt='Clock' />
          <p>12:00AM</p>
          <select name='' id=''>
            <div>
              <img src='' alt='motorDisability' />
              <img src='' alt='blindHelp' />
              <img src='' alt='deafHelp' />
              <img src='' alt='neurodivergence' />
            </div>
          </select>
            <option value='Place'>Juarez 6600 Ciudad de Mexico</option>
        </section>

        <section>
            <p>¡Este mes para ti!</p>
            
            <div>
            <img src="" alt="" />
            <p>Promocion</p>
            <p>solo este mes las mejores promociones para ti</p>
            </div>

            <div>
            <img src="" alt="" />
            <p>Oferta</p>
            <p>solo este mes las mejores promociones para ti</p>
            </div>

            <div>
            <img src="" alt="" />
            <p>Menu</p>
            <p>solo este mes las mejores promociones para ti</p>
            </div>


        </section>
        <section>
          <a href=''>Dejar un comentario</a>
          <div>
            <img src='' alt='profilePicture' />
            <p>Jhon Doe</p>
            <img src='' alt='stars' />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
              assumenda consequuntur sint exercitationem ipsam, inventore
              obcaecati voluptas nulla cupiditate alias tempora eligendi sequi
              accusantium, ad sed odio saepe natus consectetur.
            </p>
          </div>
        </section>
      </div>
    </Layout>
  );
}