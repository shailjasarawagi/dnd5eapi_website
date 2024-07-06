// App.test.tsx
import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom"; // Use BrowserRouter for testing
import App from "../src/App";

describe("App component", () => {
  it("renders title correctly", () => {
    const { getByText } = render(
      <Router>
        <App />
      </Router>
    );
    const titleElement = getByText(/D&D Spell Listing/i); // Case insensitive match for the title
    expect(titleElement).toBeInTheDocument();
  });

  it("renders navigation links correctly", () => {
    const { getByText } = render(
      <Router>
        <App />
      </Router>
    );
    const spellsLink = getByText(/Spells/i); // Case insensitive match for the link text
    const favoritesLink = getByText(/Favorites/i);
    expect(spellsLink).toBeInTheDocument();
    expect(favoritesLink).toBeInTheDocument();
  });

  it("navigates to Spells page correctly", () => {
    // Since NavLink is tested by React Router, we'll just check if it renders correctly
    const { getByText } = render(
      <Router>
        <App />
      </Router>
    );
    const spellsLink = getByText(/Spells/i);
    expect(spellsLink.getAttribute("href")).toBe("/spells");
  });

  it("navigates to Favorites page correctly", () => {
    // Similar to above, ensure Favorites link points correctly
    const { getByText } = render(
      <Router>
        <App />
      </Router>
    );
    const favoritesLink = getByText(/Favorites/i);
    expect(favoritesLink.getAttribute("href")).toBe("/favorites");
  });

  // Add more test cases as needed for specific behavior of your application
});
