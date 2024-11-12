import Header from "./Header"
import Clock from "../Content/Clock"

export default function Hero() {

    return (
        <section className="-relative -h-[66dvh] md:-h-[57.5dvh]
        -outline -bg-[hsl(0,0,20%)] -bg-[url('/images/misc/wave.gif')]
        md:-bg-[url('/images/misc/wave.jpg')] -bg-cover -bg-no-repeat
        -bg-bottom md:-bg-center -text-[hsl(0,0%,95%)]">
            <Header></Header>
            <div className="-container -max-w-4xl -relative -top-2/4 -mx-auto">
                <div className="-p-4 lg:-px-0 -backdrop-blur-[1px] text-shadow">
                    <h2 className="-text-[2.1rem] -font-bold">Descubra o <span className="-text-[var(--red)] -shadow-2xl -font-sans --tracking-tighter -uppercase">Japão</span>: Um Mundo de Sabor e Tradição</h2>
                    <small className="text-shadow -text-[1.25rem] -font-semibold">O berço da cultura Otaku</small>
                </div>
            </div>
            <div className="-absolute -bottom-0 -bg-[hsl(0,0%,20%,0.33)] -w-full">
                <Clock local="Tokyo"></Clock>
            </div>
        </section>
    )
}