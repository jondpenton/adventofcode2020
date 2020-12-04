package main

import (
	"fmt"

	"github.com/jondpenton/adventofcode2020/utils"
)

type Grid struct {
	Squares [][]Square
}

type Square struct {
	Type string
}

type Coordinate struct {
	x int
	y int
}

func main() {
	lines := utils.GetLines()
	grid := Grid{
		Squares: [][]Square{},
	}
	slopes := []Coordinate{
		{
			x: 1,
			y: 1,
		},
		{
			x: 3,
			y: 1,
		},
		{
			x: 5,
			y: 1,
		},
		{
			x: 7,
			y: 1,
		},
		{
			x: 1,
			y: 2,
		},
	}
	total := 0

	for _, line := range lines {
		var row []Square

		for _, char := range line {
			square := Square{}

			if char == '.' {
				square.Type = "EMPTY"
			} else if char == '#' {
				square.Type = "TREE"
			}

			row = append(row, square)
		}

		grid.Squares = append(grid.Squares, row)
	}

	for _, slope := range slopes {
		position := Coordinate{}
		treeHits := 0

		for position.y < len(grid.Squares)-1 {
			position.x += slope.x
			position.y += slope.y
			realPosition := Coordinate{
				x: position.x % len(grid.Squares[0]),
				y: position.y,
			}

			if realPosition.y < len(grid.Squares) && grid.Squares[realPosition.y][realPosition.x].Type == "TREE" {
				treeHits++
			}
		}

		fmt.Println(treeHits)

		if total == 0 {
			total = treeHits
		} else {
			total *= treeHits
		}
	}

	fmt.Println(total)
}
