#!/bin/sh
git fetch origin && git reset --hard origin/main && git clean -f -d
scripts/build-start.prod.sh