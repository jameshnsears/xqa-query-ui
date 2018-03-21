# xqa-query-ui [![Build Status](https://travis-ci.org/jameshnsears/xqa-query-ui.svg?branch=master)](https://travis-ci.org/jameshnsears/xqa-query-ui)
* a simple web UI to run XQuery and for ad-hoc status / auditing queries.

## 1. Install
* npm install

### 1.1. (optionally) Install without package.json
* npm install -g @angular/cli
* npm install primeng --save
* npm install @angular/animations --save
* npm install font-awesome --save

## 2. Docker
### 2.1. Build locally
* ng build --prod --build-optimizer
* docker-compose -p "dev" build --force-rm

### 2.2. Bring up
* ng serve --open

or

* docker-compose -p "dev" up -d

then

* visit: [http://127.0.0.1/](http://127.0.0.1/)

### 2.3. Teardown
* docker-compose -p "dev" down -v

## 3. Run from CLI
* npm install
* ng build
* ng serve --open
