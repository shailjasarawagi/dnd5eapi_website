import React from "react";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import styled from "styled-components";
import { Spell } from "../../store/spell"; // Ensure the Spell type is imported

// Styled components for the spell row
const SpellRowContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 10px;
  padding-right: 50px;
  align-items: center;
  border-bottom: 1px solid #dee2e6;
  &:hover {
    background: #e9ecef;
  }
`;

const SpellName = styled.span`
  font-size: 1.2rem;
  color: #495057;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const FavoriteIcon = styled(FaStar)<{ isfavorite: boolean }>`
  color: ${({ isfavorite }) => (isfavorite ? "#ffc107" : "#ccc")};
  cursor: pointer;
  &:hover {
    color: #ffb000;
  }
`;

// Props interface for the SpellRow component
interface SpellRowProps {
  spell: Spell; // The spell data
  isfavorite: boolean; // Indicates if the spell is a favorite
  onFavoriteClick: (spell: Spell) => void; // Function to handle favorite click
  style: React.CSSProperties; // Style object for the row, passed from react-window
}

// SpellRow component definition, wrapped with React.memo to optimize performance
const SpellRow: React.FC<SpellRowProps> = React.memo(
  ({ spell, isfavorite, onFavoriteClick, style }) => {
    // Function to handle click on the favorite icon
    const handleFavoriteClick = () => {
      onFavoriteClick(spell);
    };

    return (
      // Container for the spell row, styled with CSS-in-JS
      <SpellRowContainer style={style}>
        {/* Link to the spell details page */}
        <Link to={`/spell/${spell.index}`}>
          <SpellName>{spell.name}</SpellName>
        </Link>
        {/* Favorite icon with conditional styling and click handler */}
        <FavoriteIcon
          isfavorite={isfavorite}
          onClick={handleFavoriteClick}
          aria-label={isfavorite ? "Remove from favorites" : "Add to favorites"}
        />
      </SpellRowContainer>
    );
  }
);

// Export the SpellRow component
export default SpellRow;
