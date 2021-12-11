# Install current curriculum version of te-cypress
FROM tepublic/te-cypress:8.2.0

# Set as current directory for RUN, ADD, COPY commands
WORKDIR /app

# Copy all of the exercise files
COPY . ./

# Add entire student fork (to get the htm and css files for the exercise)
ARG SUBMISSION_SUBFOLDER
COPY $SUBMISSION_SUBFOLDER ./

# Overwrite files in student fork with upstream files
COPY test.sh ./

# make sure the tests have not changed
COPY cypress ./cypress/

# make sure the index files have not changed
COPY exercise-part-1/set-1-headers/step-1/index.html ./exercise-part-1/set-1-headers/step-1/
COPY exercise-part-1/set-1-headers/step-2/index.html ./exercise-part-1/set-1-headers/step-2/
COPY exercise-part-1/set-1-headers/step-3/index.html ./exercise-part-1/set-1-headers/step-3/
COPY exercise-part-1/set-1-headers/step-4/index.html ./exercise-part-1/set-1-headers/step-4/
COPY exercise-part-1/set-1-headers/step-5/index.html ./exercise-part-1/set-1-headers/step-5/
COPY exercise-part-1/set-2-align-content-row/step-1/index.html ./exercise-part-1/set-2-align-content-row/step-1/
COPY exercise-part-1/set-2-align-content-row/step-2/index.html ./exercise-part-1/set-2-align-content-row/step-2/
COPY exercise-part-1/set-3-align-vertically/step-1/index.html ./exercise-part-1/set-3-align-vertically/step-1/
COPY exercise-part-1/set-3-align-vertically/step-2/index.html ./exercise-part-1/set-3-align-vertically/step-2/
COPY exercise-part-1/set-3-align-vertically/step-3/index.html ./exercise-part-1/set-3-align-vertically/step-3/
COPY exercise-part-1/set-3-align-vertically/step-4/index.html ./exercise-part-1/set-3-align-vertically/step-4/
COPY exercise-part-1/set-4-flex-grow/step-1/index.html ./exercise-part-1/set-4-flex-grow/step-1/
COPY exercise-part-1/set-4-flex-grow/step-2/index.html ./exercise-part-1/set-4-flex-grow/step-2/
COPY exercise-part-1/set-5-flex-wrap/step-1/index.html ./exercise-part-1/set-5-flex-wrap/step-1/
COPY exercise-part-1/set-6-flex-order/step-1/index.html ./exercise-part-1/set-6-flex-order/step-1/
COPY exercise-part-2/index.html ./exercise-part-2/
