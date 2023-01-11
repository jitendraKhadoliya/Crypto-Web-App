here i am going to write what process i have followed till now ;

I am planing the name for this app is cryptoRank 

the proccess i am following for creating this app

1. npx create-react-app .

2. i am going to use chakra ui in this project

npm i @chakra-ui/react @emotion/react @emotion/styled framer-motion

3. react-router-dom 
npm i react-router-dom

4. i will be using react icons here 
npm i react-icons

5. i will use chart in this use
npm i chart.js

6. chart for react
npm i react-chartjs-2

7. i will use axios for fatching data inside this app
npm i axios

8. made total 3 Components for header 

9. i used cypto api - coingecko crypto api

https://api.coingecko.com/api/v3/coins/list

10. use hooks inside the app (useState , useEffect)

11. for error handing used try and catch block inside the use effect function

12. for fetching data asynchronously used async and await

13. react pagination

14. created coin datil page where all the coin details i am fething it using axios and showing them 
and created radio button for changing curreny data and put it inside coin currency also 


15. for staticis i used <Stat> from chakra ui and defined all the data of coin details like 
    coin name 
    coin symbol
    current price

16. created <Badge>   section for showing rank for coin 

17. created custom bar which acutally creating, for this i created special componet for more readbility and less compexicity
        one side low of coin in last 24 hour 
        second side it's showing high in last 24 hour 
        and used 


18. after that used Box that is same as div in cakhra ui inside this i am shoing real time data From server for coin like 
    to save coding more i used here componet named as <Item> where i am taking title name with value ,inside value i also set the check property value is availble or not it is then show the value iother wise show NaN 
        max supply of the coin with changable currency symbol
        coin's circulating supply 
        coin's market cap
        all time low
        all time high

19. added chartjs and line chart from react-chart-js

20.  here i am fetching data chartdata is the name that i am taking in place of data because it will create 2 constant at the time 
here useParam() for url id 
const { data : chartData } =  await axios.get(`${server}/coins/${params.id}/market_chart?vs_currency=${currency}&days=${days}`)

21. made 2 empty array one for date and second for prices and then using map method pushed data into this array for showcasing chart sended all data to Chart component

22. created buttons for changing timefamre and used switch case method for onChange effect time frame and also showed in which time frame you are write now 

Error ->
(earlier i was facing error here because i used now setLoading(true) after clicking on changetimeframe button but problem that i was facing was once we click same button again then it will not randor again because data is not changed but setLoading goes ture and for it solution i removed that loading from there and placed setloading inside the useEffect hook and at the end done false after fetching data this is how i solved this problem  )


23. now i am creating here is home page where for theme i am setting blackalfha color in background in my whole app and seeting crypto coin image with almost 85vh 

24. and here i created beautiful animation where my image is shifting up and down for infinite time to do that i am going to use motion from framer-motion 
        done animate on 20px 
        and in transition i gave duration repeat repeattype reverse

25. created footer page and set it inside the route in app.js page because now it will see on everypage component 

26. inside the footer page in stack (div that is already flex) tag created 2 vstack (already flexed with direction of column)

27. first Vstack i created about us with nice description about page 

28. in second Vstack i created Avatar,Link,text from chakra ui
        in avatar i seted my profile pic using href from my linkedin post 
        in Link tage i gave my linkedIn profile account 
        in text section i gave founder 

29. in last at header section i changed all look for my web page and gave golden color

30. after that gave whole page to golden color for setting up theme for match theme i created golden and black color in whole my web app

31. for live deployment i am going to use varcel app for hosting it for free, created account in varcel app for linked it to my github page and now lookes like everything is fine now i can deploy it



seo friendly sub Headings ->

"Get real-time market data for top cryptocurrencies"
"See the latest coin rankings and price changes"
"Discover the latest crypto market trends"
"Make informed investment decisions with our comprehensive analysis"
"Find out why CryptoRank is the go-to source for crypto enthusiasts everywhere"



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

dm.