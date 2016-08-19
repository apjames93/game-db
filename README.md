#README for The Nightmare's Flesh-Stack Game Database
This app is a fun first-person shooter game in which you kill zombies with a watergun! You can signup, or login to play and the app stores your highest score. The game features object interaction and zombie spawning. The game end when you run out of health which is decreased when the zombies attack you before you kill them.

##Tech Notes:
The game is a decoupled app and uses Angularjs, Materialize, Blender, Unity (written in C#), express, and nodejs.

##To run database for the decoupled app locally:

1. npm install - to get dev dependencies
2. create database named database - createdb database
3. add dotenv file:
`touch .env`
5. inside your .env file add your database url and token secret formatted as this example:
`TOKEN_SECRET=sjdkfbauygiawhiefgauhfgbaksjdhf
DATABASE_URL=postgres://udiljrkzkyccsy:StxICDesI1ob6RO7uWm8W4lMxD@ec2-50-17-214-132.compute-1.amazonaws.com:5432/dcb2psfrdtfavf
6. run knex:migration - knex migrate:latest
7. run knex:seeds - knex seed:run
8. psql database to verify your tables
