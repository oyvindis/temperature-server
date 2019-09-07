## Use

Run ```npm run lint``` to run eslint.

To run locally:

1. Run ```npm start``` to start server.

2. Open browser ```http://localhost:3333```

## Use with Docker

To run with docker:

1. Run ```docker build -t ois/temperature-server .``` to build docker image.
2. Run ```docker run -p 8633:3333 -d ois/temperature-server``` to run docker image.
3. Run ```curl -i localhost:8633``` in terminal to test or open browser ```http://localhost:8633```
4. Run ```docker stop <container-id>``` to stop docker image.

## frontend set up
npm init

npm install -D typescript

npm install express -S
npm install @types/express -D

add tsconfig.json

## add eslint

npm install eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin -D

touch .eslintrc.js

## add prettier

npm install prettier eslint-config-prettier eslint-plugin-prettier -D

touch .prettierrc.js

## add app.ts and start script

$ mkdir src
$ cd src
$ touch app.ts
