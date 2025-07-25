FROM golang:1.21-alpine
WORKDIR /app
COPY . .
RUN go build -o go_tool main.go
CMD ["./go_tool", "1", "2"]
