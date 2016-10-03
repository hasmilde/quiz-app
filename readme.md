=== Documentation OIT Blockchain Quiz ===


<!-- first time installation -->

1. clone the following git repositories
	* mongonode-quiz-app (https://github.com/hasmilde/mongonode-quiz-app.git)
	* quiz-app (https://github.com/hasmilde/quiz-app.git)

2. In /mongonode-quiz-app
	* npm i
	* npm install body-parser
	* npm install mongoose
	* npm install mongodb

3. In /quiz-app
	* npm i


<!-- Start application -->

// start-up mongodb
1. Git Bash in folder you have installed mongodb (e.g. C:\Program Files\MongoDB\Server\3.2\bin)
   command: mongod --dbpath D:/path/to/store/quiz-app/data

// listen to server
2. Git Bash in mongonode-quiz-app/
   command: node index.js

// run application
3. Git Bash in quiz-app/
   command: ionic serve

In order to fill the server with data, fill-out the quiz once (or twice).
View data with mongoChef for example

(in the future: In folder with resultscreen (d:/iot/resulrscreen/resultscreen), git bash here:
http-server)
