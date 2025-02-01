import data from "../../data/index.json";

export default function AboutMe() {
  return (
    <section id="AboutMe" className="about--section">
      <div className="about--section--img">
        <img src="./img/bidheesh about me image.png" alt="Bidheesh About Me" />
      </div>
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          {/* <p className="section--title">About</p> */}
          <h1 className="skills-section--heading">About Me</h1>
          <p className="hero--section-description">
            I am a passionate MERN Stack Developer with expertise in building modern web applications.
            With a strong foundation in JavaScript and its ecosystem, I specialize in creating
            responsive and user-friendly applications using React.js for frontend and Node.js
            with Express.js for backend development.
          </p>
          <p className="hero--section-description">
            I hold a Diploma in Electrical & Electronics Engineering from Maharajas Technological Institute,
            and I have 4 years of professional experience in various roles. My journey includes working
            as a CNC Machine Operator at Ashok Leyland and as a Public Relations Assistant at Kerala
            State Electricity Board, which has helped me develop strong problem-solving and communication skills.
          </p>
          <p className="hero--section-description">
            My technical expertise includes proficiency in MongoDB, MySQL, PostgreSQL databases,
            and experience with cloud platforms like AWS S3. I am passionate about creating efficient,
            scalable solutions and constantly learning new technologies to stay current with industry trends.
          </p>
        </div>
      </div>
    </section>
  );
}
