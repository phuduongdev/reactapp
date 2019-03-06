import React, { Component } from "react";

class SearchBar extends Component {
  state = {
    term: "Some value"
  };

  render() {
    // return <input onChange={event => console.log(event.target.value)} />; //other way to use with a simple function
    return (
      <div>
        {/* <p>
          <input onChange={this.onInputChange} />
        </p>
        <p>{this.state.term}</p> */}
        <nav className="navbar navbar-light bg-light justify-content-between">
          {/* <a clasNames="navbar-brand">Navbar</a> */}
          <form className="form-inline">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              // onChange={this.onInputChange}
              onChange={event =>
                this.props.onSearchBarChange(event.target.value)
              }
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
        </nav>
      </div>
    );
  }

  onInputChange = event => {
    // console.log(event.target.value);
    this.setState({ term: event.target.value });
  };
}

export default SearchBar;
