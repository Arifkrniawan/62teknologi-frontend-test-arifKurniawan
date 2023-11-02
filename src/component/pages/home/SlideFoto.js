import { Link } from "react-router-dom";
import pages from "../../../utils/pages";
import GridFoto from "./GridFoto";
import toha from "./assets/toha.jpeg";
import sony from "./assets/sony.png";
import belur from "./assets/bebekbelur.png";
import "./SlideFoto.css"

const fotos = [
  {
    name: "Bakso Sony",
    image: sony,
    price: "$2",
    description: `Bakso dengan komposisi daging 80%`,
  },
  {
    name: "Nasi Uduk Toha",
    image: toha,
    price: "$1.2",
    description: `Nasi uduk dengan bumbu kampung khas turun temurun, nasi uduk terbaik di Lampung`,
  },
  {
    name: "Bebek Belur",
    image: belur,
    price: "$1",
    description: `Menyuguhkan hidangan ayam/bebek bakar maupun goreng dengan sambal hijau pedas yang khas, 
    cabai hijau yang tidak pedas`,
  },
];

const SlideFoto = () => {
  return (
    <section className="container grid slide-foto">
      <div className="slide-foto-header">
        <h2>Temukan Resto Terdekat!</h2>
        <Link classname="button-primary" to={pages.get("listBusiness").path}>
          Search Restaurant
        </Link>
      </div>
      {fotos.map((foto, index) => (
        <GridFoto key={index} foto={foto} />
      ))}
    </section>
  );
};

export default SlideFoto;
