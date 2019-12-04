#node image
FROM node

RUN mkdir -p /usr/src/app
#set working directory
WORKDIR /usr/src/app

#Copy both package.json and package-lock.json
COPY package.json /usr/src/app

#Install dependencies
RUN npm install

RUN npm install react-stripe-checkout

#Copy everything from here to container
COPY . .

#Specify port it runs on
EXPOSE 3000

RUN npm run-script build
#Command to run our app
CMD ["npm", "run", "start"]
