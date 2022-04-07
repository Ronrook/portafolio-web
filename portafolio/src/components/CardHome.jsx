


import dev from '../images/developer.png';

function CardHome({titulo}) {
    return (
        <article className="mx-auto max-w-sm pb-8 bg-cover bg-center cursor-pointer transform duration-500 hover:-translate-y-1 shadow-2xl rounded-xl">
            <img className="mx-auto mb-20 mt-10 w-40" src={dev} alt="" />
            <h2 className="text-center text-3xl mt-8 font-bold min-h-18 px-12">
                {titulo}
            </h2>
            <p className="m-4 text-lg p-4 leading-relaxed text-center">
            Soy programador web, frontend y  backend con conocimientos de Html, Css, JavaScript, React, Php, Python, Django, Mysql, Mongodb

            </p>
        </article>
    )
}


export default CardHome;