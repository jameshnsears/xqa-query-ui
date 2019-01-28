#!/usr/bin/env bash

docker rm -f xqa-query-ui cadvisor

docker-compose down -v
