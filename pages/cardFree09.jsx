import Layout from '@/components/Layout';

export default function CardFree() {
  return (
    <Layout>
      <div className='grid grid-rows-3 w-full h-full'>
        <div className='p-4 w-full grid grid-row items-center'>
          <p className='text-[#2F4F4F] text-[20px] h-[62px] text-center py-2'>
            ¡AccessGo!
          </p>
          <img
            className='w-full h-full  px-7 '
            src='/Cafeteria1temporal.png'
            alt=''
          />
        </div>

        <section className='p-0 grid grid-rows w-full justify-center '>
          <p className='w-full h-[40px] text-[#7E952A] text-[20px]'>
            Cielito querido
          </p>
          <img className='w-[150px] h-[30px] text-sm' src='' alt='' />
          <p className='w-full text-sm text-[#455A64] '>
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

          <select className='rounded-lg bg-gray-500' name='' id=''>
            <option value='Place'>Juarez 6600 Ciudad de Mexico</option>
          </select>
          <div className='w-[200px] h-[40px] p-0 mt-6 flex flex-row justify-self-center justify-center items-center border-2 border-gray-800 rounded-2xl '>
            <img
              className='mx-4 w-[22px] h-[25px]'
              src='/Cafeteria1temporal.png'
              alt=''
            />
            <img
              className='mx-4 w-[22px] h-[25px]'
              src='/Cafeteria1temporal.png'
              alt=''
            />
            <img
              className='mx-4 w-[22px] h-[25px]'
              src='/Cafeteria1temporal.png'
              alt=''
            />
            <img
              className='mx-4 w-[22px] h-[25px]'
              src='/Cafeteria1temporal.png'
              alt=''
            />
          </div>
        </section>

        <section className='w-full h-full p-2 grid grid-rows-[15%_1fr_1fr] '>
          <button
            className='p-0  w-[196px] h-[28px] bg-[#2F4F4F] rounded-full text-sm text-center justify-self-center'
            href=''
          >
            Dejar un comentario
          </button>
          <div>
            <div className='w-full border rounded-lg'> 
            <div className='flex flex-row'>
              <img className='w-[37px] h-[45px] rounded-full' src='' alt='' />
              <p>Jhon Doe</p>
              <img className='w-[118px] h-[21px]' src='' alt='' />
            </div>
            <p className='p-4 bg-gray-800'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
              assumenda consequuntur sint exercitationem ipsam, inventore
              obcaecati voluptas nulla cupiditate alias tempora eligendi sequi
              accusantium, ad sed odio saepe natus consectetur.
            </p>
          </div>

            </div>

        </section>
      </div>
    </Layout>
  );
}
