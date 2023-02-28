import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/Baker 75 Street/i);
  expect(linkElement).toBeInTheDocument();
});
