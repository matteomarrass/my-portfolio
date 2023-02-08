import logo from './img/profile.png';
import './img/profile.png';
import './app.css'
import { Link } from 'react-router-dom';

function StartingPage() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className='firstDescription'>
          <h1 id='title'>Hey, io sono Matteo Marras, Jr. Front End Web Developer; benvenuto nel mio curriculum!</h1>
          <p>Sono un aspirante Front End Web developer alla ricerca della mia prima esperienza da dipendente sul campo.</p>
          <p>Il mio obiettivo è creare delle esperienze utente che siano fresche, d'impatto e che trasmettano positività al mondo.</p>
          <p>Quì dentro ho cercato di creare una panoramica di base della persona che sono, in aggiunta a un paio di progetti! Spero che sia interessato!</p>
          <p>Prima di iniziare, selezioni quì la sua lingua preferita.</p>
          <div id='buttonsLanguage'>
          <Link to='homeit'><button className='buttonsLanguage'>Italiano 🇮🇹</button></Link>
          <Link to='homeeng'><button id='buttonEnglish'>English 🇬🇧</button></Link>
          </div>
        </div>
      </header>
    </div>
  );
}

export default StartingPage;