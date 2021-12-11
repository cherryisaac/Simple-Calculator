# Install current curriculum version of node
FROM node:14.15.5

# Install bash (must be installed for alpine builds)
# RUN apk update && apk add bash

# Set as current directory for RUN, ADD, COPY commands
WORKDIR /app

# Add to PATH
ENV PATH /app/node_modules/.bin:$PATH

# Install Mocha and Chai
RUN npm init -y
RUN npm install --save-dev mocha@5.2.0 chai@4.1.2
RUN npm install rewire

# Add entire student fork (overwrites previously added package.json)
ARG SUBMISSION_SUBFOLDER
COPY $SUBMISSION_SUBFOLDER ./

# Overwrite files in student fork with upstream files
COPY test.sh ./
COPY imports.js ./
COPY tests.js ./
