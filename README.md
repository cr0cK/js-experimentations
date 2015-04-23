# js-experimentations
ES6/7 experimentations

### Compile ES6/7 sources to ES5:

```
npm i babel-runtime
babel --stage 1 --optional runtime source.js --out-file out.js
node out.js
```