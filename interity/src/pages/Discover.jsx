import "./Style.css";

const discoverImagePaths = [
  "/images/discoverImg1.png",
  "/images/discoverImg4.png",
  "/images/discoverImg1.png",
  "/images/discoverImg4.png",
];
const discoverLabels = [
  "Modern Linen Sofa",
  "Tufted Velvet Bed Frame",
  "Modern Linen Sofa",
  "Tufted Velvet Bed Frame",
];

const discoverLabelNote = [
  "Contemporary linen sofa with clean lines and plush cushions, perfect for both style and comfort in your living room.",
  "Luxurious velvet bed frame featuring a tufted headboard and sturdy wooden slats for a stylish bedroom centerpiece.",
  "Contemporary linen sofa with clean lines and plush cushions, perfect for both style and comfort in your living room.",
  "Luxurious velvet bed frame featuring a tufted headboard and sturdy wooden slats for a stylish bedroom centerpiece.",
];

const discoverLabelPrice = ["$899", "$399", "$699", "$999"];

function Discover() {
  return (
    <section className="discover-container">
      <h4>Our Products</h4>
      <span>
        <h2>Discover Our Impressive Range</h2>
        <button>Shop Now</button>
      </span>

      <div className="labels-container">
        {discoverImagePaths.map((imagePath, index) => (
          <div className="product-card" key={index}>
            <img
              src={imagePath}
              alt={discoverLabels[index]}
              className="product-image"
            />
            <div className="product-info">
              <h3 className="product-title">{discoverLabels[index]}</h3>
              <div className="prod-desc-price-flex">
                <p className="product-description">
                  {discoverLabelNote[index]}
                </p>
                <span className="product-price">
                  {discoverLabelPrice[index]}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Discover;
