export default function Footer() {
 
    return(
        <footer className="-p-8 -text-center">
            <div className="-flex -flex-wrap -place-content-center -gap-4 -mb-4">
                <img className="-w-10" src="/icons/html.svg" alt="Icone do HTML5" />
                <img className="-w-10" src="/icons/css.svg" alt="Icone do CSS3" />
                <img className="-w-10" src="/icons/js.svg" alt="Icone do JavaScript" />
                <img className="-w-10" src="/icons/react.svg" alt="Icone do React" />
                <img className="-w-10" src="/icons/vite.svg" alt="Icone do Vite" />
                <img className="-w-10" src="/icons/tailwind.svg" alt="Icone do Tailwind" />
            </div>
            <small className="-text-[0.9rem] -font-light">Copyright &copy; 2024 | Gustavo Luiz Gregorio todos os direitos reservados</small>
        </footer>
    )
}