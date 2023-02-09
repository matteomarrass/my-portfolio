import './app.css';
import {codecademy, ipsia, lingue} from './Lists'

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
            <div className='cardStudy'>
                <h1 className='titleStudy'>{lingue.study}</h1>
                <p>{lingue.period}</p>
                <p>{lingue.place}</p>
                <p>{lingue.whatIdid}</p>
            </div>
        </section>
    )
}

export default CardStudy;