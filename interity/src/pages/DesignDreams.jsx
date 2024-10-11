const discoverImagePaths = [
    "/images/unlockDesignImg1.png",
    "/images/unlockDesignImg2.png",
      ];

      const labels = ["Inner Peace", "Soul Soothing"];

function DesignDreams() {
  return (
    <section className="designDream-maincontainer">
      <div className="designDream-info-parent">
        <h2>Unlock Your Design Dreams</h2>
        <p>
          Dive into a world of boundless creativity and design possibilities as
          we showcase over 50 stunningly crafted rooms, each brimming with
          unique styles, color palettes, and decor ideas to ignite your
          imagination and elevate your home to new heights of beauty and
          comfort.
        </p>
        <button>Get Inspired</button>
      </div>
      
      <div className="design-b2-container">
        {discoverImagePaths.map((imagePaths, index) => (
          <span key={index}>
            <div className="design-image-container">
            <img src={imagePaths} alt="Imgae no" className="design-img" />
            </div>
            <p className="design-info">{labels[index]}</p>          
          </span>
        ))}
      </div>
    </section>
  );
}

export default DesignDreams;
