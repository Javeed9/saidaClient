# Saida Jewellers WebApp - Frontend

Welcome to the Saida Jewellers WebApp frontend repository! This web application is designed for shop owners to take their catalog online. It utilizes technologies like Tailwind CSS, React, React Router, Toastify, and React Icons to provide a seamless and efficient user experience.

## Getting Started

Follow these steps to set up and run the project locally:

1. Create a `.env` file from the provided `.env.example` file and add the backend URL. This is necessary for the frontend to communicate with the backend.

2. Navigate to the `client` directory using the command line:

```bash
cd client

# Install the required dependencies using npm:

npm install

# Run the development server:

npm run dev
```

### Note: Make sure to add the backend URL domain to the proxy configuration to avoid CORS issues.

Building the Project

To build the project for production, run the following command in the client directory:

```bash
npm run build
```
This command will generate the optimized and minified production build in the build directory.