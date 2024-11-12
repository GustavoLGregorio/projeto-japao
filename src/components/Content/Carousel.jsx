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
            
            // corrigindo o tamanho do carousel (100% * tamanho )
            carouselContainer.current.style.width = `${carouselSize}00%`
            carouselContainer.current.style.left = `-${middlePos - 1}00%`

            // inicia a posição do carousel no centro
            setPosX(p => p + middlePos)
        }

    }, [carouselSize])

    // lógica do movimento/posição no carousel 
    useEffect(() => {

        if(posX !== null) {
            
            // faz o loop da posição quando chega nas pontas
            posX > carouselSize ? setPosX(p => p = 1) : posX
            posX <= 0 ? setPosX(p => p + (carouselSize)) : posX

            // move o container do carousel conforme o estado de posX 
            carouselContainer.current.style.left = `-${posX - 1}00%`
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
            <div className="-relative -flex -flex-row carousel-container -m-0 -p-0 -text-center" ref={carouselContainer}>
                {children}
            </div>
        </section>
    )
}

Carousel.propTypes = {
    children: PropTypes.array
}