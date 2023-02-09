import './app.css';
import {curriculum} from './Lists'
import projects1 from './img/project1.png'

const CardStudy = () => {
    return(
        <section className='cardsProject'>
            <div className='cardProject'>
                <img src={projects1} alt="project1" />
                <h1 className='titleProject'>{curriculum.title}</h1>
                <p>{curriculum.whatIdid}</p>
                <button><a href="https://github.com/matteomarrass/my-portfolio" target="_blank" rel="noopener noreferrer">Clicca quì</a></button>
            </div>
            <div className='cardProject'>
                <img src={projects1} alt="project1" />
                <h1 className='titleProject'>{curriculum.title}</h1>
                <p>{curriculum.whatIdid}</p>
                <button><a href="http://www.google.it" target="_blank" rel="noopener noreferrer">Clicca quì</a></button>
            </div>
            <div className='cardProject'>
                <img src={projects1} alt="project1" />
                <h1 className='titleProject'>{curriculum.title}</h1>
                <p>{curriculum.whatIdid}</p>
                <button><a href="http://www.google.it" target="_blank" rel="noopener noreferrer">Clicca quì</a></button>
            </div>
        </section>
    )
}

export default CardStudy;