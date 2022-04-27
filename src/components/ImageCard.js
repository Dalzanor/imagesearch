import React from "react";

class ImageCard extends React.Component {
	render() {
		const { urls, description } = this.props.image;
		return (
			<div>
				<img src={urls.thumb} alt={description} />
			</div>
		);
	}
}

export default ImageCard;
