// FavoritesList.test.tsx
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store"; // Install redux-mock-store for mocking Redux store
import FavoritesList from "../src/components/modules/Spell/SpellFavoriteList";

// Mocked Redux store
const mockStore = configureStore([]);
jest.mock("axios");
describe("FavoritesList component", () => {
  let store: any;

  beforeEach(() => {
    store = mockStore({
      spells: {
        favorites: [
          { index: "fireball", name: "Fireball", level: 1, url: "fireball" },
          {
            index: "lightning-bolt",
            name: "Lightning Bolt",
            level: 2,
            url: "fireball",
          },
        ],
      },
    });
  });

  it("renders favorite spells correctly", () => {
    const { getByText } = render(
      <Provider store={store}>
        <FavoritesList />
      </Provider>
    );
    const fireballElement = getByText(/Fireball/i);
    const lightningBoltElement = getByText(/Lightning Bolt/i);
    expect(fireballElement).toBeInTheDocument();
    expect(lightningBoltElement).toBeInTheDocument();
  });
});
