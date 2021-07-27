/// Search.js
///
/// - Props:
///   - disabled: A bool to disable the control
///   - isSearching: A bool that gives the user feedback that a search is
///                  happening
///   - onChange: A function that uses the search value to search
///   - typingDelay: A number in milliseconds that is the delay before
///                  setting the search value after the user stops typing
///
/// - Example usage:
///   <Search
///      disabled={this.state.isUserFetching}
///      isSearching={this.state.isSearching}
///      onChange={this.handleSetSearch}
///      typingDelay={this.state.searchTypingDelay}
///   />

import React from "react";
import PropTypes from "prop-types";
import "bootstrap-icons/font/bootstrap-icons.css";

class Search extends React.Component {
  constructor(props) {
    super(props);

    //Timer
    this.typingTimeout = null;

    this.state = {
      searchValue: "",
    };

    this.callOnChange = this.callOnChange.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
  }

  callOnChange() {
    if (this.props.onChange) {
      this.props.onChange(this.state.searchValue);
    }
  }

  handleSearchChange(event) {
    if (!this.props.isSearching && !this.props.disabled) {
      // Clear the previously set timer.
      clearTimeout(this.typingTimeout);

      // Reset the timer in milliseconds
      this.typingTimeout = setTimeout(
        this.callOnChange,
        this.props.typingDelay
      );

      this.setState({
        searchValue: event.target.value,
      });
    }
  }

  render() {
    return (
      <div className="container-fluid m-0 p-0" id="searchContainer">
        <div className="row no-gutters">
          <div className="col">
            <div
              className="input-group input-group-sm"
              style={{
                filter:
                  this.props.isSearching || this.props.disabled
                    ? `opacity(0.65)`
                    : `opacity(1)`,
              }}
            >
              <div className="input-group-prepend">
                <span
                  className="input-group-text"
                  style={{
                    backgroundColor: "transparent",
                  }}
                >
                  {!this.props.isSearching && (
                    <i
                      className="bi bi-search mr-1"
                      id="searchIcon"
                      style={{ fontSize: 12 }}
                    ></i>
                  )}
                  {this.props.isSearching && (
                    <span
                      className="spinner-grow spinner-grow-sm"
                      id="searchSpinner"
                      role="status"
                      aria-hidden="true"
                    ></span>
                  )}
                </span>
              </div>
              <input
                className="form-control pl-0"
                id="searchInput"
                type="search"
                onChange={(event) => {
                  this.handleSearchChange(event);
                }}
                placeholder="Search"
                value={this.state.searchValue}
                style={{
                  borderLeftWidth: 0,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// Props validation and defaults
Search.propTypes = {
  disabled: PropTypes.bool,
  isSearching: PropTypes.bool,
  onChange: PropTypes.func,
  typingDelay: PropTypes.number,
};

Search.defaultProps = {
  isSearching: false,
  typingDelay: 650,
};

export default Search;
