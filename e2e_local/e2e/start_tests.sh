#!/usr/bin/env bash

# sourcing wait_loop.sh so that the failure will also pre-maturely fail and prevent tests from running.
source ./wait_loop.sh

protractor \
	--capabilities.chromeOptions.args="headless" \
	--capabilities.chromeOptions.args="disable-gpu" \
	--capabilities.chromeOptions.args="--no-sandbox" \
	--params.domain=${FIIX_MASTER_DOMAIN} \
	--params.protocol=https ./output/conf.js \
	--verbose
