import React, { useState } from "react";
import unsplash from "../api/unsplash";
import ImageList from "./ImageList";
import SearchBar from "./SearchBar";
import "./App.css";

const App = () => {
	const [images, setImages] = useState([]);
	const [backgroundIndex, setBackgroundIndex] = useState(0);

	const onSearchSubmit = async (search) => {
		const response = await unsplash.get("/search/photos", {
			params: { query: search, per_page: 20 },
		});
		setImages(response.data.results);
		setBackgroundIndex(Math.floor(Math.random() * 20));
	};

	return (
		<div
			className="page"
			style={{
				backgroundImage: `url('${process.env.PUBLIC_URL}/bg_bggenerator_com${backgroundIndex}.png')`,
			}}
		>
			<div className="ui container">
				<SearchBar customOnSubmit={onSearchSubmit} />
				<ImageList images={images} />
			</div>
		</div>
	);
};

export default App;
