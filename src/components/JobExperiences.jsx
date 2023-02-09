import Navbar from "./Navbar";
import './app.css'
import CardJob from "./CardJob";


const Jobs = () => {
    return(
        <>
        <Navbar />
        <section id="job">
          <h1 className="titleJobs">Esperienze di lavoro principali 💼</h1>
          <CardJob/>
        </section>
        </>
    )
}

export default Jobs