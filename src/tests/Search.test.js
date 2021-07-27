// Search.test.js

import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { Simulate } from "react-dom/test-utils";

import Search from "../components/Search";

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
    render(<Search />, container);
  });
  // get the element
  const searchInput = document.querySelector("[id=searchInput]");
  // test the element
  expect(searchInput).not.toBeNull();
});

it("renders only search icon with false isSearching prop", () => {
  const isSearchingValue = false;
  act(() => {
    render(<Search isSearching={isSearchingValue} />, container);
  });
  // get the element
  const searchSpinner = document.querySelector("[id=searchSpinner]");
  const searchIcon = document.querySelector("[id=searchIcon]");
  // test the element
  expect(searchSpinner).toBeNull();
  expect(searchIcon).not.toBeNull();
});

it("renders only grow spinner with true isSearching prop", () => {
  const isSearchingValue = true;
  act(() => {
    render(<Search isSearching={isSearchingValue} />, container);
  });
  // get the element
  const searchSpinner = document.querySelector("[id=searchSpinner]");
  const searchIcon = document.querySelector("[id=searchIcon]");
  // test the element
  expect(searchSpinner).not.toBeNull();
  expect(searchIcon).toBeNull();
});

it("executes onChange on search input with correct timing", async () => {
  jest.useFakeTimers();

  // test function
  const handleOnChange = jest.fn();
  act(() => {
    render(<Search onChange={handleOnChange} />, container);
  });
  // get the element
  const searchInput = document.querySelector("[id=searchInput]");

  // Change the input value
  searchInput.value = "a";
  Simulate.change(searchInput);

  // At this point in time, the callback should not have been called yet
  expect(handleOnChange).not.toBeCalled();

  // Fast-forward until all timers have been executed
  jest.runAllTimers();

  // Now our callback should have been called!
  expect(handleOnChange).toHaveBeenCalledTimes(1);
});
