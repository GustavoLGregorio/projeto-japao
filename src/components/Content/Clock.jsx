import React, { useState, useEffect } from "react"
import PropTypes from 'prop-types'

export default function Clock({ url = "/", local = "/"}) {

    // estado de tempo usando Date
    const [time, setTime] = useState(new Date())

    // cria e remove um novo Date a cada 1s
    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date())
        }, 1000)

        return () => {
            clearInterval(intervalId)
        }
    }, [])

    // formata o tempo recuperado em timestamp para horário re retorna o resultado
    function formatTime() {
        // adiciona o fuso-horário do japão
        let hours = (time.getHours() + 12)
        hours >= 24 ? hours -= 24 : hours

        let minutes = time.getMinutes()
        let seconds = time.getSeconds()

        const meridiem = hours >= 12 ? "PM" : "AM"

        return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${meridiem}`
    }
    
    // função utilitária para adicionar 0 caso o horário seja menor que 10 (ex: 05)
    function padZero(number) {
        return (number < 10 ? "0" : "") + number
    }

    return(
        <article className="-w-full -text-[white] clock" style={{ backgroundImage: `url('${url}')` }} aria-label="Horário no Japão">
            <div className="-max-w-4xl -mx-auto -py-2 -px-4 -flex -justify-between -place-content-center">
                <h3 className="-text-[1.5rem] -font-semibold -border-s-[0.75rem] -ps-2 -border-[var(--red)] -border-dotted">{local}</h3>
                <span className="-text-[1.5rem] -font-mono">{formatTime()}</span>
            </div>
        </article>
    )
}

Clock.propTypes = {
    url: PropTypes.string,
    local: PropTypes.string
}