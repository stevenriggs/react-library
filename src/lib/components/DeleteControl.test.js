// DeleteControl.test.js

import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import DeleteControl from "./DeleteControl";

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

it("first button changes when clicked", () => {
  const onDelete = jest.fn();
  act(() => {
    render(<DeleteControl onDelete={onDelete} />, container);
  });

  // delete button should be present
  const deletebutton = document.querySelector("[data-testid=deletebutton]");

  expect(deletebutton.innerHTML).toBe("Delete");

  // click the delete button
  act(() => {
    deletebutton.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });

  // cancel button should take the place of delete button
  const cancelbutton = document.querySelector("[data-testid=cancelbutton]");
  expect(cancelbutton.innerHTML).toBe("Cancel");

  // click the cancel button
  act(() => {
    cancelbutton.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });

  // delete button should take the place of the cancel button
  expect(deletebutton.innerHTML).toBe("Delete");
});

it("executes onDelete when second button is clicked", () => {
  const onDelete = jest.fn();
  act(() => {
    render(<DeleteControl onDelete={onDelete} />, container);
  });

  // get ahold of the first button element, and trigger a click on it
  const deletebutton = document.querySelector("[data-testid=deletebutton]");

  expect(deletebutton.innerHTML).toBe("Delete");

  act(() => {
    deletebutton.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });

  const cancelbutton = document.querySelector("[data-testid=cancelbutton]");

  expect(cancelbutton.innerHTML).toBe("Cancel");

  const yesdeletebutton = document.querySelector(
    "[data-testid=yesdeletebutton]"
  );

  expect(yesdeletebutton.innerHTML).toBe("Yes, Delete");

  act(() => {
    yesdeletebutton.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });

  expect(onDelete).toHaveBeenCalledTimes(1);
});
