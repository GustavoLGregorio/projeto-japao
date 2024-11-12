import Footer from '../components/Content/Footer';
import Hero from '../components/Home/Hero';
import MainContent from '../components/Content/MainContent';

export default function CulturaPop() {
  return (
    <>
      <Hero></Hero>

      <MainContent>
        <h2 className="-col-span-full">Japão na Cultura Pop</h2>
        <section className="-col-span-full">
          <div className="-container -grid -grid-cols-1 md:-grid-cols-2 lg:-grid-cols-3 -gap-y-4 -gap-x-8">
            <article className="textos">
              <h3>Games</h3>
                <p>
                  O Japão revolucionou a indústria dos jogos, criando clássicos icônicos e tecnologias que moldaram gerações de jogadores ao redor do mundo.
                </p>
                <img src="/images/misc/mario_world.jpg" alt="Imagem da capa de Super Mario World (SNES)" />
                <p>
                  De personagens inesquecíveis a consoles inovadores, seu impacto cultural e tecnológico segue inspirando desenvolvedores e fãs, consolidando o país como um pilar essencial para a evolução dos jogos globais.
                </p>
            </article>
            <article className="textos">
              <h3>Animes</h3>
                <p>
                  O Japão revolucionou a cultura pop mundial com o surgimento dos animes, trazendo histórias cativantes e visuais únicos que conquistaram milhões de fãs.
                </p>
                <img src="/images/misc/naruto_anime.jpg" alt="Imagem de capa do Anime de Naruto" />
                <p>
                  Além de entreter, os animes influenciam valores culturais, inspiram artistas e expandem a visão criativa em diversas mídias, tornando-se um marco global na indústria do entretenimento.
                </p>
            </article>
            <article className="textos">
              <h3>Mangás</h3>
                <p>
                  O Japão revolucionou a literatura visual com os mangás, trazendo histórias imersivas e estilos artísticos inconfundíveis que cativaram leitores ao redor do mundo.
                </p>
                <img src="/images/misc/team_naruto.jpg" alt="Imagem de capa do Mangá de Naruto" />
                <p>
                  Além de entreter, os mangás influenciam outras mídias, inspiram criadores globais e promovem a cultura japonesa, consolidando-se como um fenômeno literário e cultural mundial.
                </p>
            </article>
          </div>
        </section>
      </MainContent>

      <Footer></Footer>
    </>
  );
}
