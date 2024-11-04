# Liteflix

Liteflix is a movie streaming clone application built with React for Litebox. This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Table of Contents

- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)
- [Learn More](#learn-more)

## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) and npm installed on your machine.

### Installation

1. Clone the repo using:

   ```sh
   git clone https://github.com/luckystoned/liteflix.git
   ```

2. Install NPM packages:

   ```sh
   npm install
   ```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.  
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.  
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.  
See the section about running tests for more information.

### `npm run build`

Builds the app for production to the `build` folder.  
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.  
Your app is ready to be deployed!

See the section about deployment for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you eject, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can eject at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except eject will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use eject. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However, we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Project Structure

A brief description of the project structure:

```
liteflix/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── assets/
│   │   ├── images/
│   │   └── ...
│   ├── components/
│   │   ├── Menu/
│   │   │   ├── Menu.tsx
│   │   │   └── ...
│   ├── context/
│   │   ├── MoviesContextProvider.tsx
│   ├── data/
│   │   ├── rest/
│   │   │   ├── liteflixRest.ts
│   │   ├── apiCloudinary.ts
│   │   ├── liteflixGwApi.ts
│   │   └── ...
│   ├── hooks/
│   │   ├── useMovies.ts
│   │   └── ...
│   ├── pages/
│   │   ├── HomePage/
│   │   │   ├── HomePage.tsx
│   ├── store/
│   │   ├── uploadFileReducer.ts
│   ├── styles/
│   │   ├── GlobalStyles.ts
│   ├── types/
│   │   ├── liteflixTypes.ts
│   ├── utils/
│   │   ├── index.ts
│   ├── App.tsx
│   ├── index.tsx
│   └── ...
```

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
