
import video from "./sudoku.mp4"

const Soduku = () => {
  return (
    <div className="project">
      <video className="project__video" loop="true" autoplay="true">
        <source src={video} type="video/mp4" />
      </video>
      <h1 className="project__title">Soduku game with solver and visualizer</h1>
      <p className="project__text">
        The objective of soduku is to position digits in the domain
        1-9 on a 9 by 9 board, with the constaints that no digit
        of the same kind can be present either on the same row, column
        or 3 by 3 section at one given point; the program utalizes these constraints to do 
        basic inferences in order to either visualize for the user 
        permissible positions for new digits, or,
        if so wished, automatically add those digits if only one possible
        position remains. 
      </p>
      <p className="project__text">
        However, since the algorithm isn't using brute
        force search, rather extensive data structering to allow for the 
        quick querying that the visualizer ought to require, the algorithm
        is only able to solve easier sudoku boards, since the data structures
        that would be necessary to facilitate two way inference were deemed to extensize. 
        In other words, it a common tactic in sudoku to narrow the position of a digit in
        a certain section to be in a specific row or column; Although you do not 
        know which tile preceisely, this narrowing of possibilites could be 
        utalized for the deduction of the position of the same digit in other
        sections - the current implementation of the algorithm cannot achieve this, 
        and its ability is therefore confined to easier sudoku boards.
      </p>
      <a className="project__link" href="https://github.com/ArvidHammarlund/Sudoku-solver">
        <i class="fab fa-github"></i>
      </a>
    </div>
  )
}

export default Soduku
