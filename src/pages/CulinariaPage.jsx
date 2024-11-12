import Footer from '../components/Content/Footer';
import Hero from '../components/Home/Hero';
import MainContent from '../components/Content/MainContent';
import Article from '../components/Content/Article';

export default function Culinaria() {
  return (
    <>
      <Hero></Hero>

      <MainContent>
        <h2 className="-mb-8 -col-span-full">Culinária do Japão</h2>
        <section className="-col-span-full">
          <div className="-container -grid -gap-4 -grid-cols-1 md:-grid-cols-2 lg:-grid-cols-3">
            <Article categoria="lists" caminhoImg="foods" item="ramen" ></Article>
            <Article categoria="lists" caminhoImg="foods" item="sushi"></Article>
            <Article categoria="lists" caminhoImg="foods" item="dango"></Article>
            <Article categoria="lists" caminhoImg="foods" item="dorayaki"></Article>
            <Article categoria="lists" caminhoImg="foods" item="manju"></Article>
            <Article categoria="lists" caminhoImg="foods" item="omurice"></Article>
            <Article categoria="lists" caminhoImg="foods" item="tempura"></Article>
            <Article categoria="lists" caminhoImg="foods" item="oyakodon"></Article>
          </div>
        </section>
      </MainContent>

      <Footer></Footer>
    </>
  );
}
