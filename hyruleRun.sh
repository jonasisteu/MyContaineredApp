#!/bin/bash

if [[ $1 = '--base' ]]
then
  docker run -it hyrulecon:node sh -c 'npm run base'
elif [[ $1 = '--modded' ]]
then
  docker run -it hyrulecon:node sh -c 'npm run modded'
elif [[ $1 = '' ]]
then
  docker run -it hyrulecon:node sh -c 'npm run base'
else
  echo 'usage: sudo ./hyruleRun.sh --<option>'
fi
