# Project Description
Simple project to test typescript and Graphql with form creation. two different type of apps, one is connected to Enturs GraphQL and other is just a simple form for testing typescript and react

This project uses the following technologies:

-   Redux and Redux Slice for state management, with separate reducers for `user` and `bus` data
-   GraphQL for fetching data from the Entur API
-   Formik and Yup for form handling and validation
-   Material-UI as a component library
-   TypeScript for type checking

## Getting Started

1. Clone the repository
2. Install dependencies with `npm install` or `yarn install`
3. Start the development server with `npm start` or `yarn start`

## File Structure

-   `/src`: The source code for the project
    -   `/components`: Reusable UI components
    -   `/reducers`: Redux reducers for `user` and `bus` data, organized with Redux Slice
    -   `/services`: GraphQL client and API utility functions
    -   `/store`: Redux store configuration
    -   `/utils`: Utility functions
