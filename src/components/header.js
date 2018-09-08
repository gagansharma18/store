import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
	render() {
		return (
			<header>
				<nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top">
					<div className="container">
						<Link className="navbar-brand" to="/">
                            <span><img  className="logo" alt="STORE" src="/favicon.svg"></img> STORE</span>
						</Link>
					</div>
				</nav>
			</header>
		);
	}
}

export default Header;
