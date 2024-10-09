import "./Style.css";

function HeroSection() {
  return (
    <section className="hero-container">
      <div className="hero-image">
        <img src="/images/bg_img_png.png" alt="Background" />
      </div>

      <span>
        <h2>Discover Your Perfect Piece of Furniture</h2>
        <h4>
          Explore our wide selection of high-quality furniture for every room in
          your home.
        </h4>
        <button>Shop Now</button>
      </span>
    </section>
  );
}

export default HeroSection;
