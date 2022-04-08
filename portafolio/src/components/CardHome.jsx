


import dev from '../images/developer.png';

function CardHome({titulo}) {
    return (
        <article className="bg-white w-60 pb-8 mb-8 bg-cover bg-center cursor-pointer transform duration-500  shadow-2xl rounded-xl">
            <img className="mx-auto w-20 mb-12 mt-10  text-center" src={dev} alt="" />
            <h2 className="text-center text-2xl mt-2 font-bold min-h-18 px-12">
                {titulo}
            </h2>
            <p className="m-4 text-base p-4 leading-relaxed text-center">
            Soy programador web, frontend y  backend con conocimientos de Html, Css, JavaScript, React, Php, Python, Django, Mysql, Mongodb

            </p>
        </article>
    )
}


export default CardHome;