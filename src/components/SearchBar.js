import React from "react";

class SearchBar extends React.Component {
	state = { search: "" };

	onFormSubmit = (e) => {
		e.preventDefault();
		this.props.customOnSubmit(this.state.search);
	};

	render() {
		return (
			<div className="ui segment">
				<form onSubmit={this.onFormSubmit} className="ui form">
					<div className="field">
						<label htmlFor="searchbar">
							<h3>Unsplash Image Search</h3>
						</label>
						<input
							type="text"
							id="searchbar"
							value={this.state.search}
							onChange={(e) => this.setState({ search: e.target.value })}
						/>
					</div>
				</form>
			</div>
		);
	}
}

export default SearchBar;
