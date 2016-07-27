# Mechanic Maid
Documentation: a [Sails](http://sailsjs.org) application


## How to run ##

#### Requirements
  - [NodeJS](http://nodejs.org)
  - [Postgres for Windows](http://www.postgresql.org/download/)
  --- or ---
  - [Postgres for Mac OSX](http://postgresapp.com/)


#### Preparation
  - Download and setup Postgres server
  - Configure database
    - Create user: mechanicmaid
      - Set password: 12345
      - *(for developement have it a superuser)*
    - Create database: mechanicmaid
  - *You can always change your configuration in config/connection.js*

##### Installation
  ```
    npm install
  ```

##### Running
  ```
    node app.js lift
  ```
The web server should be available here: [http://localhost:1337](http://localhost:1337)
"# Appid" 
