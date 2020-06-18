Wizard Challenge
===========

Overview
--------

The challenge is to develop a solution that is able to authorization endpoints to user signin/signup.

## Building from source

1. Ensure you have 

   ```Node.js``` installed - goto https://nodejs.org/en/download/package-manager/ to download installer for your OS. 
   
   ```PostgreSql``` installed or in deployment - goto https://www.postgresql.org/download/ to download installer for your OS.

1. Clone this repository to your local filesystem (default branch is 'master')

1. To download the dependencies
   ```
    npm install
   ```

1. Create an ```.env``` file and fill it out as indicated in ```.env.sample```

1. To run the application, run the following command on the project root folder

   ```
    npm start
   ```

## Running npm tasks


### Build

For production you need to provide to enviroment variables:

* `DATABASE`: Database name
* `DB_USER`: Database user name
* `PASSWORD`: Database password
* `HOST`: Host for ProstgreSQL Database
* `KEY`: Key to sign access tokens

With this you need just run the following commands:

* `npm install`

* `npm start` to production server or `npm run dev` - To have a live reload debug server.

and the aplication will start in port 3000.

### Docker

Additionally, you can use docker container to automatise backend deployment using the image available in docker hub 

``` 
    docker pull gmonteiro/gmonteiro/wizard-challenge:latest
```

ou building from source following next steps o backend bolder:

```
    docker build . && docker-compose build && docker-compose run nodeapp
```


See the online backend demo in https://wizard-challenge-api.herokuapp.com/.

## Getting Started doc

Postman documentation [here](https://documenter.getpostman.com/view/1420305/SzzkccWp?version=latest).


## Contribution guidelines

Not yet