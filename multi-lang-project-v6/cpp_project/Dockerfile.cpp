FROM gcc:12
WORKDIR /app
COPY main.cpp .
RUN g++ main.cpp -o main_cpp
CMD ["./main_cpp"]
