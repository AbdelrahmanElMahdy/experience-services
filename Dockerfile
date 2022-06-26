FROM node
RUN npm install typescript -g
WORKDIR /experience
COPY . .
RUN npm install express-graphql graphql
RUN npm install
RUN npm run build
COPY .env ./dist/
CMD ["npm","run","start"]
EXPOSE 5000