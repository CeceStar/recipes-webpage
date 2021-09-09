import HeroImage from "../../assets/images/rachel-park-hrlvr2ZlUNk-unsplash-Small.jpg";

function HeroImageBlobb() {
  return (
    <>
      <img
        className="big-picture"
        src={HeroImage}
        alt="Nice food on a table inside a blobby shape."
      />
      <svg width="0" height="0">
        <defs>
          <clipPath id="svgPath">
            <path
              d="M94.7925 180.44C74.5853 176.704 58.5366 171.725 41.3594 162.51C24.1821 153.294 5.93917 139.938 1.41669 119.45C-3.21297 99.0511 5.98502 71.4312 21.8604 48.1612C37.7357 24.8913 60.3956 5.88223 81.6138 1.82609C103.002 -2.22371 122.949 8.67943 144.373 16.2821C165.967 23.8912 188.995 28.3845 200.2 43.902C211.361 59.6042 210.761 86.4261 202.535 112.498C194.479 138.576 178.859 163.999 158.974 175.375C139.088 186.751 114.893 184.265 94.7925 180.44Z"
              fill="#C4C4C4"
            />
          </clipPath>
        </defs>
      </svg>
    </>
  );
}

export default HeroImageBlobb;
