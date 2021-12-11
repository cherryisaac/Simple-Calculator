# Install current curriculum version of te-cypress
FROM tepublic/te-cypress:8.2.0

# Set as current directory for RUN, ADD, COPY commands
WORKDIR /app

# Copy all of the exercise files
COPY . ./

# Add entire student fork (to get the htm and css files for the exercise)
ARG SUBMISSION_SUBFOLDER
COPY $SUBMISSION_SUBFOLDER ./

# Install cypress-real-events plugin needed to test :hover pseudo-class
RUN npm install cypress-real-events

# Overwrite files in student fork with upstream files
COPY test.sh ./
COPY cypress ./cypress/
COPY index.html ./
