import React from "react";
import Hero from "../Hero/Hero";

//Styles
import "./Header.scss";

//Logo
import logoDark from "../../assets/brand/logo-dark.svg";

const Header = () => {
	return (
		<header className="header">
			<div className="container">
				<nav className="header__nav">
					<a href="#!">
						<img src={logoDark} alt="huddle-logo" className="header__nav-logo" />
					</a>
					<a href="#!" className="btn try-free">
						Try it free
					</a>
				</nav>
				<Hero />
			</div>
		</header>
	);
};

export default Header;
