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
		positions := strings.Split(arr[0], "-")
		position1, err := strconv.Atoi(positions[0])

		if err != nil {
			log.Fatal(err)
		}

		position2, err := strconv.Atoi(positions[1])

		if err != nil {
			log.Fatal(err)
		}

		characterInt := arr[1][0]
		password := arr[2]
		position1Found := password[position1-1] == characterInt
		position2Found := password[position2-1] == characterInt

		if (position1Found && !position2Found) || (position2Found && !position1Found) {
			validCount++
		}
	}

	fmt.Println(validCount)
}
