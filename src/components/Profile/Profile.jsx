import profile from "../../images/profile.png";

export const Profile = () => {
  return (
    <div className="profile-container">
      <img src={profile} alt="profile-img" className="profile-img" />
      <div className="about-me-section">
        <div className="lines"></div>
        <h1>about me</h1>
        <p>
          Proven experience and dynamic skills collaborating with back-end developers, 
          graphic designers and user experience designers to ensure all elements of web creation are consistent. 
          Possess comprehensive knowledge and skills to determine structure, design of web pages and develop features to enhance user experience. Strike balance between functional and aesthetic design, making sure web design is properly formulated and optimizing web pages for maximum speed and scalability. Team builder with focused lead-by-example attitude and always striving to exceed expectations.
          I have used tools such as HTML, CSS/Sass, Javascript, React, Typescript, bootstrap, in accordance with Web Content Accessibility Guidelines in order to build different
          applications. I aim to have an easy and smooth user frindly site. When designing, the goal is to always allow the user to have a pleasant and user friendly experience.
        </p>
        <button className="portfolio-button">go to portfolio</button>
        <div className="lines"></div>
      </div>
    </div>
  )
}