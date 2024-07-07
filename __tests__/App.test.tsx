import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import App from "../src/App"; // Ensure the path to your App component is correct
import "@testing-library/jest-dom/extend-expect"; // For better assertions

// Mock component for the nested routes
const MockComponent = ({ text }: { text: string }) => <div>{text}</div>;

describe("App Component", () => {
  test('renders the home page content when the location is "/"', () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Routes>
          <Route path="/" element={<App />}>
            <Route
              path="spells"
              element={<MockComponent text="Spells Page" />}
            />
            <Route
              path="favorites"
              element={<MockComponent text="Favorites Page" />}
            />
          </Route>
        </Routes>
      </MemoryRouter>
    );

    // Check that the welcome message and description are rendered
    expect(
      screen.getByText("Welcome to D&D Spell Listing!")
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        "Discover a comprehensive list of D&D spells, manage your favorites, and explore detailed spell descriptions. Start by navigating to the Spells page or checking out your favorite spells."
      )
    ).toBeInTheDocument();
  });

  test("renders the navigation links", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Routes>
          <Route path="/" element={<App />}>
            <Route
              path="spells"
              element={<MockComponent text="Spells Page" />}
            />
            <Route
              path="favorites"
              element={<MockComponent text="Favorites Page" />}
            />
          </Route>
        </Routes>
      </MemoryRouter>
    );

    // Check that navigation links are rendered
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Spells")).toBeInTheDocument();
    expect(screen.getByText("Favorites")).toBeInTheDocument();
  });

  test("navigates to the Spells page and renders the outlet content", () => {
    render(
      <MemoryRouter initialEntries={["/spells"]}>
        <Routes>
          <Route path="/" element={<App />}>
            <Route
              path="spells"
              element={<MockComponent text="Spells Page" />}
            />
            <Route
              path="favorites"
              element={<MockComponent text="Favorites Page" />}
            />
          </Route>
        </Routes>
      </MemoryRouter>
    );

    // Check that the spells page content is rendered
    expect(screen.getByText("Spells Page")).toBeInTheDocument();
  });

  test("navigates to the Favorites page and renders the outlet content", () => {
    render(
      <MemoryRouter initialEntries={["/favorites"]}>
        <Routes>
          <Route path="/" element={<App />}>
            <Route
              path="spells"
              element={<MockComponent text="Spells Page" />}
            />
            <Route
              path="favorites"
              element={<MockComponent text="Favorites Page" />}
            />
          </Route>
        </Routes>
      </MemoryRouter>
    );

    // Check that the favorites page content is rendered
    expect(screen.getByText("Favorites Page")).toBeInTheDocument();
  });
});
