# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

# TradingView Charting Library and React Integration Example (JavaScript)

The earliest supported version of the charting library for these examples is `v20`.

## How to start

1. Check that you can view https://github.com/tradingview/charting_library/. If you do not have access then you can [request access to this repository here](https://www.tradingview.com/HTML5-stock-forex-bitcoin-charting-library/).
1. Install dependencies `npm install`.
1. Copy `charting_library` folder from https://github.com/tradingview/charting_library/ to `/public` and to `/src` folders. The earliest supported version of the Charting Library is 17. If you get 404 then you need to [request an access to this repository](https://www.tradingview.com/HTML5-stock-forex-bitcoin-charting-library/).
1. Copy `datafeeds` folder from https://github.com/tradingview/charting_library/ to `/public`.
1. Copy the charting library files
   1. If you are able to run bash scripts then the `copy_charting_library_files.sh` script can be used to copy the current stable version's files.
   1. If you are not able to run bash scripts then do the following:
      1. Copy `charting_library` from https://github.com/tradingview/charting_library/ to `/public` and `/src`.
      1. Copy `datafeeds` from https://github.com/tradingview/charting_library/ to `/public`.
1. Run `npm start`. It will build the project and open a default browser with the Charting Library.

## What is Charting Library

Charting Library is a standalone solution for displaying charts. This free, downloadable library is hosted on your servers and is connected to your data feed to be used in your website or app. [Learn more and download](https://www.tradingview.com/HTML5-stock-forex-bitcoin-charting-library/).

## What is React

React is a JavaScript library for building user interfaces. It is maintained by Facebook, Instagram and a community of individual developers and corporations.

## About This Project

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
