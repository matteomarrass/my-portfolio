import React from "react";

function Jobs1(job, period, place, whatIdid){
    this.job = job;
    this.period = period;
    this.place = place;
    this.whatIdid = whatIdid;
}

const developer = new Jobs1('Sviluppatore Freelance 🧑‍💻', '2022-presente', 'Da casa', 'Durante il mio percorso di studi ho provato a eseguire lavori su piattaforme freelance con Upwork e Fiverr. Pur senza successo, ho appreso molte dinamiche del mondo del lavoro a me sconosciute.');
const factory = new Jobs1('Operatore Polifunzionale 👨‍🏭', 'Settembre 2017 - Marzo 2022', 'Antica Fornace Villa di Chiesa SRL', 'Eseguito diverse mansioni. La più rilevante era il controllo di macchinari impiegati nel controllo qualità basati su sistema Linux.');


export {developer, factory};
