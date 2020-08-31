/// SearchControl.js
///
/// - Props:
///   - disabled: A bool to disable the control
///   - onSearch: A function to execute when the user has initiated a search
///   - text: A string that is the value in the search control
///
/// - Example usage:
///   <SearchControl disabled={this.state.disabled} onSearch={this.handleSearch} text={this.state.search} />

import React from "react";
import PropTypes from "prop-types";
// react-bootstrap
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import FormControl from "react-bootstrap/FormControl";

class SearchControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(event) {
    this.props.onSearch(event.target.value);
  }

  render() {
    return (
      <Container fluid className="p-0">
        <Row noGutters>
          <Col>
            <FormControl
              type="search"
              disabled={this.props.disabled}
              onChange={(event) => {
                this.handleSearch(event);
              }}
              placeholder="Search..."
              defaultValue={this.props.text}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

// props validation
SearchControl.propTypes = {
  disabled: PropTypes.bool,
  onSearch: PropTypes.func,
  text: PropTypes.string,
};

export default SearchControl;
