import { Link } from "react-router-dom";

const Error404 = () => {
    return(
        <section>
            <h2>Cercavi la pagina 404? L'hai trovata! ;)</h2>
            <Link to='/'>Back Home</Link>
        </section>
    )
}

export default Error404;