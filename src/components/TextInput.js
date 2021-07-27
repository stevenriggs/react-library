/// TextInput.js
///
/// - Props:
///   - align: A string for text alignment (left, center or right)
///   - defaultValue: A default value for the input
///   - disabled: A bool to disable the control
///   - helpText: A string for the help text
///   - invalidFeedback: A string for the invalid feedback
///   - isLabelBold: A bool to bold the label text
///   - isLabelMuted: A bool to make the label text muted
///   - isLabelSmall: A bool to change the font size of the label
///   - isLabelUppercase: A bool to make the label uppercase
///   - label: A string for the form control label
///   - maxLength: A number for the maximum characters allowed in the input
///   - name: A string for the name of the input
///   - onChange: A function that sets the value in a parent component
///   - pattern: A string for the validation pattern
///   - placeholder: A string for the placeholder text
///   - required: A bool for required validation
///   - showHelpButton: A bool to show the help button
///   - showLabel: A bool to show the form label
///
/// - Example usage:
///   <TextInput
///      align="center"
///      defaultValue={this.record.mrn}
///      disabled={this.state.disabled}
///      onChange={this.handleSetMRN}
///      required={true}
///      showHelpButton={false}
///   />

import React from "react";
import PropTypes from "prop-types";
import "bootstrap-icons/font/bootstrap-icons.css";

export default class TextInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showHelp: false,
    };
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleToggleHelp = this.handleToggleHelp.bind(this);
  }

  handleOnChange(event) {
    if (window.REACT_APP_DEBUG)
      console.log("TextInput handleOnChange: " + event.target.value);

    if (this.props.onChange) {
      this.props.onChange(event.target.value);
    }
  }

  handleToggleHelp() {
    let showHelpValue = this.state.showHelp;
    this.setState({
      showHelp: !showHelpValue,
    });
  }

  render() {
    var showHelp = this.state.showHelp;
    if (!this.props.showHelpButton) {
      showHelp = String(this.props.helpText).length > 0;
    }

    var labelClass = "";
    switch (this.props.align) {
      case "center":
        labelClass = labelClass + "justify-content-center";
        break;
      case "right":
        labelClass = labelClass + "justify-content-end";
        break;
      default:
        labelClass = labelClass + "justify-content-start";
    }
    if (this.props.isLabelBold) {
      labelClass = labelClass + " font-weight-bold";
    }
    if (this.props.isLabelUppercase) {
      labelClass = labelClass + " text-uppercase";
    }
    if (this.props.isLabelMuted) {
      labelClass = labelClass + " text-muted";
    } else {
      labelClass = labelClass + " text-dark";
    }

    var labelStyle = {};
    labelStyle = this.props.isLabelSmall
      ? { fontSize: 11, letterSpacing: 0.25 }
      : { fontSize: 13, letterSpacing: 0.25 };

    return (
      <div className="form-group form-group-sm">
        {this.props.showLabel && (
          <label
            className={"mb-0 d-flex align-items-center " + labelClass}
            id={this.props.id + "Label"}
            style={labelStyle}
            htmlFor={this.props.id}
          >
            <span id={this.props.id + "LabelSpan"} style={{ lineHeight: 2 }}>
              {this.props.label}
              {this.props.required ? "*" : ""}
            </span>
            {this.props.showHelpButton &&
              String(this.props.helpText).length > 0 && (
                <button
                  type="button"
                  id={this.props.id + "HelpButton"}
                  className="btn btn-sm btn-link m-0 ml-2 p-0 border-0"
                  onClick={() => this.handleToggleHelp()}
                >
                  <i className="bi-question-circle text-muted"></i>
                </button>
              )}
          </label>
        )}
        <input
          className="form-control form-control-sm"
          defaultValue={this.props.defaultValue}
          disabled={this.props.disabled}
          id={this.props.id}
          maxLength={this.props.maxLength}
          name={this.props.name}
          onChange={(event) => {
            this.handleOnChange(event);
          }}
          type="text"
          pattern={this.props.pattern}
          placeholder={this.props.placeholder}
          required={this.props.required}
          style={{ textAlign: this.props.align }}
        ></input>
        <div
          className="invalid-feedback"
          id={this.props.id + "InvalidFeedback"}
        >
          {this.props.invalidFeedback}
        </div>
        {showHelp && this.props.showLabel && (
          <small id={this.props.id + "Help"} className="form-text text-muted">
            {this.props.helpText}
          </small>
        )}
      </div>
    );
  }
}

// Props validation and defaults
TextInput.propTypes = {
  align: PropTypes.string,
  defaultValue: PropTypes.string,
  disabled: PropTypes.bool,
  helpText: PropTypes.string,
  id: PropTypes.string,
  invalidFeedback: PropTypes.string,
  isLabelBold: PropTypes.bool,
  isLabelMuted: PropTypes.bool,
  isLabelSmall: PropTypes.bool,
  isLabelUppercase: PropTypes.bool,
  label: PropTypes.string,
  maxLength: PropTypes.number,
  name: PropTypes.string,
  onChange: PropTypes.func,
  pattern: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  showHelpButton: PropTypes.bool,
  showLabel: PropTypes.bool,
};

TextInput.defaultProps = {
  align: "left",
  defaultValue: "",
  helpText: "",
  id: "text",
  invalidFeedback: "Please provide a value.",
  isLabelBold: true,
  isLabelMuted: false,
  isLabelSmall: false,
  isLabelUppercase: false,
  label: "Text",
  name: "text",
  pattern: ".*",
  placeholder: "",
  showHelpText: false,
  showHelpButton: true,
  showLabel: true,
  required: false,
};
