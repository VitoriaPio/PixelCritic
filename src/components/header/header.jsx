import React from "react";

import styles from "./header.module.css";

function Header() {
	return (
		<header className={styles.header}>
			<h1>Pixel Critic</h1>
			<ul>
				<li>
					<a href="#">Sign In</a>
				</li>
				<li>
					<a href="#">Create Account</a>
				</li>{" "}
				<li>
					<a href="#">Games</a>
				</li>{" "}
				<li>
					<a href="#">News</a>
				</li>
			</ul>
		</header>
	);
}

export default Header;
