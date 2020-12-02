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
	var nums []int

	for _, x := range strings.Split(input, "\n") {
		num, err := strconv.Atoi(x)

		if err != nil {
			log.Fatal(err)
		}

		nums = append(nums, num)
	}

	var parts []int

	for i := 0; i < len(nums); i++ {
		num1 := nums[i]

		for j := i + 1; j < len(nums); j++ {
			num2 := nums[j]

			if num1+num2 == 2020 {
				parts = append(parts, num1, num2)
			}
		}
	}

	fmt.Println(parts[0] * parts[1])
}
