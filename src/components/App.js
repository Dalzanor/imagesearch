import React from "react";
import unsplash from "../api/unsplash";
import ImageList from "./ImageList";
import SearchBar from "./SearchBar";

class App extends React.Component {
	state = { images: [] };

	onSearchSubmit = async (search) => {
		const response = await unsplash.get("/search/photos", {
			params: { query: search, per_page: 20 },
		});
		this.setState({ images: response.data.results });
	};

	render() {
		return (
			<div className="ui container">
				<SearchBar customOnSubmit={this.onSearchSubmit} />
				<ImageList images={this.state.images} />
			</div>
		);
	}
}

export default App;
