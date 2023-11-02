import TestimonialCards from "./TestimonialsCards";
import "./Testimonial.css";
import nadia from "./assets/nadia.png";
import alfi from "./assets/alfi.png";
import siti from "./assets/siti.png";
import alex from "./assets/alex.png";

const customers = [
  {
    fullName: "Siti Nurohmah",
    image: siti,
    rating: [1, 1, 1, 1, 0.5],
    says: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    fullName: "Alfi Baskara",
    image: alfi,
    rating: [1, 1, 1, 1, 1],
    says: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
          eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
  {
    fullName: "Nadia Caca",
    image: nadia,
    rating: [1, 1, 1, 1, 0.5],
    says: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
          eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
  {
    fullName: "Alex Fraud",
    image: alex,
    rating: [1, 1, 1, 1],
    says: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
          eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="container grid">
        <h2>What people say about us!</h2>
        {customers.map((customer, index) => (
          <TestimonialCards key={index} customers={customer} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
