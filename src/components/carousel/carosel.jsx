import React from "react";
import { Carousel } from "bootstrap";

function Carrossel(){
    return(
    <div id="carouselExampleIndicators" className="carousel slide">
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src=".\src\assets\img\league-of-legends.png" class="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                    <img src=".\src\assets\img\league-of-legends.png" class="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                    <img src=".\src\assets\img\league-of-legends.png" class="d-block w-100" alt="..."/>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    
    )
}
export default Carrossel;
