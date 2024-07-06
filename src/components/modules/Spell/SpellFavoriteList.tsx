import React, { useCallback } from "react";
import styled from "styled-components";
import { RootState } from "../../../store/store";
import { removeFavorite, Spell } from "../../../store/spell";

import { useAppDispatch, useAppSelector } from "../../../store/hooks";

// Styled-components for styling the favorites list layout and elements
const FavoritesContainer = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
  background: #f8f9fa;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const FavoritesHeader = styled.h1`
  text-align: center;
  color: #343a40;
`;

const SpellRow = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid #dee2e6;
  &:hover {
    background: #e9ecef;
  }
`;

const SpellName = styled.span`
  flex: 1;
  cursor: pointer;
  color: #495057;
  &:hover {
    text-decoration: underline;
  }
`;

const RemoveButton = styled.button`
  background: #dc3545;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background: #c82333;
  }
`;

// Interface for props passed to SpellRowComponent
interface SpellRowProps {
  spell: Spell;
  onRemove: (spell: Spell) => void; // Function to handle spell removal
}

// SpellRowComponent renders a single spell row with remove button
const SpellRowComponent: React.FC<SpellRowProps> = ({ spell, onRemove }) => {
  return (
    <SpellRow>
      <SpellName>{spell.name}</SpellName>
      <RemoveButton onClick={() => onRemove(spell)}>Remove</RemoveButton>
    </SpellRow>
  );
};

// FavoritesList component displays a list of favorite spells
const FavoritesList: React.FC = () => {
  const dispatch = useAppDispatch();
  const favorites = useAppSelector(
    (state: RootState) => state.spells.favorites
  );

  // useCallback to memoize the removal handler function
  const handleRemoveFavorite = useCallback(
    (spell: Spell) => {
      dispatch(removeFavorite(spell)); // Dispatches action to remove favorite spell
    },
    [dispatch]
  );

  return (
    <FavoritesContainer>
      <FavoritesHeader>Favorite Spells</FavoritesHeader>
      <ul>
        {favorites.map((spell) => (
          <SpellRowComponent
            key={spell.index}
            spell={spell}
            onRemove={handleRemoveFavorite} // Passes the removal handler to SpellRowComponent
          />
        ))}
      </ul>
    </FavoritesContainer>
  );
};

export default FavoritesList;
