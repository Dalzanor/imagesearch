import React, { useState, useEffect } from "react";

const SearchBar = ({ customOnSubmit }) => {
	const [search, setSearch] = useState("");

	useEffect(() => {
		customOnSubmit("city");
	}, []);

	const onFormSubmit = (e) => {
		e.preventDefault();
		customOnSubmit(search);
	};

	return (
		<div className="ui segment">
			<form onSubmit={onFormSubmit} className="ui form">
				<div className="field">
					<label htmlFor="searchbar">
						<h3>Unsplash Image Search</h3>
					</label>
					<input
						type="text"
						id="searchbar"
						value={search}
						placeholder="City"
						onChange={(e) => setSearch(e.target.value)}
					/>
				</div>
			</form>
		</div>
	);
};

export default SearchBar;
