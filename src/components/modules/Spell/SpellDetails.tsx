import React, { useEffect } from "react";
import { RootState } from "../../../store/store";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { fetchSpellDetails } from "../../../store/spell";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";

// Styled-components for styling the detail page layout and elements
const DetailContainer = styled.div`
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const SpellHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #e9ecef;
  padding-bottom: 10px;
  margin-bottom: 20px;
`;

const SpellName = styled.h2`
  color: #343a40;
`;

const SpellLevel = styled.span`
  font-size: 1.2rem;
  color: #495057;
`;

const Section = styled.div`
  margin-bottom: 20px;
`;

const SectionTitle = styled.h3`
  font-size: 1.1rem;
  color: #495057;
  margin-bottom: 10px;
`;

const SpellDescription = styled.p`
  color: #495057;
  line-height: 1.6;
`;

const DetailLabel = styled.span`
  font-weight: bold;
`;

// Interface for detail props used in the Detail component
interface DetailProps {
  label: string;
  value: string | undefined;
  extra?: string;
}

// Detail component to display individual spell details with optional extra information
const Detail: React.FC<DetailProps> = ({ label, value, extra }) => (
  <div>
    <DetailLabel>{label}: </DetailLabel>
    {value} {extra}
  </div>
);

// Main component for the Spell Details Page
const SpellDetailsPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const spell = useAppSelector(
    (state: RootState) => state.spells.selectedSpell
  );
  const { index } = useParams<{ index: string }>();

  // Fetch spell details when the component is mounted or the index changes
  useEffect(() => {
    if (index) {
      dispatch(fetchSpellDetails(index));
    }
  }, [dispatch, index]);

  // Display loading text while spell data is being fetched
  if (!spell) {
    return <div>Loading...</div>;
  }

  return (
    <DetailContainer>
      <SpellHeader>
        <SpellName>{spell.name}</SpellName>
        <SpellLevel>Level {spell.level}</SpellLevel>
      </SpellHeader>

      <Section>
        <SectionTitle>Details</SectionTitle>
        <Detail label="Range" value={spell.range} />
        <Detail
          label="Components"
          value={spell?.components?.join(", ")}
          extra={spell?.material && `(${spell?.material})`}
        />
        <Detail
          label="Duration"
          value={spell?.duration}
          extra={spell?.concentration && "(Concentration)"}
        />
        <Detail label="Casting Time" value={spell?.casting_time} />
      </Section>

      <Section>
        <SectionTitle>Additional Information</SectionTitle>
        <Detail label="Damage Type" value={spell?.damage?.damage_type?.name} />
        <Detail label="School" value={spell?.school?.name} />
        <div>
          <DetailLabel>Classes: </DetailLabel>
          {spell?.classes?.map((cls: any, index: Number) => (
            <span key={cls.index}>
              {cls.name}
              {index !== spell?.classes.length - 1 ? ", " : ""}
            </span>
          ))}
        </div>
        <div>
          <DetailLabel>Subclasses: </DetailLabel>
          {spell?.subclasses?.map((subclass: any, index: Number) => (
            <span key={subclass.index}>
              {subclass.name}
              {index !== spell?.subclasses.length - 1 ? ", " : ""}
            </span>
          ))}
        </div>
      </Section>

      <Section>
        <SectionTitle>Description</SectionTitle>
        <SpellDescription>{spell?.desc?.join(" ")}</SpellDescription>
      </Section>
    </DetailContainer>
  );
};

export default SpellDetailsPage;
