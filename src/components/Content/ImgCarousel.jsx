import PropTypes from 'prop-types'

export default function ImgCarousel({ item = "item padrão", caminhoImg = "/" }) {

    const imgFolder = caminhoImg
    const imgSrc = `/${imgFolder}/${item}`

    return(
        <img className="-rounded-xl" src={imgSrc} alt={`Imagem de ${item}`} />
    )
}

ImgCarousel.propTypes = {
    item: PropTypes.string,
    caminhoImg: PropTypes.string
}