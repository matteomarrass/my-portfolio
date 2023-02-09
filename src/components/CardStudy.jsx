import './app.css';
import {codecademy, ipsia} from './Lists'

const CardStudy = () => {
    return(
        <section className='cardsJob'>
            <div className='cardStudy'>
                <h1 className='titleStudy'>{codecademy.study}</h1>
                <p>{codecademy.period}</p>
                <p>{codecademy.place}</p>
                <p>{codecademy.whatIdid}</p>
            </div>
            <div className='cardStudy'>
                <h1 className='titleStudy'>{ipsia.study}</h1>
                <p>{ipsia.period}</p>
                <p>{ipsia.place}</p>
                <p>{ipsia.whatIdid}</p>
            </div>
        </section>
    )
}

export default CardStudy;