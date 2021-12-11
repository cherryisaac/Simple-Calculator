# Install current curriculum version of te-cypress
FROM tepublic/te-cypress:2.4.0

# Set as current directory for RUN, ADD, COPY commands
WORKDIR /app

# Add to PATH
ENV PATH /app/shopping-list/node_modules/.bin:/app/calculator/node_modules/.bin:$PATH

# Add package.json from upstream
WORKDIR /app/shopping-list
COPY /shopping-list/package*.json ./

# Install dependencies
RUN npm install

# Add package.json from upstream
WORKDIR /app/calculator
COPY /calculator/package*.json ./

# Install dependencies
RUN npm install

WORKDIR /app

# Add entire student fork (overwrites previously added package.json)
ARG SUBMISSION_SUBFOLDER
COPY $SUBMISSION_SUBFOLDER ./

# Overwrite files in student fork with upstream files
COPY test.sh ./
COPY /shopping-list/package*.json ./shopping-list/
COPY /shopping-list/cypress.json ./shopping-list/
COPY /shopping-list/cypress ./shopping-list/cypress/
COPY /calculator/package*.json ./calculator/
COPY /calculator/cypress.json ./calculator/
COPY /calculator/cypress ./calculator/cypress/
