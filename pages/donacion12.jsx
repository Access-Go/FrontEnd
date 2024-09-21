import Layout from '../components/Layout';

export default function Donacion() {
  return (
    <Layout>
      <div>
        <div>
          <p>¡Ayúdanos a Hacer del Mundo un Lugar Más Accesible!</p>
          <p>
            En AccesoGo, nos dedicamos a ofrecerte la mejor información sobre la
            accesibilidad en establecimientos para que todos puedan disfrutar de
            espacios inclusivos y cómodos. Tu apoyo es fundamental para mantener
            y mejorar continúamente nuestro sitio web, asegurando que puedas
            encontrar la información que necesitas.
          </p>
          <p>¿Cómo puedes ayudar?</p>
          <p>
            Cada contribución, grande o pequeña, tiene un impacto significativo.
            Contribuye a la causa de la accesibilidad y ayuda a mantener
            AccesoGo como una herramienta esencial para todos. Puedes donar de
            manera rápida y segura
          </p>
        </div>

        <div>
          <button>
            <img src='' alt='' />
            Tarjeta de crédito
          </button>
          <input type='text' placeholder='Banco' />
          <input type='text' name='' id='' placeholder='Monto$$' />
          <input type='text' placeholder='MM/AA' />
          <input type='text' placeholder='CVV' />
          <button>
            <img src='' alt='' />
            Donar
          </button>

          <p>Tu donativo nos permitirá: </p>
          <ul>
            <li>
              Actualizar la base de datos con la información más reciente.
              Mejorar las funcionalidades del sitio para ofrecer una experiencia
              más fluída. Garantizar el mantenimiento y la seguradad de la
              página.
            </li>
          </ul>
          <input type="text" placeholder='Escribernos algun comentario' />
          <p>¡Tu apoyo marca la diferencia!</p>
        </div>
      </div>
    </Layout>
  );
}
