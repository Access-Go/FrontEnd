import Layout from '../components/Layout';

export default function Notificacion() {
  return (
    <Layout>
      <div>
        <div>
          <p>¡Bienvenido a AccessoGo!</p>
          <p>
            En AccesoGo, invitamos a todas las empresas a unirse a esta causa
            importante y a marcar una diferencia real en la vida de muchas
            personas Regístrate y elige entre dos opciones de perfil:
          </p>

          <p>Perfil Gratuito:</p>
          <ol>
            <p>
              Incluye información básica sobre accesibilidad. Aparece en
              nuestras búsquedas para comenzar a mostrar tu compromiso.
            </p>
          </ol>

          <li>Perfil Premium:</li>
          <ol>
            <li>
              Todo lo del perfil Gratuito más: Mayor Visibilidad: Herramientas
              avanzadas para destacarte.
            </li>
            <li>
              Estadísticas Detalladas: Oportunidades Destacadas: Aparece en
              nuestra página princilpal y más...
            </li>
          </ol>
        </div>

        <div>
          <p>
            Tu puedes generar información de tu establecimiento o negocio
            indicando las diferentes formas en las cuales tu negocio es
            accesible y los nivieles de accesibilidad.
          </p>
          <p>
            Los niveles de accesibilidad son verificados con las resenas y los
            comentarios de nuestros usuarios.
          </p>
          <p>
            {' '}
            En caso de ser detectada información falsa en el registro de alguna
            cuenta Premium dicha cuenta podria ser cancelada.
          </p>
          <p>
            Si tu estableciento o negocio no cuenta con la infraestructura que
            registraste al crear tu cuenta premium te pediremos que rectifiques
            la información.
          </p>
          <p>
            Si tu establecimiento no cuenta con ninguna forma de accesibilidad
            NO podrá calificar para ser parte de nuestra comunidad.
          </p>
          <p>
            SI adquiriste una cuenta premium y se detecto que tu negocio o
            establecimiento no contaba con ningun nivel de accesibilidad tu
            cuenta Premium sera dada de baja.
          </p>
        </div>
        <div>
            <button>Cancelar</button>
            <button>Continuar</button>
        </div>
      </div>
    </Layout>
  );
}
