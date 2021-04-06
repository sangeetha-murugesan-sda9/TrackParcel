## _Parcel Express (Package Tracking Viewer_)

_A simple web app for our customers that displays a list of orders (or parcels)
with some details they need to know like order status, ETAs, pickup locations etc.._

_This project is built with Create React App._

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

## _Available Scripts_

_In the project directory, the user can run:_

### _`npm start`_

_Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser._

_The page will reload if user make edits.<br />
The User can also see any lint errors in the console._

### _`npm run build`_

_Builds the app for production to the `build` folder.<br />_
_It correctly bundles React in production mode and optimizes the build for the best performance._

_The build is minified and the filenames include the hashes.<br />_

### _`npm run eject`_

_If the user is not satisfied with the build tool and configuration choices, they can `eject` at any time. This command will remove the single build dependency from project._

## _Learn More_

_The user can learn more in the [Create React App documentation](https://create-react-app.dev/docs/getting-started/)._

_To learn React, check out the [React documentation](https://dev.to/eduardo_alvarez_946ae8b20/react-introduction-58ln)._

_To Know more about routers and route Matchers [React Router](https://reactrouter.com/web/guides/primary-components.)_
