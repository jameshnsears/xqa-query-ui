#!/usr/bin/env bash

rm -rf node_modules
npm install
npm install typescript@">=3.1.1 <3.3"
node_modules/@angular/cli/bin/ng build --prod --build-optimizer
docker-compose build --force-rm
