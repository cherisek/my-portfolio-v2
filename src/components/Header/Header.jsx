import downArrows from "../../images/downArrows.svg";

export const Header = () => {
  return (
    <header>
      <div className="header-title">
        <div className="header-title-container">
          <h1 className="header-title-intro">
            Hey, I’m Cherise Knox and I love bringing digital visions to life through web design.
          </h1>
          <button className="about-me">
            <img src={downArrows} alt="down-arrow" />
            About Me
          </button>
        </div>
      </div>
    </header>
  )
}