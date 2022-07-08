import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";


export const Navbar = () => {

	const { store, actions } = useContext(Context);

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
				Favorites {store.favorites.length}
			  </button>
			  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">

		  {store.favorites.map((item, index) => {
          return (<li className="dropdown-item" key={index}>{item} <i class="fas fa-trash-alt" onClick={()=>{actions.deleteFavorites(index)}}></i></li>)

        })}
           
          </ul>
			</div>
		  </div>
		</nav>
	  
	);
};
