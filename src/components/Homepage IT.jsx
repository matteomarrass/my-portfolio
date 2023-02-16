import Navbar from "./Navbar";
import profile2 from './img/profile.png';
import Music from './img/music.gif'
import Books from './img/books.gif'
import Travel from './img/plane.gif'
import { Link } from "react-router-dom";
import './app.css'

const HomepageIT = () => {
    return(
        <>
        <Navbar/>
          <div className='secondProfile'>
            <img src={profile2} alt='profile'/>
            <div className="descriptionHomepage">
              <h1 id='title'>Salve, io sono Matteo Marras,</h1>
              <h1 id="title" className="jrDev">Jr. Front End Web Developer.</h1>
            </div>
          </div>
        <section className="cardSection">          
          <div className="card">
            <h2 className="cardTitle">Dati Anagrafici 🧾</h2>
            <p>Nome: Matteo <br /> Cognome: Marras <br /> Data di Nascita: 26/12/1998 <br /> Indirizzo: Via Adua 19, Dualchi (NU) <br /> Cellulare: +393285844893 <br />Email: marrasmatteo0@gmail.com</p>
          </div>
          <div className="card">
            <h2 className="cardTitle">Obiettivo 🎯</h2>
            <p>Sono un aspirante Front End Web developer alla ricerca della mia prima esperienza da dipendente sul campo.</p>
            <p>Il mio obiettivo è creare delle pagine web ed esperienze utente che siano fresche, d'impatto e che trasmettano positività al mondo.</p>
          </div>
          <div className="card">
            <h2 className="cardTitle">Hard Skills 🧠</h2>
            <ul>
              <li>Problem Solving</li> 
              <li>Abilità nel programmare</li>
              <li>Web Development</li>
              <li>Javascript</li>
            </ul>

          </div>
          <div className="card">
            <h2 className="cardTitle">Soft Skills 🧠</h2>
            <ul>
              <li>Capacità d'insegnamento</li>
              <li>Apprendimento rapido</li> 
              <li>Flessibilità</li> 
              <li>Apertura al cambiamento</li>
              <li>Empatia</li>
              <li>Entusiasmo</li>
              <li>Continuo apprendimento</li>
            </ul>

          </div>
        </section>
        {/*UpPoints and Down*/}
        <section className="passions">
          <h1 className="titlePassion">Ma c'è dell'altro!</h1>
          <h1 className="titlePassion">Ho anche altre passioni!</h1>
          {/*Card Passions*/}
          <section className="cardSection">          
          <div className="card">
            <h2 className="cardTitle">Musica</h2>
            <div className="passionIcon">
              <img src={Music} alt="music" />
            </div>
          </div>
          <div className="card">
            <h2 className="cardTitle">Leggere</h2>
            <div className="passionIcon">
              <img src={Books} alt="books" />
            </div>
          </div>
          <div className="card">
            <h2 className="cardTitle">Viaggiare</h2>
            <div className="passionIcon">
              <img src={Travel} alt="books" />
            </div>
          </div>
        </section>
        {/*ChangeZone*/}
        <h1 className="titlePassion">Ora ho la sua attenzione vero? <br />Vorrebbe saperne di più?</h1>
        <div className="buttonsEnd">
          <Link to='../jobs' className="buttonFooter">Esperienze lavorative</Link>
          <Link to='../studies' className="buttonFooter">Istruzione</Link>        
          <Link to='../projects' className="buttonFooter">Progetti</Link>        
        </div>
        </section>
      </>
    )
}

export default HomepageIT;