import React, { Component } from "react";
import Products from "./products";

class Home extends Component {
	render() {
		return (
			<div className="row home">
				<Products />
			</div>
		);
	}
}

export default Home;
