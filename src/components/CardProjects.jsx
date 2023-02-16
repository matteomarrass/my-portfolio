import './app.css';
import {bedAndBreak, curriculum, quizGame} from './Lists'
import projects1 from './img/project1.png'
import projects2 from './img/project2.jpg'
import projects3 from './img/project3.png'

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
                <img src={projects2} alt="project1" />
                <h1 className='titleProject'>{bedAndBreak.title}</h1>
                <p>{bedAndBreak.whatIdid}</p>
                <button><a href="https://github.com/matteomarrass/bed-and-breakfast-i-bastioni" target="_blank" rel="noopener noreferrer">Clicca quì</a></button>
            </div>
            <div className='cardProject'>
                <img src={projects3} alt="project1" />
                <h1 className='titleProject'>{quizGame.title}</h1>
                <p>{quizGame.whatIdid}</p>
                <button><a href="https://github.com/matteomarrass/map-master" target="_blank" rel="noopener noreferrer">Clicca quì</a></button>
            </div>
        </section>
    )
}

export default CardStudy;