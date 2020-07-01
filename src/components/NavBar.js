import React from "react";

function NavBar(props) {
	return (
		<div className="container navbar navbar-expand-lg navbar-dark bg-dark fixed-top shadow p-3 mb-5 ">
		<ul className="navbar-nav ml-auto flex-nowrap">
		  <li className="nav-item">
			<a
			  href="#home"
			  onClick={() => props.handlePageChange("Home")}
			  className={props.currentPage === "Home" ? "nav-link active" : "nav-link"}
			>
			  Home
			</a>
		  </li>
		  <li className="nav-item nav-link">|</li>
		  <li className="nav-item">
			<a
			  href="#about"
			  onClick={() => props.handlePageChange("About")}
			  className={props.currentPage === "About" ? "nav-link active" : "nav-link"}
			>
			  About
			</a>
		  </li>
		  <li className="nav-item nav-link">|</li>
		  <li className="nav-item">
			<a
			  href="#contact"
			  onClick={() => props.handlePageChange("Contact")}
			  className={props.currentPage === "Contact" ? "nav-link active" : "nav-link"}
			>
			  Contact
			</a>
		  </li>
		</ul>
		</div>
	  );
	}
export default NavBar