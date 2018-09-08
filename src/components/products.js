import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getProducts } from "../actions";
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app

var images = [];
class MainPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            photoIndex: 0,
            isOpen: false,
        };
        this.openCarousel = this.openCarousel.bind(this);
    }
	
	async componentDidMount() {
		this.props.getProducts();
	}

    openCarousel = (imagesData,heroImage) => {
        images =[];
        images.push(heroImage);

        imagesData.forEach(function(element) {
            images.push(element.href);
        })
        console.log(images);
        this.setState({ photoIndex: 0,isOpen: true })
    }

	render() {
		const { ProductsList } = this.props;
        const {photoIndex, isOpen} = this.state;
		if (ProductsList) {
			return (
				<div className="col-lg-12">
					<div className="row">
						{ProductsList.map((Product,index) => (
							<div key={index} className="col-lg-4 col-md-6 mb-4">
								<div className="card h-100">
									<Link to="#" onClick={() => this.openCarousel(Product.images,Product.hero.href)}>
										<img className="card-img-top" src={Product.hero.href} alt={Product.name}/>
									</Link>
									<div className="card-body">
										<h4 className="card-title">
											<Link to="#" onClick={() => this.openCarousel(Product.images,Product.hero.href)} className="bold-xxs cl-DarkGrey">{Product.name}</Link>
										</h4>
										<p className="card-text cl-Tomato regular-xs">
											${Product.priceRange.selling.low} - ${Product.priceRange.selling.high}
										</p>
									</div>
								</div>
							</div>
						))}
                        <div>
                            {isOpen && (
                                <Lightbox
                                    mainSrc={images[photoIndex]}
                                    mainSrcThumbnail={images[photoIndex]}
                                    nextSrc={images[(photoIndex + 1) % images.length]}
                                    prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                                    onCloseRequest={() => this.setState({ isOpen: false })}
                                    onMovePrevRequest={() =>
                                        this.setState({
                                            photoIndex: (photoIndex + images.length - 1) % images.length,
                                        })
                                    }
                                    onMoveNextRequest={() =>
                                        this.setState({
                                            photoIndex: (photoIndex + 1) % images.length,
                                        })
                                    }
                                />
                            )}
                        </div>
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
