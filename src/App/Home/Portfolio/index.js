import Project from "./project";

const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio__area">
      <h2 className="portfolio__header">Projects</h2>
      <div className="portfolio__display">
        <Project />
      </div>
    </section>
  )
}

export default Portfolio;
