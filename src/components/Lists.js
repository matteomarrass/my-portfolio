import React from "react";

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

const developer = new Jobs1('Sviluppatore Freelance 🧑‍💻', '2022-presente', 'Da casa', 'Durante il mio percorso di studi ho provato a eseguire lavori su piattaforme freelance con Upwork e Fiverr. Pur senza successo, ho appreso molte dinamiche del mondo del lavoro a me sconosciute.');
const factory = new Jobs1('Operatore Polifunzionale 👨‍🏭', 'Settembre 2017 - Marzo 2022', 'Antica Fornace Villa di Chiesa SRL', 'Eseguito diverse mansioni. La più rilevante era il controllo di macchinari impiegati nel controllo qualità basati su sistema Linux.');
const codecademy = new Studies('Corso di Codecademy Front-End Developer 🧑‍💻', 'Aprile 2022 - Febbraio 2023', 'Da casa', `Sono state diverse le tematiche affrontate, dalle basi di HTML, CSS e Web Design fino a passare allo sviluppo con Javascript e l'utilizzo di diverse di diverse librerie tra le quali React e Redux. Ho eseguito diversi progetti basici con essi all'interno della piattaforma.`)
const ipsia = new Studies('Diploma di IPSIA manutentore elettrico-elettronico 👨‍🏭', 'Settembre 2012 - Giugno 2017', 'IPSIA E.Amaldi Macomer', `Studio generico teorico e pratico di elettonica e dei suoi componenti, insieme ad impianti elettrici civili e industriali.`)


export {developer, factory, codecademy, ipsia};
