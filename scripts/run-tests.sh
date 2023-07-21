#!/bin/sh

echo "Back-end testing"
docker compose exec back-end npm run test

echo "Wep-app testing"
docker compose exec web-app npm run test
