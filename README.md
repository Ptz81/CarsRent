Car Rental Application

This repository contains the code for a web application designed for a car rental company operating in Ukraine. The application consists of three main pages:

    Home Page: Provides a general overview of the services offered by the company. Styling and design are at your discretion.

    Catalog Page: Displays a catalog of cars with various specifications that users can filter by brand, hourly rental price, and mileage.

    Favorites Page: Lists advertisements that users have added to their favorites. The application's user interface includes a sidebar and a viewing area.

Technical Requirements

    Implement a card layout for rental advertisements according to the provided design.
    The catalog page should initially display 8 advertisements, with more loaded upon clicking the "Load more" button.
    Clicking the heart-shaped button on an advertisement card should add it to the user's favorites and change the button color accordingly.
    When the page is refreshed, the user's actions should persist. For example, if an advertisement was added to favorites, the heart button should still appear as selected.
    Clicking the heart-shaped button on an already favorited advertisement should remove it from the user's favorites and revert the button color.
    Clicking the "Learn more" button should open a modal window with detailed information about the car and its rental conditions.
    The modal window should close when clicking the close button ("X"), clicking on the backdrop, or pressing the "Esc" key.
    Display the car's mileage as a single value in the code (e.g., 4500) but format it in UI with commas (e.g., 4,500).
    Implement the "Rental car" button as a link that allows users to contact the company via phone at +380730000000.

Routing

Implement routing using React Router with the following routes:

    /: Home page with a general description of the company's services.
    /catalog: Page displaying the car catalog with various specifications.
    /favorites: Page listing advertisements added to the user's favorites.

If a user tries to access a non-existent route, they should be redirected to the home page.
Backend Integration

Create a custom backend for development using the UI service provided by https://mockapi.io/. Create a resource named "adverts" and describe the advertisement object as follows:

    Dropdown for car brands using data from "makes.json" to filter advertisements by brand.
    Dropdown for hourly rental prices (in increments of $10) to filter advertisements by the selected price range.
    A group of input fields for specifying a mileage range to filter advertisements within the chosen mileage range
