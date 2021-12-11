# Install current curriculum version of node
FROM node:14.15.5

# Set as current directory for RUN, ADD, COPY commands
WORKDIR /app

# Add to PATH
ENV PATH /app/node_modules/.bin:$PATH

# Add package.json from upstream
COPY package*.json ./

# Install dependencies
RUN npm install

# Add entire student fork (overwrites previously added package.json)
ARG SUBMISSION_SUBFOLDER
COPY $SUBMISSION_SUBFOLDER ./

# Overwrite files in student fork with upstream files
COPY test.sh ./
COPY package*.json ./
COPY /shopping-list/tests/ ./shopping-list/tests/
