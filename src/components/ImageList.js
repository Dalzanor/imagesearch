import React, { useState, useEffect, useMemo } from "react";
import ImageCard from "./ImageCard.js";
import { useTransition, animated } from "react-spring";
import useMedia from "./useMedia";
import useMeasure from "react-use-measure";
import "./ImageList.css";

const ImageList = (props) => {
	const [items, setItems] = useState([]);
	const [gridItems, setGridItems] = useState([]);

	const [ref, { width }] = useMeasure();

	const columns = useMedia(
		["(min-width: 1500px)", "(min-width: 1000px)", "(min-width: 600px)"],
		[5, 4, 3],
		2
	);

	useEffect(() => {
		setItems(props.images);
	}, [props]);

	useEffect(() => {
		let heights = new Array(columns).fill(0);
		setGridItems(
			items.map((child) => {
				const column = heights.indexOf(Math.min(...heights));
				const x = (width / columns) * column;
				const y = (heights[column] += child.height / 20) - child.height / 20;
				return {
					...child,
					x,
					y,
					width: width / columns,
					height: child.height / 20,
				};
			})
		);
	}, [columns, items, width]);

	const transition = useTransition(gridItems, {
		from: { height: 0, y: 1000 },
		enter: ({ x, y, width, height }) => ({ x, y, width, height }),
		leave: { height: 0, y: 1000 },
		update: ({ x, y, width, height }) => ({ x, y, width, height }),
		config: { mass: 5, tension: 500, friction: 100 },
	});

	return (
		<div className="image-list" ref={ref}>
			{transition((style, image) => {
				return (
					<animated.div style={style}>
						<ImageCard key={image.id} image={image} />
					</animated.div>
				);
			})}
		</div>
	);
};

export default ImageList;
