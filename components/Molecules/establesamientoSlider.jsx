
import Carousel from './Carrusel'; '../components/Carousel';
import LocalesList from '../atoms/establecimientosList';

export default function LocalesCarousel() {
  const slides = LocalesList();

  return (
    <div>
      <h1 className="text-3xl font-bold text-center my-8">Locales Accesibles</h1>
      <Carousel slides={slides} />
    </div>
  );
}
