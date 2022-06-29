import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light px-5 py-4">
		  <div className="container-fluid">
			<Link class="navbar-brand" to={"/"}>
			  <img
				src="https://www.pngplay.com/wp-content/uploads/2/Star-Wars-Logo-Transparent-Images.png"
				alt=""
				width="80"
				height="auto"
				class="d-inline-block align-text-top"
			  />
			</Link>
			<div class="btn-group">
			  <button
				type="button"
				class="btn btn-primary dropdown-toggle"
				data-bs-toggle="dropdown"
				aria-expanded="false"
			  >
				Favorites
			  </button>
			  <ul class="dropdown-menu">
				<li>
				  <a class="dropdown-item" href="#"></a>
				</li>
			  </ul>
			</div>
		  </div>
		</nav>
	  
	);
};
