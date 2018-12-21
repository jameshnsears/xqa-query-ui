# xqa-query-ui [![Build Status](https://travis-ci.org/jameshnsears/xqa-query-ui.svg?branch=master)](https://travis-ci.org/jameshnsears/xqa-query-ui)
* a simple web UI to run XQuery and for ad-hoc status / auditing queries.

## 1. Install
* supt apt purge npm
* sudo apt install npm
* npm install

### 1.1. (optional) Update package.json
```
npm install npm-check-updates
node_modules/npm-check-updates/bin/ncu
node_modules/npm-check-updates/bin/ncu -u
```

## 2. Docker
### 2.1. Build locally
```
node_modules/@angular/cli/bin/ng build --prod --build-optimizer
docker-compose -p "dev" build --force-rm
```

### 2.2. Bring up
* docker-compose -p "dev" up -d

## 3. Run from CLI
* node_modules/@angular/cli/bin/ng serve --open

or

* node_modules/@angular/cli/bin/ng serve --open --env=prod

or

* ngnode_modules/@angular/cli/bin/ng test

## 4. Test
* visit: [http://127.0.0.1/](http://127.0.0.1/)

## 5. Teardown
* docker-compose -p "dev" down -v