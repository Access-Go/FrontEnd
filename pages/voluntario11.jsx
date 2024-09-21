import Layout from '@/components/Layout';

export default function Voluntario() {
  return (
    <Layout>
      <div className=' xl:w-[1168px]
       md:w-[669px] md:gap-[10px]
       w-[340px] min-h-screen gap-[10px] grid grid-row items-
      '>
        <div className=' grid grid-rows-[15%_50%_15%_1fr_1fr_1fr]'>

        <p className='text-[#2F4F4F]'>Explora Oportunidades de Voluntariado en Instituciones Accesibles</p>
        <p className='text-[#2F4F4F] '>
          En AccesoGo, creemos que ser voluntario es una manera más de apoyar a
          las Personas con Discapacidad y contribuir a una Comunidad Inclusiva.
          A continuación, te presentamos algunas instituciones que buscan
          voluntarios para sus actividades. Te invitamos a explorar estas
          organizaciones, descubrir sus necesidades y unirte a sus esfuerzos
          para hacer una diferencia significativa.
        </p>

        <p className='text-[#2F4F4F]'>¿Cómo participar?</p>

        <ol className='text-[#2F4F4F]'>
          <li >
            Explora las instituciones. Revisa nuestro listado de instituciones.
            Cada una tiene su programa de voluntariado que busca personas
            comprometidas y apasionadas.
          </li>
          <li>
            Explora sobre sus Actividades. Visita sus sitios web a través de los
            enlaces que te proporcionamos para conocer más sobre sus programas y
            las oportunidades de voluntariados disponibles.
          </li>
          <li>
            Ponte en contacto con las Instituciones. Comunícate directamente con
            ellas para expresar tu interés y obtener detalles de cómo puedes
            colaborar.
          </li>
        </ol>
        </div>

        <div>
        <p>Lista de instituciones aqui:</p>
        <input className='text-[#000000]' type="text" />
        <p>¡Tu Participación Puede Hacer Una Gran Diferencia!</p>
        <p>Gracias por considerar unirte a estas organizaciones y 
        ayudar a construir una comunidad más inclusiva y solidaria.</p>
        <img src="" alt="" />

        </div>


      </div>
    </Layout>
  );
}
