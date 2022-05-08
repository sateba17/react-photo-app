import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };
  onFormSubmit = (e) => {
      e.preventDefault();
    //   console.log('FROM SEARCHBAR:',this.state.term)
      this.props.onSubmit(this.state.term)
  }
  render() {
    return (
      <form className="ui form" onSubmit={this.onFormSubmit}>
        <div className="field">
          <label>Search</label>
          <input
            type="text"
            onChange={(e) => this.setState({ term: e.target.value })}
            value={this.state.term}
          />
        </div>
      </form>
    );
  }
}

export default SearchBar;
