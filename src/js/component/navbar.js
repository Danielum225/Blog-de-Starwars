import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const { store, actions } = useContext(Context);

  return (
    <nav className="navbar bg-black px-5 py-4">
      <div className="container-fluid">
        <Link class="navbar-brand" to={"/"}>
          <img
            src="https://www.r4-p17droid.com/wp-content/uploads/2017/02/Star-Wars-logo-300x132.png"
            alt=""
            width="auto"
            height="80"
            className="d-inline-block align-text-top"
          />
        </Link>
        <div className="btn-group">
          {store.favorites.length != 0 ? (
            <button
              type="button"
              class="btn btn-light dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Favorites<span className="px-2">{store.favorites.length}</span>
            </button>
          ) : (
            <button
              type="button"
              class="btn btn-light dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Favorites
            </button>
          )}
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            {store.favorites.map((item, index) => {
              return (
                <li
                  className="dropdown-item d-flex justify-content-between"
                  key={index}
                >
                  {item}{" "}
                  <i
                    class="fas fa-trash-alt"
                    onClick={() => {
                      actions.deleteFavorites(index);
                    }}
                  ></i>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};
