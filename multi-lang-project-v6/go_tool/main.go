package main

import (
    "fmt"
    "os"
    "strconv"
)

func main() {
    if len(os.Args) < 3 {
        fmt.Println("Usage: go_tool <num1> <num2>")
        return
    }
    a, err1 := strconv.Atoi(os.Args[1])
    b, err2 := strconv.Atoi(os.Args[2])
    if err1 != nil || err2 != nil {
        fmt.Println("Invalid numbers")
        return
    }
    fmt.Printf("Sum: %d, Diff: %d\n", a+b, a-b)
}
