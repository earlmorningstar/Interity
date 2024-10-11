const imagePaths = [
  "/images/exploreImg1.png",
  "/images/exploreImg2.png",
  "/images/exploreImg3.png",
];
const labels = ["Living", "Dining", "Bedroom"];

function Explore() {
  return (
    <section className="explore-mainContainer">
      <h2>Explore Our Stunning Collection</h2>
      <h4>
        Browse through our curated selection of exquisite furniture pieces
        designed to elevate your living space.
      </h4>

      <div className="explore-image-container">
        {imagePaths.map((imagePaths, index) => (
          <span key={index}>
            <img src={imagePaths} alt={labels[index]} />
            <p>{labels[index]}</p>
          </span>
        ))}
      </div>
    </section>
  );
}

export default Explore;
