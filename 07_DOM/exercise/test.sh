#!/bin/bash
# A custom test script is necessary to run mocha tests with JSDOM
cat ./shopping-list/tests/imports.js ./shopping-list/tests/tests.js > ./shopping-list/tests/mochatests.js
mocha ./shopping-list/tests/mochatests.js > output.txt

number_of_passing=$(grep -P -o "(\d+)(?= passing)" output.txt | tr -d '[:space:]')
number_of_failing=$(grep -P -o "(\d+)(?= failing)" output.txt | tr -d '[:space:]')

# The tests didn't run and something else is wrong
if [ -z $number_of_passing ] && [ -z $number_of_failing ]
then
    cat output.txt
    exit 1
# There were no failing tests in Mocha output
elif [ -z $number_of_failing ]
then
    number_of_failing=0
fi

cat output.txt

if [ $number_of_passing -ge $number_of_failing ]
then
    exit 0
else
    exit 1
fi
