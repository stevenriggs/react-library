// SearchControl.test.js

import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import SearchControl from "./SearchControl";

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders without the props", () => {
  act(() => {
    render(<SearchControl />, container);
  });
  expect(container.textContent).toBe("");
});

it("renders with the props", () => {
  const handleSearch = jest.fn();
  act(() => {
    render(
      <SearchControl
        search="The Search"
        onSearch={handleSearch}
        disabled={false}
      />,
      container
    );
  });
  // TODO: Figure out how to test a form control with Jest
});
