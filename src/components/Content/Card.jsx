import PropTypes from 'prop-types'

export default function Card({ url = "/", alt = "alt padrão", titulo = "titulo padrão", texto = "texto padrão" }) {

    return(
        <>
            <article className="" aria-label="Horário no Japão">
                <img className="-w-full -rounded-t-xl -aspect-video -object-cover -object-center -text-center" src={url} alt={alt} />
                <div className="-bg-white -rounded-b-xl -p-4">
                    <h3 className="-text-[2rem] -font-semibold">{titulo}</h3>
                    <p className="-text-[1.5rem] -font-light -leading-7 -mb-0">{texto}</p>
                </div>
            </article>
        </>
    )
}

Card.propTypes = {
    url: PropTypes.string,
    alt: PropTypes.string,
    titulo: PropTypes.string,
    texto: PropTypes.string
}