Date:2023-11-01
[Express.js,](https://expressjs.com) or simply Express, is a back end web application framework for building RESTful APIs with Node.js, released as free and open-source software under the MIT License. It is designed for building web applications and APIs. It has been called the de facto standard server framework for Node.js.

## Installation and Setup A Express Server

- First of all initialize a basic node project using following command:

```bash
npm init
```

> PS: You can use flag -y to bypass the questions asked by node while
> initializing the project.

- Now let's install the express package!

```bash
npm i express
```

- Let's setup the basic app for the express

```js
const express = require("express");
const app = express();
const port = 3000;
app.listen(port, () => {
  console.log(`Server has been started on https://localhost:${port}`);
});
```

- This will start a basic express server on your localhost at port 3000

## Routing In Express

Routing refers to the process of defining how an application responds to client requests to different URL paths. Express.js provides a robust routing system that allows you to create routes for various HTTP methods (e.g., GET, POST, PUT, DELETE) and handle different URL patterns. Routing is fundamental to creating web applications and RESTful APIs.

```js
const express=require("express");
const app = express();
const port = 3000;
// This the the basic roting or api ! When / path is hitted on browser it will
// respone as a hello world or we can serve a specific html or ejs file
app.get("/"(req,res)=>{
res.send("Hello World")
})
app.listen(port,()=>{
console.log(`Server has been started on https://localhost:${port}`)
})
```

### Dynamic Routing

=> Dynamic routing in Express.js refers to the ability to define routes that can handle varying values or parameters in the URL. These parameters can change in each request, allowing you to create more flexible and efficient route handling. Dynamic routes are often used to handle data retrieval or actions specific to individual entities or items in your application.

- Routing Paramters :
  Route parameters are named URL segments that are used to capture the values specified at their position in the URL. The captured values are populated in the `req.params` object, with the name of the route parameter specified in the path as their respective keys.

===> Basic Example of Dynamic Routing:

```js
const express = require("express");
const app = express();
const port = 3000;
app.get("/post/:id", (req, res) => {
  res.send(`Content of the url is : ${req.params.id}`);
});
app.listen(port, () => {
  console.log(`Server has been started on https://localhost:${port}`);
});
```

## Express Generator

##### Date:2023-11-01

- Express generator is a tool that is used to quickly generate a application skeleton .
- At First You have to install this tool globally by using following command:

```bash
npm install -g express-generator
```

Then you can use following command to generate an express app skeleton:

```bash
express
```

> Here it will generate the express skeleton containing view engine as pug !

But I am learning on it EJS we need to generate express app following command :

```bash
express --view=ejs
```

And The Folder Structure will be:

```console
.
├── app.js
├── bin
│   └── www
├── package.json
├── public
│   ├── images
│   ├── javascripts
│   └── stylesheets
│       └── style.css
├── routes
│   ├── index.js
│   └── users.js
└── views
    ├── error.ejs
    ├── index.ejs
    └── layout.ejs

7 directories, 9 files
```

And for starting an app just type nodemon on the console.🩷
