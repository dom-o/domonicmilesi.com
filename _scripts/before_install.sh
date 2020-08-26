#!/bin/bash
set -x

openssl aes-256-cbc -K $encrypted_189e52c2c347_key -iv $encrypted_189e52c2c347_iv -in deploy_key.enc -out deploy_key -d
rm deploy_key.enc # Don't need it anymore
chmod 600 deploy_key
mv deploy_key ~/.ssh/id_rsa
