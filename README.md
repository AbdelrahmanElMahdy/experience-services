# experience micro services

experience services is a partially small micro service that provide functionality ex; adding his experience at
candidates' previous companies

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
-  normal
    -   make sure you have node.js & npm installed on your machine
    -   go inside root folder where package.json and run `npm install` to install required dependencies

**now, server is running** 