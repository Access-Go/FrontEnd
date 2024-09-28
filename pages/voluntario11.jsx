import Layout from '@/components/Layout';

export default function Voluntario() {
  return (
    <Layout>
      <div className='w-full h-full flex-col p-2  '>
        <div className=''>
          <p className='text-[#2F4F4F] text-base text-center font-bold md:text-4xl lg:text-4xl '>
            Explora Oportunidades de Voluntariado en Instituciones Accesibles
          </p>
          <p className='text-[#2F4F4F] text-sm md:text-[22px] lg:text-[22px] mt-8 '>
            <strong>En AccesoGo,</strong> creemos que ser voluntario es una manera más de apoyar
            a las Personas con Discapacidad y contribuir a una Comunidad
            Inclusiva. A continuación, te presentamos algunas instituciones que
            buscan voluntarios para sus actividades. Te invitamos a explorar
            estas organizaciones, descubrir sus necesidades y unirte a sus
            esfuerzos para hacer una diferencia significativa.
          </p>

          <p className='text-[#2F4F4F] text-base md:text-[22px] lg:text-[22px] font-semibold mt-8'>¿Cómo participar?</p>

          <ol className='text-[#2F4F4F] text-sm md:text-base lg:text-base mt-8'>
            <li>
              <strong>Explora las instituciones.</strong>  Revisa nuestro listado de
              instituciones. Cada una tiene su programa de voluntariado que
              busca personas comprometidas y apasionadas.
            </li>
            <li>
              <strong>Explora sobre sus Actividades.</strong> Visita sus sitios web a través de
              los enlaces que te proporcionamos para conocer más sobre sus
              programas y las oportunidades de voluntariados disponibles.
            </li>
            <li>
              <strong>Ponte en contacto con las Instituciones.</strong> Comunícate directamente
              con ellas para expresar tu interés y obtener detalles de cómo
              puedes colaborar.
            </li>
          </ol>
        </div>

        <div className='w-full flex justify-center flex-col lg:flex-row items-center text-sm md:text-base lg:text-base mt-10' >
          <p className=' text-center lg:w-1/3  text-gray-400 font-semibold mt-8'>Lista de instituciones aqui:</p>
          <input className='w-[328px] h-[200px] lg:w-2/3 border border-gray-300 rounded-lg mt-8' type='text' />
        </div>

        <div className='w-[328px] h-[290px] bg-cover bg-center flex justify-center items-center mt-10 '>
          <p className=' font-semibold text-xs'>¡Tu Participación Puede Hacer Una Gran Diferencia!</p>
          <p className='text-xs md:text-sm lg:text-sm aling-self-center '>
            Gracias por considerar unirte a estas organizaciones y ayudar a
            construir una comunidad más inclusiva y solidaria.
          </p>
          <img className='mt-2' src='raultemporaryImages/imagenCardPremium.png' alt='' />

        </div>
      </div>
    </Layout>
  );
}
