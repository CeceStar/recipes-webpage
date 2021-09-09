import HeroImageBlobb from "./blobb-hero-image";
import LikeStamp from "../../assets/images/Like-stamp.png";

function Hero() {
  return (
    <div className="landing-hero-container">
      <div className="hide-the-wave"></div>
      <div className="hero-images">
        <HeroImageBlobb />
        <img
          className="hero-like"
          src={LikeStamp}
          alt="Drawn hand doing thumps up on a blue background"
        />
      </div>
      <h1 className="super-title">Lets eat and be happy</h1>
      <button className="btn btn-hero">View all</button>
    </div>
  );
}

export default Hero;
