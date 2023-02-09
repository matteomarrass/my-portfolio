import './app.css';
import {developer, factory} from './Lists'

const CardJob = () => {
    return(
        <section className='cardsJob'>
            <div className='cardJob'>
                <h1 className='titleJobs'>{developer.job}</h1>
                <p>{developer.period}</p>
                <p>{developer.place}</p>
                <p>{developer.whatIdid}</p>
            </div>
            <div className='cardJob'>
                <h1 className='titleJobs'>{factory.job}</h1>
                <p>{factory.period}</p>
                <p>{factory.place}</p>
                <p>{factory.whatIdid}</p>
            </div>
        </section>
    )
}

export default CardJob;