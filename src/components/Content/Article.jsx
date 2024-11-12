import React, { useState, useEffect, useRef } from "react"

export default function Article(props) {

    const artImg = useRef()

    const category = props.categoria
    const pathImg = props.caminhoImg
    const itemName = props.item
    const imgSrc = `images/${pathImg}/${itemName}.jpg`
    const imgAlt = `Imagem de ${itemName}`

    const [hidden, setHidden] = useState(false)
    const [data, setData] = useState(null)
    const [dataType, setDataType] = useState(null)
    const [item, setItem] = useState(null)
    const [showList, setShowList] = useState([])
    const [showText, setShowText] = useState("")

    // fetch de json, simulando uma requisição 
    useEffect(() => {
        const fetchData = async () => {

            try {
                const response = await fetch('/lists_and_texts.json')
                const dataJson = await response.json()

                setData(dataJson)
            }
            catch(error) {
                console.log(`Erro: ${error}`)
            }
        }
        fetchData()
    }, [])

    // checa a categoria e nome do item
    useEffect(() => {

        if(data) {
            if(category === "lists") {

                setDataType("lists")
            }
            else if(category === "texts") {

                setDataType("texts")
            }

            if(itemName !== undefined) {
                
                setItem(itemName)
            }
        }
    }, [data])
        
    // trata o tipo "lista" e "texto" referente a categoria
    useEffect(() => {
        
        if(item && dataType === "lists") {
            const itemName = data[dataType][item]

            try {
                const list = []

                itemName.map((value, index) => {

                    list.push(value)

                    if(index === itemName.length - 1) {
                        setShowList(s => [...list])
                    }
                })
            }
            catch(error) {
                console.log(`Erro: ${error}`)
            }
        }
        if(item && dataType === "texts") {
            
            try {
                setShowText(data[dataType][item])
            }
            catch(error) {
                console.log(`Erro: ${error}`)
            }

            console.log(data[dataType][item])
        }
    }, [item])

    // toggle de mostrar ou não imagem
    function toggleImg() {
    
        if(!artImg.current.classList.contains("-opactiy-0")) {
            artImg.current.style.transition = "all 500ms ease"
            artImg.current.classList.toggle("-opacity-0")
        }
    }

    return(
        <article className="article -flex -flex-col -bg-[hsl(346,100%,40%)] -place-content-center -aspect-square -relative -text-center -text-[hsl(0,0%,95%)] -rounded-xl" onClick={() => toggleImg()}>
            <h3 className="-text-[1.5rem] -pt-4 -capitalize -font-semibold hover">{itemName}</h3>
            {category === "lists" ? <ol className="-text-start -px-4 -flex -flex-col -gap-[2px]">{showList.map((value, index) => {return <li key={index}>{value}</li>})}</ol> : <p className="-px-4">{showText}</p> }
            <p>{props.paragrafo}</p>
            <img ref={artImg} className="-absolute -w-full -h-full -object-cover -rounded-xl" src={imgSrc} alt={imgAlt} />
        </article>
    )
}