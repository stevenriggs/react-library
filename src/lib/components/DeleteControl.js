/// DeleteControl.js
///
/// - Props:
///   - onDelete: A function to execute when the user has confirmed deletion
///
/// - Example usage:
///   <DeleteControl onDelete={this.handleDelete} />

import React from "react";
import PropTypes from "prop-types";
// react-bootstrap
import Button from "react-bootstrap/Button";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";

class DeleteControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDeleteClicked: false,
    };
  }

  render() {
    let handleInitialDeleteButtonClick = () =>
      this.setState({ isDeleteClicked: true });
    let handleCancelButtonClick = () =>
      this.setState({ isDeleteClicked: false });
    if (this.state.isDeleteClicked) {
      return (
        <ButtonToolbar className="mr-auto">
          <Button
            variant="outline-secondary"
            className="mr-2"
            data-testid="cancelbutton"
            onClick={handleCancelButtonClick}
          >
            Cancel
          </Button>
          <Button
            variant="danger"
            data-testid="yesdeletebutton"
            onClick={this.props.onDelete}
          >
            Yes, Delete
          </Button>
        </ButtonToolbar>
      );
    } else {
      return (
        <Button
          variant="outline-danger"
          className="mr-auto"
          data-testid="deletebutton"
          onClick={handleInitialDeleteButtonClick}
        >
          Delete
        </Button>
      );
    }
  }
}

// props validation
DeleteControl.propTypes = {
  onDelete: PropTypes.func,
};

export default DeleteControl;
