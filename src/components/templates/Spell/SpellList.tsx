import React, { useCallback, useEffect } from "react";
import { RootState } from "../../../store/store";
import { FixedSizeList as List } from "react-window"; // Importing react-window for virtualized list
import styled from "styled-components";
import { addFavorite, fetchSpells, removeFavorite } from "../../../store/spell"; // Importing Redux actions
import SpellRow from "../../elements/SpellRow"; // Assuming SpellRow component is defined separately
import { Spell } from "../../../store/spell"; // Importing Spell type
import { useAppDispatch, useAppSelector } from "../../../store/hooks";

// Styled-components for styling the spell list layout and elements
const SpellListContainer = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
  background: #f8f9fa;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const SpellListHeader = styled.h1`
  text-align: center;
  color: #343a40;
`;

const LoadingMessage = styled.div`
  text-align: center;
  color: #6c757d;
  font-size: 1.2rem;
  margin-top: 20px;
`;

const ErrorMessage = styled.div`
  text-align: center;
  color: #dc3545;
  font-size: 1.2rem;
  margin-top: 20px;
`;

// SpellList component renders a list of spells with loading and error handling
const SpellList: React.FC = () => {
  const dispatch = useAppDispatch();
  const { spells, loading, error, favorites } = useAppSelector(
    (state: RootState) => state.spells
  );

  // Fetch spells when the component mounts
  useEffect(() => {
    dispatch(fetchSpells());
  }, [dispatch]);

  // Callback function to handle adding/removing spells from favorites
  const handleFavoriteClick = useCallback(
    (spell: Spell) => {
      const isFavorited = favorites.some((fav) => fav.index === spell.index);
      if (isFavorited) {
        dispatch(removeFavorite(spell)); // Dispatches action to remove spell from favorites
      } else {
        dispatch(addFavorite(spell)); // Dispatches action to add spell to favorites
      }
    },
    [dispatch, favorites]
  );

  // Loading state: Display loading message
  if (loading) {
    return (
      <SpellListContainer>
        <LoadingMessage>Loading spells...</LoadingMessage>
      </SpellListContainer>
    );
  }

  // Error state: Display error message
  if (error) {
    return (
      <SpellListContainer>
        <ErrorMessage>Error loading spells: {error}</ErrorMessage>
      </SpellListContainer>
    );
  }

  // Default state: Render spell list using react-window for virtualization
  return (
    <SpellListContainer>
      <SpellListHeader>Spell List</SpellListHeader>
      <List height={600} itemCount={spells.length} itemSize={70} width={"100%"}>
        {({ index, style }) => (
          <SpellRow
            key={spells[index].index}
            spell={spells[index]}
            isFavorite={favorites.some(
              (fav) => fav.index === spells[index].index
            )}
            onFavoriteClick={handleFavoriteClick}
            style={style}
          />
        )}
      </List>
    </SpellListContainer>
  );
};

export default SpellList;
