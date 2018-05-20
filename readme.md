## ASP.NET MVC5 template for React v16
- ES6 configured with Babel
- Webpack is used for front end tasks along with BrowserSync on port 3000
- Client side routing is based on ReactRouter v4
- All other MVC features can be used without hassle
- Stage-0 support added
- LESS support added.
- file-loader, style-loader, css-loader, json-loader, svg-inline-loader also added

## Known Issues
- If the page keeps loading, check what port ASP.NET project is running and add the same port in the configuration of BrowserSync in webpack.config.js