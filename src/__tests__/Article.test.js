import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";
import Article from "../components/Article";

test("displays the text 'please pass this test'", () => {
  render(<Article />);
  expect(screen.getByText(/please pass this test/i)).toBeInTheDocument();
});
