webpack-dev-middleware demo
===========================

Use `webpack-dev-middleware` with express.

`webpack-dev-middleware` can compile js files automatically when the request comes to express. We don't need to use `webpack` command to compile files manually.

With `webpack-hot-middleware`, it can replace the `webpack-dev-server`.


```
npm install
node server.js
```

Then visit <http://localhost:3000/>.

Notice
------

We should only use it in dev enviroment.

Resources
---------

1. https://github.com/webpack/webpack-dev-middleware
2. [Why webpack-dev-middleware provides `publicPath` configuration?](http://stackoverflow.com/questions/38815241/why-webpack-dev-middleware-provides-publicpath-configuration)