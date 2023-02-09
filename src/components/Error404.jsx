import { Link } from "react-router-dom";
import './app.css'

const Error404 = () => {
    return(
        <div id="error">
            <h2>Sorry, we've found an error! 🚧</h2>
            <Link to='/' id="backHome">Back Home</Link>
        </div>
    )
}

export default Error404;