# xqa-query-ui [![Build Status](https://travis-ci.org/jameshnsears/xqa-query-ui.svg?branch=master)](https://travis-ci.org/jameshnsears/xqa-query-ui)
* a simple web UI to run XQuery and for ad-hoc status / auditing queries.

## 1. Install
* npm install

### 1.1. (optionally) Install without package.json
```
npm install typescript --save
npm install @angular/cli --save
npm install primeng --save
npm install @angular/animations --save
npm install font-awesome --save
npm install rxjs-compat --save
npm install @angular/cdk --save
npm install typescript@">=3.1.1 <3.2" --save
```

### 1.2. (optionall) Update package.json
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

then

* visit: [http://127.0.0.1/](http://127.0.0.1/)

### 2.3. Teardown
* docker-compose -p "dev" down -v

## 3. Run from CLI
* node_modules/@angular/cli/bin/ng serve --open

or

* node_modules/@angular/cli/bin/ng serve --open --env=prod

or

* ngnode_modules/@angular/cli/bin/ng test
