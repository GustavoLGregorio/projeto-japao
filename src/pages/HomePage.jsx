import { Link } from 'react-router-dom';
import Footer from '../components/Content/Footer';
import Hero from '../components/Home/Hero';
import MainContent from '../components/Content/MainContent';
import Carousel from '../components/Content/Carousel';
import ImgCarousel from '../components/Content/ImgCarousel';
import Card from '../components/Content/Card';

export default function HomePage() {
  return (
    <>
      <Hero></Hero>

      <MainContent>
        <section className="textos -col-span-2 -flex -flex-col -text-[1.175rem] -mb-8 -rounded-xl">
          <h2>O que é o Japão?</h2>
          <div className="-container -grid -grid-cols-1 md:-grid-cols-2 lg:-grid-cols-1 md:-gap-x-8">
            <div>
              <p>
                O Japão, Localizado no leste da Ásia, ocupa a 19ª posição no
                Índice de Desenvolvimento Humano (IDH) e é a 4ª maior economia do
                mundo.
              </p>
              <img
                src="/images/misc/japan_map.jpg"
                alt="Mapa do Japão"
              />
              <p>
                Com uma população de aproximadamente 126 milhões, o Japão é
                conhecido por sua baixa taxa de criminalidade e alta expectativa
                de vida, refletindo uma sociedade saudável e segura. O país
                investe fortemente em educação e tecnologia, sendo líder em
                inovações.
              </p>
            </div>
            <div>
              <img
                src="/images/misc/japan_culture.jpg"
                alt="Imagem com elementos do Japão"
              />
              <p>
                Culturalmente, o Japão combina tradições milenares com
                modernidade. Suas práticas, como a cerimônia do chá e as artes
                marciais, ressaltam valores como respeito, disciplina e harmonia,
                profundamente enraizados no cotidiano japonês.
              </p>
            </div>
          </div>
        </section>

        <aside className="-col-span-full lg:-col-span-1 -mb-4">
          <h2>Conheça um pouco mais</h2>
          <section
            className="-container -grid -grid-cols-1 md:-grid-cols-2 lg:-grid-cols-1"
            aria-label="Conteudos sobre o Japão"
          >
            <div className="-flex -flex-col -gap-y-4 lg:-gap-y-0">
              <Link to="/culinaria" className="-no-underline">
                <Card
                  titulo="Culinária"
                  texto="Conheça mais sobre a culinária japonesa"
                  url="/images/foods/ramen.jpg"
                  alt="Image de Ramen"
                ></Card>
              </Link>
              <Link to="/turismo" className="-no-underline">
                <Card
                  titulo="Turismo"
                  texto="Conheça mais sobre pontos turísticos do Japão"
                  url="/images/places/kyoto.jpg"
                  alt="Imagem de Kyoto"
                ></Card>
              </Link>
            </div>
            <div className="-flex -flex-col md:-gap-y-4 lg:-gap-y-0">
              <Link to="/cultura-pop" className="-no-underline">
                <Card
                  titulo="Cultura Pop"
                  texto="Conheça mais sobre o Japão na cultura pop"
                  url="/images/misc/samurai_ishikawa_kazumitsu.jpg"
                  alt="Image de um Samurai"
                ></Card>
              </Link>
            </div>
          </section>
        </aside>

        {window.innerWidth >= 762 ? 
          <section className="-col-span-full -h-full -w-full -overflow-hidden carroussel">
            <div className="-w-max -grid -grid-cols-6 -gap-x-2 -place-content-center">
              <ImgCarousel caminhoImg="carousel" item="samurai.jpg"></ImgCarousel>
              <ImgCarousel caminhoImg="carousel" item="white_haired.jpg"></ImgCarousel>
              <ImgCarousel caminhoImg="carousel" item="berserk.jpg"></ImgCarousel>
              <ImgCarousel caminhoImg="carousel" item="evangelion.jpg"></ImgCarousel>
              <ImgCarousel caminhoImg="carousel" item="lain.jpg"></ImgCarousel>
              <ImgCarousel caminhoImg="carousel" item="sayonara_eri.jpg"></ImgCarousel>
            </div>
          </section>
        :
          <Carousel>
            <ImgCarousel caminhoImg="carousel" item="samurai.jpg"></ImgCarousel>
            <ImgCarousel caminhoImg="carousel" item="white_haired.jpg"></ImgCarousel>
            <ImgCarousel caminhoImg="carousel" item="berserk.jpg"></ImgCarousel>
            <ImgCarousel caminhoImg="carousel" item="evangelion.jpg"></ImgCarousel>
            <ImgCarousel caminhoImg="carousel" item="lain.jpg"></ImgCarousel>
            <ImgCarousel caminhoImg="carousel" item="sayonara_eri.jpg"></ImgCarousel>
          </Carousel>
        }


      </MainContent>

      <Footer></Footer>
    </>
  );
}
