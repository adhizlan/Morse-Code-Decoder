# React Morse Code Encoder/Decoder Web App

This project was designed to serve as a single page react web app with the capability to decode morse code into text. Additionally, this app features an encode feature which allows users to input text and encode to morse code. 

## Description

The web app features an input textarea box, as well as buttons to decode, encode, clear, and copy input. The app supports input in the form of text or morse code. Only "-" or "." characters are to be used for morse code input with one space in between each morse letter and three spaces in between each morse word. Regular text can be input normally. 


Ex. 1: .... --- .--   .- .-. .   -.-- --- ..- ..--..    =>    HOW ARE YOU?

Ex. 2: How are you?    =>    .... --- .--   .- .-. .   -.-- --- ..- ..--..


The decode and encode button are used to print the output whether encoding or decoding, respectively. The clear button clears both input and output textarea boxes. The copy button copies the ouput to your clipboard using the react CopyToClipboard component from react-copy-to-clipboard. Additionally, it performs input validation with helpful error messages when wrong characters are used in decoding. Continuing to type in input textarea or pressing the clear button will clear the error message.

## Libraries

This web app uses the library package, react-copy-to-clipboard (https://www.npmjs.com/package/react-copy-to-clipboard)

To download this component:

`npm install react-copy-to-clipboard`

## Local Setup

Clone the following gitHub repository: 

`git clone https://github.com/adhizlan/Morse-Code-Decoder.git`

Locate:

`cd Morse_Code_Decoder`

Install Dependencies if necessary:

`npm install`

## Run Locally

`npm start`

Runs locally at http://localhost:3000

## Deploy to Firebase

Install Firebase Command Line Interface (CLI):

`npm install -g firebase-tools`

Login to firebase:

`firebase login`

Initialize firebase in project:

`firebase init hosting`

Build App:

`npm run build`

Deploy App:

`firebase deploy --only hosting`

Use the given url to visit site.

-----------------------------------------------------------------------------------------------------------------------------------------------------

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
