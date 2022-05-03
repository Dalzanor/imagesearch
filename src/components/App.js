import React, { useState } from "react";
import unsplash from "../api/unsplash";
import ImageList from "./ImageList";
import SearchBar from "./SearchBar";
import { useTransition, animated } from "@react-spring/web";
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

	const transition = useTransition(backgroundIndex, {
		key: backgroundIndex,
		from: { opacity: 0 },
		enter: { opacity: 1 },
		leave: { opacity: 0 },
		config: { duration: 750 },
	});

	return (
		<div>
			{transition((style, index) => {
				return (
					<animated.div
						className="page"
						style={{
							...style,
							backgroundImage: `url('${process.env.PUBLIC_URL}/bg_bggenerator_com${index}.png')`,
						}}
					/>
				);
			})}
			<div className="ui container" style={{ zIndex: 1 }}>
				<SearchBar customOnSubmit={onSearchSubmit} />
				<ImageList images={images} />
			</div>
		</div>
	);
};

export default App;
