import { Link } from "react-scroll";

export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Bidheesh V C</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">MERN Stack</span>{" "}
            <br />
            Developer
          </h1>
          <p className="hero--section-description">
            Passionate about creating efficient and scalable web applications
            <br />
            using modern technologies and best practices.
          </p>
        </div>
        <Link to="Contact" spy={true} smooth={true} offset={-70} duration={500} className="btn btn-secondary">
          <button className="btn btn-primary">Get In Touch</button>
        </Link>
      </div>
      <div className="hero--section--img">
        <img src="./img/bidheesh hero image.png" alt="Bidheesh Hero" />
      </div>
    </section>
  );
}
