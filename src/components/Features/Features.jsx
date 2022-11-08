import React from "react";
import {features} from "../../data/data";

//Styles
import "./Features.scss";

const Features = () => {
	return (
		<section className="features">
			{features.map((feature) => (
				<article className="feature" key={feature.id}>
					<div className="container">
						<img src={feature.img} alt="feature-img" className="feature__img" />
						<div className="feature__content">
							<h3 className="feature__content-title">{feature.title}</h3>
							<p className="feature__content-text">{feature.text}</p>
						</div>
					</div>
				</article>
			))}
		</section>
	);
};

export default Features;
