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
          <h1>Benvenuto nel mio curriculum!</h1>
          <p>Prima di iniziare, selezioni quÃ¬ la sua lingua preferita.</p>
          <div id='buttonsLanguage'>
          <Link to='homeit'><button className='buttonsLanguage'>Italiano ð®ð¹</button></Link>
          <Link to='homeeeng'><button id='buttonEnglish'>English ð¬ð§</button></Link>
          </div>
        </div>
      </header>
    </div>
  );
}

export default StartingPage;