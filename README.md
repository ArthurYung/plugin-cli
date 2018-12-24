# plugin-cli   
<a href="https://npmjs.com/package/fre"><img src="https://img.shields.io/npm/v/plugin-cli.svg?style=flat-square" alt="npm-v"></a>
<a href="https://npmjs.com/package/fre"><img src="https://img.shields.io/npm/dm/plugin-cli.svg?style=flat-square" alt="npm-d"></a>

A Rollup CLI for create template with developing plugins.   


* TypeScirpt/Babel 7.0
* TS-lint/ES-lint
* server-hot
* postcss
* ?jest


## Installation
![Aaron Swartz](https://t1.picb.cc/uploads/2018/12/22/JDCw3G.jpg)  

`$ npm install plugin-cli -g`  

or  

`$ yarn global add plugin-cli`

## Creating an project

### Create <name>
You can select preset which you need. 
and replace '-' in project name with Camel-Case when it exists.
   
``` bash
$ plugin apps
```
![Aaron Swartz](https://t1.picb.cc/uploads/2018/12/22/JDC8Rr.gif)  

It will create a directory called `apps` inside the current folder.   
and generate the initial project structure.
   
```
apps
├── README.md
├── node_modules
├── package.json
├── .gitignore
├── build
│   ├── name.js 
│   ├── plugins.js 
│   ├── config.base.js 
│   ├── config.build.js 
│   └── config.env.js
├── public
│   ├── favicon.ico
│   └── index.html
└── src
    └── index.js
```
   
   
### `npm start` or `yarn start`  
   
serve with hot reload at localhost:10001  
    
### `npm run build` or `yarn build`  
    
build your project with minification.    
   
### `npm test` or `yarn test`  
    
Runs the jest test runner on your tests.  
   
   
# License
[MIT](http://opensource.org/licenses/MIT)

