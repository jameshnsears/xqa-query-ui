# xqa-query-ui [![Build Status](https://travis-ci.org/jameshnsears/xqa-query-ui.svg?branch=master)](https://travis-ci.org/jameshnsears/xqa-query-ui)
* a simple web UI to run XQuery and for ad-hoc status / auditing queries.

## 1. Docker
### 1.1. Build locally
* ng build --prod --build-optimizer
* docker-compose -p "dev" build --force-rm

### 1.2. Bring up
* ng serve --open

or

* docker-compose -p "dev" up -d

then

* visit: 

### 1.3. Teardown
* docker-compose -p "dev" down -v
