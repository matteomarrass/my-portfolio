import Navbar from "./Navbar"
import CardStudy from "./CardProjects"

const Projects = () => {
    return(
      <>
      <Navbar />
      <section id="studyPage">
          <h1 className="titleStudy">Bene. Siamo quasi arrivati alla fine! <br />Ecco quà qualche piccolo progetto per completare il tutto! 🚧</h1>
          <CardStudy />
      </section>
      </>
    )
}

export default Projects