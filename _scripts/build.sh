#!/bin/bash
set -x
#install node dependencies
npm ci
#build the site with metalsmith
npx metalsmith
