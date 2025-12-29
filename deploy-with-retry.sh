#!/bin/bash

attempt=0

while true; do
  attempt=$((attempt + 1))
  
  echo "Attempt $attempt: Running bun run deploy..."
  
  if bun run deploy; then
    if [ $attempt -eq 1 ]; then
      echo "Deploy succeeded on first attempt"
    else
      echo "Deploy succeeded after $attempt attempts"
    fi
    break
  else
    echo "Attempt $attempt failed, retrying..."
  fi
done
