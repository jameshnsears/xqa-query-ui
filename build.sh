#!/usr/bin/env bash

rm -rf node_modules
npm install
node_modules/@angular/cli/bin/ng build --prod --build-optimizer'
docker-compose build --force-rm
