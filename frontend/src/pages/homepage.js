import React from 'react';
import Navbar from '../etc/navbar';
import Footer from '../etc/footer';

function HomePage() {
  return (
    <div>
      <Navbar />
      {/* carrousel
      <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/800px-Good_Food_Display_-_NCI_Visuals_Online.jpg"
            class="d-block w-100" 
            alt="..."
            width="100%"
            height="500"
            ></img>
          </div>
          <div class="carousel-item">
            <img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/800px-Good_Food_Display_-_NCI_Visuals_Online.jpg"
            class="d-block w-100" 
            alt="..."
            width="100%"
            height="500"
            ></img>
          </div>
          <div class="carousel-item">
            <img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/800px-Good_Food_Display_-_NCI_Visuals_Online.jpg"
            class="d-block w-100" 
            alt="..."
            width="100%"
            height="500"
            ></img>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div> */}
      <h1>Hello World</h1>
      <Footer />
    </div>
  );
}



export default HomePage;