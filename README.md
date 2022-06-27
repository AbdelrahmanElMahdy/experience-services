# experience micro services

experience services is a partially small micro service that provide functionality ex; adding his experience at
candidates' previous companies
<br><br>

let's run this project

-   Run `git pull` repo-link
-   create .env file and make sure to provide it with given values so server
    PORT :port_number default 5000
    NODE_ENV: development environment name
    DB_USERNAME: you database username
    DB_PASSWORD: your database password
    DB_HOST: database host if you want to run localhost with docker set it to host.docker.internal  
    DB_NAME: database name
    DB_PORT: database port usually 5432
    JWT_SECRET: jwt secret string
-   and now you have to option to build the server;

    -   docker
    -   normal running

-   docker specific
    -   `docker build -t experience . `
    -   `docker run experience `
-   normal
    -   make sure you have node.js & npm installed on your machine
    -   go inside root folder where package.json and run `npm install` to install required dependencies
    -   `npm run dev` for development `npm run start` for production
> you can also run test cases using `npm run test` 


<br><br>
**now, server is running**

> you can find some of apis postman documentation for this project here [postman doc](https://documenter.getpostman.com/view/13580360/UzBsH4Yd)


> there's an intelligent framework its name is @typegraphql for typescript and graphql I read about. will let you focus more on the busings logic. I recommend it for large project however i used regular approach as I'm familiar with it,and passing the context through graphqlHTTP was kinda painful and you don't have too much control the context which I discoverd it's very easy in  @typegraphql framework .


