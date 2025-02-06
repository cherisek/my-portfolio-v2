import github from "../../images/github.svg";
import linkedin from "../../images/linkedin.svg";

export const Footer = () => {
  return (
    <div className="footer-container">
        <div className="social-container">
          <a 
            href="https://github.com/cherisek" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <img src={github} alt="github-icon" className="social-icons" />
          </a>
          <a href="https://www.linkedin.com/in/cherise-knox" target="_blank" rel="noopener noreferrer">
            <img src={linkedin} alt="linkedin-icon" className="social-icons" />
          </a>
      </div>
    </div>
  )
}