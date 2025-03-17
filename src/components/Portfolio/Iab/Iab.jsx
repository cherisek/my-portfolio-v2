import portfolioIab from "./portfolioIab.png";

export const Iab = () => {
  return (
    <div className="iab-portfolio-container">
      <img src={portfolioIab} alt="iab-image" className="portfolio-iab-img" />
      <div className="iab-description">
        <div className="lines"></div>
        <div className="inner-container">
          <h3>Internal Website - Built for GumGum (IAB)</h3>
          <p>
            For this website, I used React, React Hooks, Javascript, HTML, and CSS. I worked on the project individually and build wireframes using sketch. I used React because my company at the time required us to use React. As well as React, makes it easy to reuse components and be able to make use of the virtual DOM for faster reflection of updates.   
          </p>
          <a 
            href="https://iab.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="view-project border-button"
          >
            View Project
          </a>
        </div>
        <div className="lines"></div>
      </div>
    </div>
  )
}