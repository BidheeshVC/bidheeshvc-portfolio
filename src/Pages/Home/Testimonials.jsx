import data from "../../data/index.json";

export default function Testimonials() {
  const testimonials = [
    {
      name: "John Smith",
      company: "Tech Innovators",
      image: "https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?uid=R76083319&ga=GA1.1.1223741550.1736705192&semt=ais_hybrid",
      stars: 5,
      feedback: "Working with Bidheesh was an excellent experience. His expertise in MERN stack development helped us deliver our project ahead of schedule. His attention to detail and problem-solving skills are exceptional."
    },
    {
      name: "Sarah Johnson",
      company: "Digital Solutions Ltd",
      image: "https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?uid=R76083319&ga=GA1.1.1223741550.1736705192&semt=ais_hybrid",
      stars: 5,
      feedback: "Bidheesh is a highly skilled developer who consistently delivers high-quality work. His understanding of modern web technologies and best practices helped transform our application's performance and user experience."
    },
    {
      name: "Michael Chen",
      company: "StartUp Hub",
      image: "https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?uid=R76083319&ga=GA1.1.1223741550.1736705192&semt=ais_hybrid",
      stars: 5,
      feedback: "Outstanding developer with great communication skills. Bidheesh not only delivered exactly what we needed but also suggested valuable improvements to our initial requirements. Would definitely work with him again!"
    }
  ];

  return (
    <section className="testimonial--section" id="testimonial">
      <div className="portfolio--container-box">
        <div className="portfolio--container">
          <p className="sub--title">Clients Feedback</p>
          <h2 className="section--heading">Customer Feedback</h2>
        </div>
      </div>
      <div className="testimonial--section--card">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial--section--card--review">
            <div className="testimonial--star--container">
              {[...Array(testimonial.stars)].map((_, starIndex) => (
                <svg
                  key={starIndex}
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="#0AAD0A"
                  className="testimonial--star"
                >
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              ))}
            </div>
            <p className="text-md">{testimonial.feedback}</p>
            <div className="testimonial--reviewer">
              <img 
                src={testimonial.image} 
                alt={testimonial.name}
                className="testimonial--reviewer--avatar"
              />
              <div className="testimonial--reviewer--details">
                <h3>{testimonial.name}</h3>
                <p>{testimonial.company}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
