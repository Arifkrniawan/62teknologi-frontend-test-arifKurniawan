import pages from "../../../utils/pages";
import { Link } from "react-router-dom";
import kuliner from "./assets/kulinerlpg.png";
import "./Hero.css"

const Hero = () => {
  return (
    <section className="hero">
      <div className="container grid">
        <div className="hero-information">
          <h1>Kuliner Bandar Lampung</h1>
          <h2></h2>
          <p>
            Sebuah situs untuk kalian yang butuh rekomendasi makanan enak di
            Bandar Lampung!
          </p>
          <Link className="button-primary" to={pages.get('listBusiness').path}>
            List Tempat Makan
          </Link>
        </div>
        <img className="hero-image" src={kuliner} alt="Restaurant food" />
      </div>
    </section>
  );
};

export default Hero;
