#!/bin/bash

npm install
gulp
mongod
mongo

cd api/
node webservice.js
