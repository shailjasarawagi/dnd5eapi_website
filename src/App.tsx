import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom"; // Importing necessary components from React Router
import styled from "styled-components";

// Styled components for the main layout of the app
const AppContainer = styled.div`
  text-align: center;
  background-color: #f0f0f0;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const AppHeader = styled.header`
  background-color: #4a4a4a;
  padding: 20px;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin: 0;
`;

const Navigation = styled.nav`
  margin: 20px 0;
  display: flex;
  gap: 20px;
`;

const NavLink = styled(Link)`
  color: #61dafb;
  font-size: 1.2rem;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const MainContent = styled.main`
  flex: 1;
  padding: 20px;
`;

const HomePageContent = styled.section`
  background-color: #fff;
  padding: 40px;
  margin: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: left;
`;

const WelcomeMessage = styled.h2`
  font-size: 2rem;
  color: #4a4a4a;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 1.2rem;
  color: #6a6a6a;
  line-height: 1.6;
`;

// Main App component
const App: React.FC = () => {
  const location = useLocation(); // Hook to get the current location

  return (
    <AppContainer>
      {/* Header of the application */}
      <AppHeader>
        <Title>D&D Spell Listing</Title>
        <Navigation>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/spells">Spells</NavLink>
          <NavLink to="/favorites">Favorites</NavLink>
        </Navigation>
      </AppHeader>

      {/* Conditionally render home page content only on the home route */}
      {location.pathname === "/" && (
        <HomePageContent>
          <WelcomeMessage>Welcome to D&D Spell Listing!</WelcomeMessage>
          <Description>
            Discover a comprehensive list of D&D spells, manage your favorites,
            and explore detailed spell descriptions. Start by navigating to the
            Spells page or checking out your favorite spells.
          </Description>
        </HomePageContent>
      )}

      {/* Main content area where nested routes will be rendered */}
      <MainContent>
        <Outlet /> {/* Outlet for rendering nested routes */}
      </MainContent>
    </AppContainer>
  );
};

export default App;
