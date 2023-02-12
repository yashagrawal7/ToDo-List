import { render, screen } from "@testing-library/react";
import Header from "./Header";

// test('check if header works', async() => {
//   render(<Header title = "Abou" />);
//   const headingElement = screen.getByRole("link", {name: "Abou" } );
//   expect(headingElement).toBeInTheDocument();
// });

test("check if prop works", async () => {
  render(<Header title="Abou" />);
  const headingElement = screen.getByRole("link", { name: "Abou" });
  expect(headingElement).toBeInTheDocument();
});

test("check if prop works", async () => {
  render(<Header />);
  const headingElement = screen.getByRole("link", { name: "About" });
  expect(headingElement).toBeInTheDocument();
});

test("check if prop works", async () => {
  render(<Header />);
  const headingElement = screen.getByRole("link", { name: "Home" });
  expect(headingElement).toBeInTheDocument();
});
