import React from "react";
import {stats} from "../../data/data";

//Styles
import "./Hero.scss";

//Images
import heroImg from "../../assets/svg/screen-mockups.svg";

const Hero = () => {
	return (
		<section className="hero">
			<div className="hero__content">
				<div className="hero__content-info">
					<h1 className="hero__content-info-title">Build The Community Your Fans Will Love</h1>
					<p className="hero__content-info-text">Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion. </p>
					<a href="#!" className="hero__content-info-cta btn get-started">
						Get Started For Free
					</a>
				</div>
				<img src={heroImg} alt="screen-mockups-img" className="hero__content-img" />
			</div>
			<div className="hero__stats">
				{stats.map((stat) => (
					<div className="hero__stats-stat">
						<img src={stat.icon} alt="stat-icon" />
						<p className="qty">{stat.quantity}</p>
						<p className="text">{stat.text}</p>
					</div>
				))}
			</div>
		</section>
	);
};

export default Hero;
