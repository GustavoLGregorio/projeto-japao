import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div className="-h-screen -flex -flex-col -items-center -place-content-center -text-[2rem]">
      <span className="">Erro 404</span>
      <span>Página não encontrada!</span>
      <Link
        to="/"
        className="-no-underline -text-white hover:-text-[hsl(0,100%,95%)]"
      >
        <button
          type="button"
          className="-text-[1.5rem] -py-2 -px-4 -rounded-xl -bg-[var(--red)] hover:-bg-[hsl(346,100%,35%)] hover:-border-[inherit]"
        >
          Voltar ao Inicio
        </button>
      </Link>
    </div>
  );
}
