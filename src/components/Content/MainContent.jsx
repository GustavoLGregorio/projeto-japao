import PropTypes from 'prop-types'

export default function MainContent({ children = [] }) {

    return(
        <main className="-px-8 -py-12 -bg-[hsl(0,0%,95%)] -container -max-w-4xl -mx-auto -grid -grid-cols-1 md:-grid-cols-2 lg:-grid-cols-3 -gap-y-4 lg:-gap-x-8">
            {children}
        </main>
    )
}

MainContent.propTypes = {
    children: PropTypes.array
}