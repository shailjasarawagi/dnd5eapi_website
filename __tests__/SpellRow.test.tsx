import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { Spell } from "../src/store/spell"; // Ensure this import matches your Spell type
import SpellRow from "../src/components/elements/SpellRow";

// Mock data for a spell
const mockSpell: Spell = {
  index: "fireball",
  name: "Fireball",
  url: "acid-arrow",
  level: "1",
  // Add other required fields for Spell type
};

describe("SpellRow component", () => {
  it("renders spell name correctly", () => {
    const { getByText } = render(
      <Router>
        <SpellRow
          spell={mockSpell}
          isfavorite={false}
          onFavoriteClick={() => {}}
          style={{}}
        />
      </Router>
    );
    const spellNameElement = getByText(/Fireball/i); // Case insensitive match for 'Fireball'
    expect(spellNameElement).toBeInTheDocument();
  });

  it("fires onFavoriteClick handler correctly", () => {
    const onFavoriteClickMock = jest.fn(); // Mock function for onFavoriteClick handler
    const { getByLabelText } = render(
      <Router>
        <SpellRow
          spell={mockSpell}
          isfavorite={false}
          onFavoriteClick={onFavoriteClickMock}
          style={{}}
        />
      </Router>
    );
    const favoriteIcon = getByLabelText(/Add to favorites/i); // Match aria-label for 'Add to favorites'
    fireEvent.click(favoriteIcon);
    expect(onFavoriteClickMock).toHaveBeenCalledWith(mockSpell);
  });

  it("renders favorite icon correctly when spell is a favorite", () => {
    const { getByLabelText } = render(
      <Router>
        <SpellRow
          spell={mockSpell}
          isfavorite={true}
          onFavoriteClick={() => {}}
          style={{}}
        />
      </Router>
    );
    const favoriteIcon = getByLabelText(/Remove from favorites/i); // Match aria-label for 'Remove from favorites'
    expect(favoriteIcon).toBeInTheDocument();
  });
});
