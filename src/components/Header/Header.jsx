import ArrowAnimation from "./ArrowAnimation";

export const Header = ({ scrollToAboutMe }) => {
  return (
    <header>
      <div className="header-title">
        <div className="header-title-container">
          <h1 className="header-title-intro">
            Hey, I’m Cherise Knox and I love bringing digital visions to life through web design.
          </h1>
        </div>
      </div>
      <button className="about-me-btn" onClick={scrollToAboutMe}>
          <span className="arrows-container">
            <ArrowAnimation />
          </span>
          <span className="about-me-text">About Me</span>
      </button>
    </header>
  )
}