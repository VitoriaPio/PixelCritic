import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";

function Cards(props) {
	return (
		<div class="card" style={{ width: 150, height: 250 }}>
			<img src="src\assets\img\co2mvt.png" class="card-img-top" alt="..." style={{width:150, height: 150, padding: 3 }}/>
			<div class="card-body">
				<h5 class="card-title">{props.title}Valorant</h5>
				<p class="card-text">{props.descrição}

				</p>
			</div>
		</div>
	);
}
export default Cards;
