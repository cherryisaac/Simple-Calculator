#!/bin/bash

# Run 
cypress run --headless > output.txt

# Find the total number of tests in the output file
number_of_tests=$(grep -P -o "(?<=Tests:        )(\d+)" output.txt | tr -d '[:space:]')

# The tests didn't run and something else is wrong
if [ -z $number_of_tests ]
then
    cat output.txt
    exit 1
fi

# Get the total passed and skipped
total_number_of_passing=$(grep -P -o "(?<=Passing:      )(\d+)" output.txt | tr -d '[:space:]')
total_number_skipped=$(grep -P -o "(?<=Skipped:      )(\d+)" output.txt | tr -d '[:space:]')

# Find a start and end line inside output and print the lines between to the user.
sed -n '/Running:/,/==============================================/p' output.txt

# Calculate percentage passed and inform the user
percent_passing=$((total_number_of_passing * 100 / (number_of_tests - total_number_skipped) ))
echo $percent_passing% tests passing

# Exit with (0) for passing, (1) for filing.
if [ $percent_passing -ge 50 ]
then
    # echo pass
    exit 0
else
    # echo fail
    exit 1
fi
