/// DeleteButton.js
///
/// - Props:
///   - onDelete: A function to execute when the user has confirmed deletion
///
/// - Example usage:
///   <DeleteButton onDelete={this.handleDelete} />

import React from "react";
import PropTypes from "prop-types";

export default class DeleteButton extends React.Component {
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
        <div className="btn-toolbar mr-auto" role="toolbar">
          <button
            type="button"
            className="btn btn-sm btn-outline-secondary mr-2"
            data-testid="cancelbutton"
            onClick={handleCancelButtonClick}
          >
            Cancel
          </button>
          <button
            type="button"
            className="btn btn-sm btn-danger"
            data-testid="yesdeletebutton"
            onClick={this.props.onDelete}
          >
            Yes, Delete
          </button>
        </div>
      );
    } else {
      return (
        <button
          type="button"
          className="btn btn-sm btn-danger mr-auto"
          data-testid="deletebutton"
          onClick={handleInitialDeleteButtonClick}
        >
          Delete
        </button>
      );
    }
  }
}

// props validation
DeleteButton.propTypes = {
  onDelete: PropTypes.func,
};
