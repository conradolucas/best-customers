#!/bin/bash

npm install
gulp

cd api/
php -S localhost:8080 webservice.php
