import Footer from '../components/Content/Footer';
import Hero from '../components/Home/Hero';
import MainContent from '../components/Content/MainContent';
import Article from '../components/Content/Article';

export default function Turismo() {
  return (
    <>
      <Hero></Hero>

      <MainContent>
        <h2 className="-col-span-full -mb-8">Pontos turísticos do Japão</h2>
        <section className="-col-span-full">
          <div className="-container -grid -gap-4 -grid-cols-1 md:-grid-cols-2 lg:-grid-cols-3">
            <Article item="fuji" caminhoImg="places" categoria="texts"></Article>
            <Article item="gion" caminhoImg="places" categoria="texts"></Article>
            <Article item="himeji" caminhoImg="places" categoria="texts"></Article>
            <Article item="kinkakuji" caminhoImg="places" categoria="texts"></Article>
            <Article item="kyoto" caminhoImg="places" categoria="texts"></Article>
            <Article item="miyajima" caminhoImg="places" categoria="texts"></Article>
            <Article item="nara" caminhoImg="places" categoria="texts"></Article>
            <Article item="okinawa" caminhoImg="places" categoria="texts"></Article>
            <Article item="shinjuku" caminhoImg="places" categoria="texts"></Article>
          </div>
        </section>
      </MainContent>

      <Footer></Footer>
    </>
  );
}
