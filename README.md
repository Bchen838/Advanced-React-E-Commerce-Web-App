# E-Commerce Web App 
This project is a React and TypeScript e-commerce application that allows users to browse products, filter items by category, and manage a shopping cart experience. The application integrates with the FakeStoreAPI (later replaced with the Platzi Fake Store API due to API reliability issues) and uses React Query for asynchronous data fetching and caching.

Global shopping cart state is managed using Redux Toolkit, while sessionStorage is used to persist cart data across browser refreshes.

## Features
- Fetches and displays a list of products from an external API (Platzi Fake Store API) since FakeStoreAPI hasn't been working at the moment. 
- Displays title, price, category, description, rating (placeholder), and product image. Also handles brokem image URLs with a placeholder
- Category Filtering
- Shopping cart management using the Redux toolkit. Cart data is stored in sessionStorage
- Cart will display total number and price of items, and will update dynamically
- Checkout button will clear the cart and displays comfirmation of purchase


## Technologies Used
- React
- TypeScript
- Redux Toolkit
- React Query
- React Router
- CSS


## How to Run
1. Clone Repository: git clone https://github.com/Bchen838/Advanced-React-E-Commerce-Web-App.git
2. cd e-commerce
3. npm install
4. npm run dev


## Future Improvements
1. Add User Authentication
2. Implement backend order processing
3. Add product search and sorting functionality
4. Improve accessibility and responsive design
