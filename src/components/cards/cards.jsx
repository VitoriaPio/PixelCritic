import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";

function Cards(props) {
	return (
		<div class="card" style={{width: 300, height: 150}}>
			<img src="" class="card-img-top" alt="..." />
			<div class="card-body">
				<h5 class="card-title">Card title</h5>
				<p class="card-text">
					Some quick example text to build on the card title and make up the
					bulk of the card's content.
				</p>
			</div>
		</div>
	);
}
export default Cards