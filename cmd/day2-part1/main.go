package main

import (
	"fmt"
	"log"
	"strconv"
	"strings"

	"github.com/jondpenton/adventofcode2020/utils"
)

func main() {
	lines := utils.GetLines()
	validCount := 0

	for _, line := range lines {
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
