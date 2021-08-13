// TODO: Delete this file later if it is not needed in the production build

import { render, screen } from "@testing-library/react";
import Index from "./pages";

test("renders learn react link", () => {
  render(<Index />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
