package utils

import (
	"io/ioutil"
	"os"
	"strings"
)

// GetLines gets lines from input
func GetLines() []string {
	data, _ := ioutil.ReadAll(os.Stdin)
	input := strings.Trim(string(data), "\n")
	lines := strings.Split(input, "\n")

	return lines
}
