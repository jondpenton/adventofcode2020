package main

import (
	"fmt"
	"io/ioutil"
	"log"
	"os"
	"strconv"
	"strings"
)

func main() {
	data, _ := ioutil.ReadAll(os.Stdin)
	input := strings.Trim(string(data), "\n")
	validCount := 0

	for _, line := range strings.Split(input, "\n") {
		arr := strings.Split(line, " ")
		minMax := strings.Split(arr[0], "-")
		min, err := strconv.Atoi(minMax[0])

		if err != nil {
			log.Fatal(err)
		}

		max, err := strconv.Atoi(minMax[1])

		if err != nil {
			log.Fatal(err)
		}

		characterInt := arr[1][0]
		password := arr[2]
		charCount := 0

		for _, letter := range password {
			if byte(letter) == characterInt {
				charCount++
			}
		}

		if charCount >= min && charCount <= max {
			validCount++
		}
	}

	fmt.Println(validCount)
}
