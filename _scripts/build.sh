#!/bin/bash
set -x
#install node dependencies
npm ci --production
#build the site with metalsmith
npx metalsmith
