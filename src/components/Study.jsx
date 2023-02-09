import Navbar from "./Navbar";
import CardStudy from "./CardStudy";

const Study = () => {
    return(
        <>
        <Navbar />
        <section id="studyPage">
            <h1 className="titleStudy">Istruzione 📗</h1>
            <CardStudy/>
        </section>
        </>
    )
}

export default Study;