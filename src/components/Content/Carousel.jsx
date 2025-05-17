import React, { useState, useEffect, useRef } from "react"
import PropTypes from 'prop-types'

export default function Carousel({ children = [] }) {

    // referencia a div container do carousel
    const carouselContainer = useRef()

    // estado de tamanho do carousel e posição nele
    const [carouselSize, setCarouselSize] = useState(null)
    const [posX, setPosX] = useState(null)
    const [animate, setAnimate] = useState(null)
    
    // lógica do carousel
    useEffect(() => {

        // recuperando o tamanho do carousel
        setCarouselSize(carouselContainer.current.children.length)

        if(carouselSize !== null) {

            // encontrando o meio do carousel
            const middlePos = carouselSize % 2 === 0 ? carouselSize / 2 : Math.ceil(carouselSize / 2)
            
            // Não precisamos definir o width aqui pois está definido inline no elemento
            // Definindo a posição inicial

            // inicia a posição do carousel no centro
            setPosX(p => p + middlePos)
        }

    }, [carouselSize])

    // lógica do movimento/posição no carousel 
    useEffect(() => {

        if(posX !== null) {
            
            // faz o loop da posição quando chega nas pontas
            if (posX > carouselSize) {
                setPosX(1)
            } else if (posX <= 0) {
                setPosX(carouselSize)
            }

            // move o container do carousel conforme o estado de posX 
            const translateAmount = ((posX - 1) * (100 / carouselSize))
            carouselContainer.current.style.transform = `translateX(-${translateAmount}%)`
            //carouselContainer.current.style.animation = "fade 500ms ease alternate"

            animate !== false ? setAnimate(false) : null
        }
    }, [posX])

    // anima o carousel quando movimentado
    useEffect(() => {

        let carouselAnimateId = null

        if(!animate) {
            carouselContainer.current.classList.add("carousel-animate")

            carouselAnimateId = carouselContainer.current.addEventListener("animationend", () => {
                carouselContainer.current.classList.remove("carousel-animate")
                setAnimate(true)
            })
        }
        
        return () => {
            removeEventListener("animationend", carouselAnimateId)
        }
    }, [animate])

    return(
        <section className="carroussel -col-span-full -relative -overflow-x-hidden -bg-slate-300 -rounded-xl">
            <div className="-absolute -z-10 -w-full -h-full -flex -place-content-between -align-middle -px-2" style={{ alignItems: "center" }}>
                <button onClick={() => {setPosX(p => p - 1); } } className="-border-none -h-16 -w-16 -bg-[hsl(0,0%,100%,0.33)] hover:-bg-[hsl(0,100%,50%,0.33)] -text-[red] hover:-text-[white] -rounded-full -cursor-pointer transition-fast-ease">
                    <i className="fa fa-chevron-left -text-[1.25rem]"></i>
                </button>
                <button onClick={() => {setPosX(p => p + 1); } } className="-border-none -h-16 -w-16 -bg-[hsl(0,0%,100%,0.33)] hover:-bg-[hsl(0,100%,50%,0.33)] -text-[red] hover:-text-[white] -rounded-full -cursor-pointer transition-fast-ease">
                    <i className="fa fa-chevron-right -text-[1.25rem]"></i>
                </button>
            </div>
            <div className="-relative -flex -flex-nowrap carousel-container -m-0 -p-0 -text-center" style={{ width: `${carouselSize * 100}%`, transition: 'transform 0.3s ease' }} ref={carouselContainer}>
                {React.Children.map(children, child => (
                    <div style={{ width: `${100 / carouselSize}%` }}>
                        {child}
                    </div>
                ))}
            </div>
        </section>
    )
}

Carousel.propTypes = {
    children: PropTypes.array
}