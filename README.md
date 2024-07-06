D&D Spell Listing App
Overview:

This project is a Dungeons & Dragons (D&D) Spell Listing web application built with React, Redux Toolkit, and React Router. It allows users to view a list of D&D spells, mark their favorite spells, and view detailed information about each spell.

Features:

1.  Spell List: Displays a list of D&D spells fetched from the D&D 5e API.
2.  Spell Details: Provides detailed information about each spell, including its level, range, components, duration, and description.
3.  Favorites: Allows users to mark spells as favorites and view a list of their favorite spells.

Technologies Used

    Frontend:
        React
        Redux Toolkit for state management
        React Router for routing
        Styled-components for styling

    Backend/APIs:
        Uses the D&D 5e API (https://www.dnd5eapi.co/) for spell data

To run this project locally, follow these steps:

1. Clone the repository:

   - git clone <git@github.com:shailjasarawagi/dnd5eapi_website.git>
   - cd dnd5eapi_website

2. Install dependencies:
   npm install

3. Start the development server:
   npm start
4. Open the application:
   Open http://localhost:3000 to view it in the browser.

Folder Structure

The project structure follows a modular approach:

    src/components/elements/: Contains reusable UI components.
    src/component/templates: Contains template components for structured layout.
    src/component/modules: Contains feature-specific modules like SpellDetail and SpellFavoriteList.
