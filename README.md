# madduckcode

### Project setup
1. Clone the project into your local directory
2. Change into the directory using your cli
3. Install the required node module and dependencies for the project using the code below
```
yarn install
```
4. To test the application you need to duplicate the `.env.sample` file and rename to `.env.development` and `.env.production` and set the following configurations based on the environemnt you are using.
```
VUE_APP_WEATHER_API_URL="https://weather.visualcrossing.com/VisualCrossingWebServices/rest"
VUE_APP_WEATHER_API_KEY=YOUR_WEATHER_VISUAL_CROSSING_API_KEY
```
5. Run the application using the code below
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Support
For support towards this project, reach me on <a href="tel:+353899248098">+353899248098</a> or <a href="mailto:engchris95@gmail.com">email</a>.