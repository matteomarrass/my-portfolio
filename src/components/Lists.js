function Jobs1(job, period, place, whatIdid){
    this.job = job;
    this.period = period;
    this.place = place;
    this.whatIdid = whatIdid;
}

function Studies(study, period, place, whatIdid){
    this.study = study;
    this.period = period;
    this.place = place;
    this.whatIdid = whatIdid;
}


function Project(title, whatIdid){
    this.title = title;
    this.whatIdid = whatIdid;
}

const developer = new Jobs1('Sviluppatore Freelance ๐งโ๐ป', '2022-presente', 'Da casa', 'Durante il mio percorso di studi ho provato a eseguire lavori su piattaforme freelance con Upwork e Fiverr. Pur senza successo, ho appreso molte dinamiche del mondo del lavoro a me sconosciute.');
const factory = new Jobs1('Operatore Polifunzionale ๐จโ๐ญ', 'Settembre 2017 - Marzo 2022', 'Antica Fornace Villa di Chiesa SRL', 'Eseguito diverse mansioni. La piรน rilevante era il controllo di macchinari impiegati nel controllo qualitร  basati su sistema Linux.');
const codecademy = new Studies('Corso di Codecademy Front-End Developer ๐งโ๐ป', 'Aprile 2022 - Febbraio 2023', 'Da casa', `Sono state diverse le tematiche affrontate, dalle basi di HTML, CSS e Web Design fino a passare allo sviluppo con Javascript e l'utilizzo di diverse di diverse librerie tra le quali React e Redux. Ho eseguito diversi progetti basici con essi all'interno della piattaforma. Negli argomenti nella quale il programma era un po' carente, ad esempio sistemi Linux, preprocessori SASS E LESS, ho approfondito in maniera autonoma, utilizzando Internet oppure libri sull'argomento in inglese.`)
const ipsia = new Studies('Diploma di IPSIA manutentore elettrico-elettronico ๐จโ๐ญ', 'Settembre 2012 - Giugno 2017', 'IPSIA E.Amaldi Macomer', `Studio generico teorico e pratico di elettonica e dei suoi componenti, insieme ad impianti elettrici civili e industriali.`)
const lingue = new Studies('Livello di lingue ๐บ๏ธ', '๐ฎ๐น: Madrelingua', '๐ฌ๐ง: B2 (Livello certificato IELTS)', '๐ช๐ธ: B2 (livello conversazionale)')
const curriculum = new Project('Curriculum', 'Vorrebbe vedere il mio curriculum piรน da vicino? La sua progettazione di base e come รจ stato fatto il coding? Prego, entri quรฌ!')
const bedAndBreak = new Project('Bed&Breakfast I Bastioni', 'Progetto riguardante il B&B I Bastioni, localizzato nella bellissima cittร  di Alghero.')
const quizGame = new Project('Map Master', 'Un piccolo gioco a risposta singola sulle bandiere del mondo!')

export {developer, factory, codecademy, ipsia, lingue, curriculum, bedAndBreak, quizGame};
