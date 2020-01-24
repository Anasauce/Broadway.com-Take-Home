# Broadway.com-Take-Home
Testing making API calls to a mock "showtimes" api

## Overview

I created a fake API using [Json Server](https://github.com/typicode/json-server) to test the implementation of API fetch calls in this assignment. I coded two solutions: 1) Using class components and "child-as-a-function" rendering. 2) Using Hooks -- *currently rendered*

## Quickstart

To demo this solution you will need to have node installed on your machine. First you will need to cd into the `jsonServer` folder and download the dependencies and get the server up and running. 

**It's important that you start the jsonServer first**

- `cd jsonServer`
- `npm install`
- `npm run json:server`

Then you will need to open another terminal window and cd into `client` folder and get the frontend server started. I didn't want to have to go through the trouble of creating an `env` file so when you start the client server you will be prompted to change the local port, make sure to respond `Y` when prompted.

- `cd client`
- `npm install`
- `npm start`
- Prompted *"Would you like to run the server on a different port?"* Respond `Y`

- You can view the solution on `localhost://3000`
