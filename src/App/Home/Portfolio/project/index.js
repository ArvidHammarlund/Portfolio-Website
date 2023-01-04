
import { Link } from "react-router-dom";

const Project = () => {
  return (
    <>
      <Link to="/soduku" className="portfolio__item">
        <div>
          <h3>Soduku game</h3>
          <h5>with GUI, solver and visualizer</h5>
          <p>
            The program utalizes basic game constraints to do 
            inferences in order to either visualize for the user the 
            permissible positions for new additions of a certain digits, or,
            if so wished, automatically add those digits if only one possible
            position remains.
          </p>
          <h4>Python, inference, sudoku, game</h4>
          <i class="fa-solid fa-link"></i>
        </div>
      </Link>
      <a href="https://github.com/ArvidHammarlund/Portfolio-Website" className="portfolio__item">
        <div>
          <h3>Portfolio Website</h3>
          <h5>A website to showcase my projects</h5>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur explicabo laborum officiis! Asperiores unde error totam? Sequi libero ad perferendis iste facere possimus dolor ratione tenetur dolorem quod, nihil illo.</p>
          <h4>HTML, CSS, JavaScript, React, Webdev</h4>
          <i class="fa-solid fa-link"></i>
        </div>
      </a>
    </>
  )
}

export default Project;
