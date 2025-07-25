FROM gcc:12
WORKDIR /app
COPY main.c .
RUN gcc main.c -o main_c
CMD ["./main_c"]
