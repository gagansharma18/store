import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getProducts } from "../actions";

class MainPage extends Component {
	
	async componentDidMount() {
		this.props.getProducts();
		console.log(this.props);
	}

	render() {
		const { ProductsList } = this.props;
		if (ProductsList) {
			return (
				<div className="col-lg-12">
					<div className="row">
						{ProductsList.map(Product => (
							<div
								key={Product.id}
								className="col-lg-4 col-md-6 mb-4"
							>
								<div className="card h-100">
									<Link to="#">
										<img
											className="card-img-top"
											src={Product.hero.href}
											alt={Product.name}
										/>
									</Link>
									<div className="card-body">
										<h4 className="card-title">
											<Link to="#">{Product.name}</Link>
										</h4>
										<p className="card-text">
											{Product.sponsor}
										</p>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			);
		} else return null;
	}
}

const mapStateToProps = state => ({
	ProductsList: state.items
});

const mapDispatchToProps = dispatch => ({
	getProducts: () => {
		dispatch(getProducts());
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
