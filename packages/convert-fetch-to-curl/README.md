[![MIT Licence](https://badges.frapsoft.com/os/mit/mit.svg?v=103)](https://opensource.org/licenses/mit-license.php)
![Tests & Build](https://github.com/leoek/convert-fetch-to-curl/workflows/Test%20&%20Build/badge.svg)
[![codecov](https://codecov.io/gh/leoek/convert-fetch-to-curl/branch/master/graph/badge.svg?token=K9L7Q3K1CL)](https://codecov.io/gh/leoek/convert-fetch-to-curl)
![Dependencies](https://img.shields.io/badge/Dependencies-%200%20-44be16)
<!-- ![Dependencies - David](https://david-dm.org/leoek/convert-fetch-to-curl.svg)-->


# Convert fetch request to curl
 This package is verymuch helpfull to developers to find curl and disscuss when ever backend apis fails, we can check all params in single shot.
 Use it to generate curl requests with the inputs you would usually use for javascripts fetch. However it does not patch any modules like http-to-curl. It is just a wrapper to generate the curl string. This ensures that there are no side effects with your actual usage of fetch.

Also note that the goal of this library is to be as simple and minimal as possible. This also means that there are zero dependencies :tada:

## Installation

```sh
yarn add convert-fetch-to-curl
```

or

```sh
npm install convert-fetch-to-curl
```

## Usage

```js
import { convertFetchToCurl } from 'convert-fetch-to-curl';
// or 
//In case you donot Es Modules 
const { convertFetchToCurl } = require("convert-fetch-to-curl");

// exmple data to fetch as convert 

const url = 'https://EXMPLE_URL/posts/1';
const options = {
  headers: {
    Authorization: "BASIC SOMEBASE64STRING"
  },
  method: 'get'
};
// Log before fetch ===> convertFetchToCurl
console.log(convertFetchToCurl(url, options));
// Do your request
fetch(url, options);

// Output
curl "https://EXMPLE_URL/posts/1" -X GET -H "Authorization: BASIC SOMEBASE64STRING"

// You can also pass a single Request object 
console.log(convertFetchToCurl({
  url: "https://EXMPLE_URL/posts/1"
  headers: {
    Authorization: "BASIC SOMEBASE64STRING"
  },
  method: 'get'
}));

// and/or a Headers object as you would to with fetch
console.log(convertFetchToCurl({
  url: "https://EXMPLE_URL/posts/1"
  headers: new Headers({
    Authorization: "BASIC SOMEBASE64STRING"
  }),
  method: 'get'
}))

```
