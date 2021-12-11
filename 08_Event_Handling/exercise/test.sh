#!/bin/bash
run_cypress_test () {
    npm run test-headless > ../output.txt
    number_of_tests=$(grep -P -o "(?<=Tests:        )(\d+)" ../output.txt | tr -d '[:space:]')

    # The tests didn't run and something else is wrong
    if [ -z $number_of_tests ]
    then
        cat ../output.txt
        exit 1
    fi

    (( total_number_of_tests+=number_of_tests ))
    (( total_number_of_passing+=$(grep -P -o "(?<=Passing:      )(\d+)" ../output.txt | tr -d '[:space:]') ))

    sed -n '/Running:/,/==============================================/p' ../output.txt
}

cd shopping-list
run_cypress_test

cd ../calculator
run_cypress_test

percent_passing=$((total_number_of_passing * 100 / total_number_of_tests))

if [ $percent_passing -ge 50 ]
then
    exit 0
else
    exit 1
fi
