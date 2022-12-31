import Projects from "./project";

export default function Portfolio() {
    return (
        <section id="portfolio" className="portfolio__area">
        {/*--===== Projects =====--*/} 
          <h2 className="portfolio__header">Projects</h2>
          {/* 
          <div>
            <div className="portfolio__control">
              <button>Featured</button>
              <button>Algorithms & Games</button>
              <button>Webdev</button>
              <button>AI & Data science</button>
              <button>Networks</button>
            </div>
          </div>
           */}
          <Projects />
        </section>
    )
}