## _Parcel Express (Package Tracking Viewer_)

_A simple web app for our customers that displays a list of orders (or parcels)
with some details they need to know like order status, ETAs, pickup locations etc.._

_This project is built with [Create React App](https://github.com/facebook/create-react-app)._

```sh
npx create-react-app my-app
cd my-app
npm start
```

_If you've previously installed `create-react-app` globally via `npm install -g create-react-app`, its recommended to uninstall the package using `npm uninstall -g create-react-app` or `yarn global remove create-react-app` to ensure that npx always uses the latest version._

_[npx](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b) comes with npm 5.2+ and higher._

_Then open [http://localhost:3000/](http://localhost:3000/) to see the application.<br>_

## _List of jsx files and its functions:_

_The jsx file ./components/DisplayOrders fetch the package details like Sender Name and Arrived date from API-url and displays the list of available parcels to the user with the option View details._
_The jsx file ./components/OrderDetails fetch the package details like
Parcel Id,Arrival Date,Sender,Location Id,Location Name,UserName,User PhoneNumber,ETA and Delivery Status from the API-url, when the user clicks the Viewdetails button to view the parcel details of particular Sender with particular Arrived date._

_API Endpoint: https://my.api.mockaroo.com/orders.json?key=e49e6840_

_The css file ./styles/style.css_ adds the CSS styles to the web page.

_The file route.jsx contains the Routes function with
BrowserRouter,Switch and Route.When a Switch is rendered, it searches through its children Route elements to find one whose path matches the current URL. When it finds one, it renders that Route and ignores all others.If no Route matches, the Switch renders nothing (null)._

## _Usage_

_This Package Tracking Viewer web app is for our customers that displays a list of orders (or parcels)
with some details they need to know like order status, ETAs, pickup locations etc.._

_FireBase url:_ https://sangeethareact.web.app

## _Available Scripts_

_In the project directory, you can run:_

### `npm start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
 It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

_See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information._

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

_If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project._

_Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own._

_You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it._

### Code Splitting

_This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)_

### Analyzing the Bundle Size

_This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)_

### Making a Progressive Web App

_This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)_

### Advanced Configuration

_This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)_

### Deployment

_This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)_

### `npm run build` fails to minify

_This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)_

## _Learn More_

_The user can learn more in the [Create React App documentation](https://create-react-app.dev/docs/getting-started/)._

_To learn React, check out the [React introduction](https://dev.to/eduardo_alvarez_946ae8b20/react-introduction-58ln)._

_To Know more about routers and route Matchers [React Router](https://reactrouter.com/web/guides/primary-components.)_

To learn React, check out the [React documentation](https://reactjs.org/).
