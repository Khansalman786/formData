import React from "react";
import logo from "../assets/images/brulon-logo-w.png"; // import the image
import {
	FaShoppingBag,
	FaFacebook,
	FaLinkedin,
	FaInstagram,
	FaPhone,
	FaEnvelope,
	FaSearch,
} from "react-icons/fa";

const TopHeader = () => {
	return (
		<div className="topheader d-flex justify-content-center position-relative py-3">
			<div className="container row ">
				{/* Left Section */}
				<div className="col-lg-6 d-flex justify-content-start gap-5">
					{/* Social Media */}
					<div className="Header_socialMedia d-flex gap-3">
						<a href="https://facebook.com" target="_blank" rel="noreferrer">
							<FaFacebook size={24} color="white" />
						</a>
						<a href="https://instagram.com" target="_blank" rel="noreferrer">
							<FaInstagram size={20} color="white" />
						</a>
						<a href="https://twitter.com" target="_blank" rel="noreferrer">
							<FaLinkedin size={20} color="white" />
						</a>
					</div>

					{/* Phone */}
					<div className="d-flex align-items-center gap-2">
						<FaPhone size={16} color="white" />
						<a
							className="text-white text-decoration-none"
							href="tel:+9178768567567"
						>
							+91 78768567567
						</a>
					</div>
				</div>

				{/* Right Section */}
				<div className="col-lg-6 d-flex justify-content-end gap-4">
					{/* Email */}
					<div className="d-flex align-items-center gap-2">
						<FaEnvelope size={18} color="white" />
						<a
							href="mailto:contact@brulon.in"
							className="fw-medium text-white text-decoration-none"
						>
							contact@brulon.in
						</a>
					</div>

					{/* Cart */}
					<div className="position-relative">
						<FaShoppingBag size={20} color="white" />
						<span className="cart-count">0</span>
					</div>

					{/* Login/Register */}
					<div className="text-white">Login/Register</div>

					{/* Search */}
					<div>
						<FaSearch size={20} color="white" />
					</div>
				</div>

				<div className="logo">
					<a href="/home" className="logo-img">
						<img className="w-100" src={logo} alt="logo" />
					</a>
				</div>
			</div>
		</div>
	);
};

export default TopHeader;
