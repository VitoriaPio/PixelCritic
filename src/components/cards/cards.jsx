import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";

function Cards(props) {
	return (
		<div class="card" style={{width: 300, height: 150}}>
			<img src="" class="card-img-top" alt="..." />
			<div class="card-body">
				<h5 class="card-title">{props.title}</h5>
				<p class="card-text">
					{props.descrição}
				</p>
			</div>
		</div>
	);
}
export default Cards