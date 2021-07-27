# Movie Search App

This App is used to search movies using [Movies DB API](https://developers.themoviedb.org/3/getting-started/introduction).

## Dependencies

- [Bootstrap](https://getbootstrap.com/)(For styling)
- [Axios](https://www.npmjs.com/package/axios)(For API requests)
- [Iso-language-converter](https://www.npmjs.com/package/iso-language-converter)(Used to convert ISO 630 language codes to full form)

## How to

- First, Login to [Movies DB API](https://www.themoviedb.org/login) and get your API key and include your key in

```js
// include your API key in /src/utils/movieSearch.js
const search_url = `${base_url}/search/movie?api_key=<<Your API Key>>&query`;
```

- Next, clone the project into your local system
- Next, run the below command to instll necessary dependencies.

```js
npm install
```

- Next, start the dev server using below command

```js
npm start
```

- Now you can search whichever movie you want.

## Screens

![](/src/assests/home-page.png)
