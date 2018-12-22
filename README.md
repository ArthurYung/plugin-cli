# plugin-cli

A Rollup CLI for create template with developing plugins.

* TypeScirpt/Babel 7.0
* TS-lint/ES-lint
* jest
* server-hot



## Installation
![Aaron Swartz](https://t1.picb.cc/uploads/2018/12/22/JDCw3G.jpg)  

`$ npm install plugin-cli -g`  

or  

`$ yarn global add plugin-cli`

## Creating an project

### Create
You can select preset which you need. 

``` bash
$ plugin app
```
![Aaron Swartz](https://t1.picb.cc/uploads/2018/12/22/JDC8Rr.gif)  

It will create a directory called `app` inside the current folder.    
   
```
app
├── README.md
├── node_modules
├── package.json
├── .gitignore
├── build
│   ├── name.js
│   ├── rollup.plugin.js
│   ├── rollup.dev.js
│   └── rollup.config.js
├── public
│   ├── favicon.ico
│   └── index.html
└── src
    └── index.js
```
   
   
### `npm start` or `yarn start`  
   
serve with hot reload at localhost:10001  
    
### `npm build` or `yarn build`  
    
build your project with minification    
   
### `npm test` or `yarn test`  
    
running tests with jest  
   
   
# License
[MIT](http://opensource.org/licenses/MIT)

