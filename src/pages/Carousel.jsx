function Carousel({ image1, image2, image3, image4, image5 }) {
  return (
    <div>
      <div
        id="carouselExampleIndicators"
        class="carousel slide mb-5"
        data-ride="carousel"
      >
        <ol class="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            class="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              class="d-block w-100"
              src={image1}
              alt="First slide"
              style={{ height: "500px", objectFit: "cover" }}
            />
          </div>
          <div class="carousel-item">
            <img
              class="d-block w-100"
              src={image2}
              alt="Second slide"
              style={{ height: "500px", objectFit: "cover" }}
            />
          </div>
          <div class="carousel-item">
            <img
              class="d-block w-100"
              src={image3}
              alt="Third slide"
              style={{ height: "500px", objectFit: "cover" }}
            />
          </div>
          <div class="carousel-item">
            <img
              class="d-block w-100"
              src={image4}
              alt="Third slide"
              style={{ height: "500px", objectFit: "cover" }}
            />
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
}

export default Carousel;
