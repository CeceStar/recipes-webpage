// import HeroImageBlobb from "./blobb-hero-image";
import LikeStamp from "../../assets/images/Like-stamp.png";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="landing-hero-container">
      <div className="hero-images">
        <div className="big-picture">
          <img
            className="hero-like"
            src={LikeStamp}
            alt="Drawn hand doing thumps up on a blue background"
          />
        </div>
        {/* <HeroImageBlobb /> */}
      </div>
      <h1 className="super-title">
        Lets eat
        <br />
        and be
        <br />
        happy
      </h1>
      <Link to="/recipes">
        <button className="btn btn-hero">View all</button>
      </Link>
    </div>
  );
}

export default Hero;
