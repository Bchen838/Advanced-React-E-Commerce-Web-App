# E-Commerce Web App 
This project is a React + TypeScript e-commerce demo application that allows users to browse products, filter by category, and manage a shopping cart.
The app integrates with an external API using React Query for data fetching and caching, and uses Redux Toolkit for managing global cart state. Cart data is persisted using sessionStorage to maintain state across page refreshes.

## Features
- Fetches and displays a list of products from an external API (Platzi Fake Store API) since FakeStoreAPI hasn't been working. 
- Displays title, price, category, description, rating (placeholder), and product image. Also handles brokem image URLs with a placeholder
- Category Filtering
- Shopping cart management using the Redux toolkit. Cart data is stored in sessionStorage
- Cart will display total number and price of items, and will update dynamically
- Checkout button will clear the cart and displays comfirmation of purchase
