import React, {useState} from "react";

//Styles
import "./Footer.scss";

//Logo and icons
import logoLight from "../../assets/brand/logo-light.svg";
import iconPhone from "../../assets/svg/icon-phone.svg";
import iconEmail from "../../assets/svg/icon-email.svg";
import iconFacebook from "../../assets/svg/icon-facebook.svg";
import iconInstagram from "../../assets/svg/icon-instagram.svg";
import iconTwitter from "../../assets/svg/icon-twitter.svg";

const Footer = () => {
	const [emailValue, setEmailValue] = useState("");
	const [error, setError] = useState(null);

	const handleSubmit = (e) => {
		e.preventDefault();

		const emailRegex = /\S+@\S+\.\S+/;

		if (emailValue === "") {
			setError("Please add your email");
		} else if (!emailValue.match(emailRegex)) {
			setError("Please check your email");
		} else {
			setError(null);
		}
	};

	return (
		<footer className="footer">
			<div className="container">
				<div className="footer__newsletter">
					<span className="footer__newsletter-title">Newsletter</span>
					<p className="footer__newsletter-text">To recieve tips on how to grow your community, sign up to our weekly newsletter. We’ll never send you spam or pass on your email address</p>
					<form className="footer__newsletter-form" onSubmit={handleSubmit}>
						<div className="form__input">
							<input type="text" value={emailValue} onChange={(e) => setEmailValue(e.target.value)} />
							<p className="error">{error}</p>
						</div>
						<button className="btn subscribe">Subscribe</button>
					</form>
				</div>

				<div className="footer__info">
					<img src={logoLight} alt="huddle-logo" className="footer__info-logo" />

					<ul className="footer__info-list">
						<li className="footer__info-list-item">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nulla quam, hendrerit lacinia vestibulum a, ultrices quis sem.</li>
						<li className="footer__info-list-item">
							<img src={iconPhone} alt="icon-phone" />
							<a href="tel:+1-543-123-4567">Phone: +1-543-123-4567</a>
						</li>
						<li className="footer__info-list-item">
							<img src={iconEmail} alt="icon-email" />
							<a href="mailto:example@company.com">example@company.com</a>
						</li>
					</ul>

					<ul className="footer__info-socials">
						<li className="footer__info-socials-item">
							<a href="#!">
								<img src={iconFacebook} alt="icon-facebook" />
							</a>
						</li>
						<li className="footer__info-socials-item">
							<a href="#!">
								<img src={iconInstagram} alt="icon-instagram" />
							</a>
						</li>
						<li className="footer__info-socials-item">
							<a href="#!">
								<img src={iconTwitter} alt="icon-twitter" />
							</a>
						</li>
					</ul>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
