# eCommerce Website

![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)

An eCommerce website built with React, utilizing React hooks for state management and Bootstrap for styling.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/your-username/ecommerce-website.git
    cd ecommerce-website
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Start the development server:
    ```sh
    npm start
    ```

## Usage

To run the project locally, follow the installation steps above. The development server will be available at `http://localhost:3000`.

## Features

- **React Hooks:** Utilize hooks like `useState`, `useEffect`, and `useContext` for state management and side effects.
- **Bootstrap:** Use Bootstrap for responsive and modern UI components.
- **Product Listing:** Display a list of products with details.
- **Shopping Cart:** Add and remove products from the shopping cart.
- **Checkout:** Simple checkout process.

## Explanation
React Hooks: The useState hook is used to create a state variable products to store the list of products. The useEffect hook is used to perform the side effect of fetching data when the component mounts.
fetch API: The fetch function is used to send a GET request to the /api/products endpoint. The response is then converted to JSON and stored in the products state variable.
Bootstrap: The Bootstrap classes are used to style the product list and cards.
