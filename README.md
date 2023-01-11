# House Marketplace

Find and list houses for sale or for rent. This is a React / Firebase v9 project from the React Front To Back 2022 course.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\

## Usage
The listings use Google geocoding to get the coords from the address field. You need to add .env and add your Google Geocode API key OR in the CreateListing.jsx file set geolocationEnabled to "false" and it will add a lat/lng field to the form.
