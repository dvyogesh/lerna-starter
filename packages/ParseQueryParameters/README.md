
[![GitHub license](https://img.shields.io/github/license/x3388638/react-grid-carousel)](https://github.com/x3388638/react-grid-carousel/blob/master/LICENSE) [![npm version](https://badge.fury.io/js/react-grid-carousel.svg)](https://badge.fury.io/js/react-grid-carousel) [![Open Source](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)](https://opensource.org/)


<h1 align="center">get window / viewPort width / height </h1>
  `react-window-dimensions-hook` will helps to get <span style={{color:'red'}}>window / viewPort width </span> or <span style={{color:'red'}}> window / viewPort  height </span>. 
Install

```bash
npm i parse-url-query-params -S
```

## Usage

### Example 1

Just import the `parseQueryParameters` component from `parse-url-query-params`  

```javascript
  import parseQueryParameters from 'parse-url-query-params';

  const prsedUrl = parseQueryParameters('http://localhost:3000/offers?offerID=1231sfwf21&local=FR');
  console.log(prsedUrl)

```

OutPut ::

```javascript
   {
      "offerID":"1231sfwf21",
      "local":"FR"
    }
```

### Example 2

In destrction way...
Just import the `parseQueryParameters` component from `parse-url-query-params`  

```javascript
  import parseQueryParameters from 'parse-url-query-params';

  const { offerID, local } = parseQueryParameters('http://localhost:3000/offers?offerID=1231sfwf21&local=FR');
                
    console.log('offerID');

    console.log(offerID);

    console.log('local');

    console.log(local);

```

OutPut ::

```javascript
   offerID

    "1231sfwf21"

    local

    "FR"
```




or visit https://dvyogesh.github.io/lerna-starter/?path=/ story/design-system-parsequeryparameters--parse-query-parameters


## supports Universal Testing Pattern 


## LICENSE

MIT
