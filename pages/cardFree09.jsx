import Layout from '@/components/Layout';

export default function CardFree() {
  return (
    <Layout>
      <div className='grid grid-rows-3 h-full'>
        <div className='p-4 w-[118px] h-[62px] grid grid-row items-center'>
          <p className='text-[#2F4F4F] text-[20px] text-center'>¡AccessGo!</p>
          <img className='w-[236px] h-[300px]' src='' alt='' />
        </div>

        <section className='p-4 grid grid-row: auto w-[118px] '>
          <p className='w-[189px] h-[40px] text-[#7E952A] text-[20px]'>
            Cielito querido
          </p>
          <img className='w-[150px] h-[30px] text-sm' src='' alt='' />
          <p className='w-[328px] text-sm text-[#455A64] '>
            CIELITO ® es un refugio único que inspirado en nuestra historia y
            calidez latina, reinventa la experiencia de tomar café...
          </p>

          <p className='text-[10.5px] text-[#607D8B]'>Horarios</p>

          <div className='flex flex-row'>
          <img className='w-[22px] h-[16]' src='' alt='' />
          <p className='text-[12px] text-[#546E7A]'>D, L, Ma, Mi, J, V, S</p>
          </div>

          <div className='flex flex-row'>
          <img className='w-[22px] h-[16]' src='' alt='' />
          <p className='text-[12.6px] text-[#546E7A]'>01:00PM</p>
          </div>

          <div className='flex flex-row'>
          <img className='w-[22px] h-[16]' src='' alt='' />
          <p className='text-[12.6px] text-[#546E7A]'>12:00AM</p>
          </div>

          <select name='' id=''>
            <option value='Place'>Juarez 6600 Ciudad de Mexico</option>
          </select>
            <div className='flex flex-row justify-center justify-between' >
              <img className='w-[22px] h-[25px]' src='' alt='' />
              <img className='w-[22px] h-[25px]' src='' alt='' />
              <img className='w-[22px] h-[25px]' src='' alt='' />
              <img className='w-[22px] h-[25px]' src='' alt='' />
            </div>
        </section>

        <section className='w-[328px] h-[438px] p-4 grid grid-rows-[15%_1fr_1fr] ' >
          <button className='p-0  w-[196px] h-[28px] bg-[#2F4F4F] rounded-full text-sm text-center' href=''>Dejar un comentario</button>
          <div>
            <div className='flex flex-row'>
            <img className='w-[37px] h-[45px] rounded-full' src='' alt='' />
            <p>Jhon Doe</p>
            <img className='w-[118px] h-[21px]' src='' alt='' />
            </div>
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
