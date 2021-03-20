# Spacex Launch Programs 

[![Build Status](https://travis-ci.org/geet365/spacex-launches.svg\?branch\=master\&status\=passed)](https://travis-ci.org/github/geet365/spacex-launches)

This project can be used to view SpaceX launches.

[Live now](https://spacex-launches-2.herokuapp.com/)

## Tech stack

- angular
- express (for SSR)
- typescript

The application is deployed on **Heroku**, and **Travis** is used for CI. It has been configured to automatically trigger a build whenever something is pushed to the `master` branch.

## Highlights
- Application is server-side rendered.
- Fully responsive to covers all range of device.
- Uses lazy loading to defer loading off-screen images which results in reduced initial page load time
- Used best practises and performation optimizations, resulting in a high lighthouse score

**Using Lighthouse**

![lighthouse score](/screenshots/lighthouse.png?raw=true)

**Using [web.dev](https://web.dev/measure)**

![lighthouse score](/screenshots/web.dev.png?raw=true)

**Screenshots**

![mobile-view](/screenshots/mobile-view.png?raw=true)

![mobile-view-2](/screenshots/mobile-view-2.png?raw=true)

![tablet-view](/screenshots/tablet-view.png?raw=true)

![app](/screenshots/app.png?raw=true)

![with-filter-applied](/screenshots/with-filter-applied.png?raw=true)

## Available Scripts

To run the project on local machine use following commands:

```sh
npm run dev:ssr # starts SSR server

npm start # starts SPA server

npm run format:check # runs prettier to check code format issues

npm run format:fix # runs prettier to fix code format issues
```

Following this, open [http://localhost:4200](http://localhost:4200) to view it in the browser.
