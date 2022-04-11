


import dev from '../images/developer.png';

function CardHome({title, text}) {
    return (
        <article className="bg-white w-60 md:w-72 lg:w-80 h-96 bg-cover bg-center  duration-500  shadow-2xl rounded-xl">
            <img className="mx-auto w-20 mb-12 mt-10  text-center" src={dev} alt="" />
            <h2 className="text-center text-2xl mt-2 font-bold min-h-18 px-12">
                {title}
            </h2>
            <p className="text-center p-4">
             {text}

            </p>
        </article>
    )
}


export default CardHome;