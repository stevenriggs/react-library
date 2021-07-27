// TextInput.test.js

import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { Simulate } from "react-dom/test-utils";

import TextInput from "../components/TextInput";

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  // container *must* be attached to document so events work correctly.
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders with no props", () => {
  act(() => {
    render(<TextInput />, container);
  });
  // get the element
  const textInput = document.querySelector("[id=text]");
  // test the element
  expect(textInput).not.toBeNull();
});

it("renders with defaultValue prop", () => {
  const defaultValue = "Text";
  act(() => {
    render(<TextInput defaultValue={defaultValue} />, container);
  });
  // get the element
  const textInput = document.querySelector("[id=text]");
  // test the element
  expect(textInput.value).toBe(defaultValue);
});

it("executes onChange on input", async () => {
  // test function
  const handleOnChange = jest.fn();

  act(() => {
    render(<TextInput onChange={handleOnChange} />, container);
  });
  // get the element
  const textInput = document.querySelector("[id=text]");

  // Change the input value
  textInput.value = "a";
  Simulate.change(textInput);

  // Now our callback should have been called!
  expect(handleOnChange).toHaveBeenCalledTimes(1);
});

it("shows help text when the help button is pressed", async () => {
  // test help text
  const helpText = "Help text.";

  act(() => {
    render(<TextInput helpText={helpText} />, container);
  });

  // get the help text element
  const textHelpBefore = document.querySelector("[id=textHelp]");

  // Help should not be visible
  expect(textHelpBefore).toBeNull();

  // get the button element
  const helpButton = document.querySelector("[id=textHelpButton]");

  // click the button
  act(() => {
    helpButton.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });

  // get the help text element
  const textHelpAfter = document.querySelector("[id=textHelp]");

  // Now our help should be visible with the correct text
  expect(textHelpAfter).not.toBeNull();
  expect(textHelpAfter.innerHTML).toBe(helpText);
});

it("renders label with label prop", () => {
  const componentLabel = "Label";
  act(() => {
    render(<TextInput label={componentLabel} />, container);
  });
  // get the element
  const inputLabel = document.querySelector("[id=textLabelSpan]");

  // test the element
  expect(inputLabel).not.toBeNull();
  expect(inputLabel.innerHTML).toBe(componentLabel);
});

it("renders no label with showLabel prop as false", () => {
  act(() => {
    render(<TextInput showLabel={false} />, container);
  });
  // get the element
  const inputLabel = document.querySelector("[id=textLabel]");

  // test the element
  expect(inputLabel).toBeNull();
});

it("renders invalidFeedback with prop", () => {
  const defaultValue = "";
  const invalidFeedback = "Invalid";
  act(() => {
    render(
      <TextInput
        defaultValue={defaultValue}
        invalidFeedback={invalidFeedback}
        required={true}
      />,
      container
    );
  });
  // get the element
  const textInvalidFeedback = document.querySelector(
    "[id=textInvalidFeedback]"
  );
  // test the element
  expect(textInvalidFeedback.innerHTML).toBe(invalidFeedback);
});

it("renders no help button with showHelpButton prop as false", () => {
  act(() => {
    render(<TextInput showHelpButton={false} />, container);
  });
  // get the element
  const inputHelpButton = document.querySelector("[id=textHelpButton]");

  // test the element
  expect(inputHelpButton).toBeNull();
});
