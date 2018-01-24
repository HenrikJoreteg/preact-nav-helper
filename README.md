# preact-nav-helper

![](https://img.shields.io/npm/dm/preact-nav-helper.svg)![](https://img.shields.io/npm/v/preact-nav-helper.svg)![](https://img.shields.io/npm/l/preact-nav-helper.svg)

Preact component for catching and handling internal links in your application.

Wrap your root application in this component and you can use regular plain ol' `<a>` tags in your application code but still handle the ones that are "internal" to the application using your application logic.

Very importantly, it will not mess with browser capabilities, so it will not handle control clicks, right clicks, or tags with a `target="_blank"` attribute, etc.

## install

```
npm install preact-nav-helper
```

## example

```javascript
const NavHelper = require("preact-nav-helper");

const YourRootComponent = () => {
  <NavHelper onInternalNav={doUpdateUrl}>
    <h1>Your app</h1>
    <a href="/">Some internal link</a>
    <a href="/other" target="_blank">Some internal link that should open in new window</a>
    <a href="http://joreteg.com">An external link, it will not try to handle this</a>
  </NavHeler>
};
```

## credits

If you like this follow [@HenrikJoreteg](http://twitter.com/henrikjoreteg) on twitter.

## license

[MIT](http://mit.joreteg.com/)
