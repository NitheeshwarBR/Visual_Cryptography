# CXX = g++
# CXXFLAGS = -std=c++11 -Wall -I/usr/local/include/opencv4
# LDFLAGS = -L/usr/local/lib -lopencv_core -lopencv_imgcodecs -lopencv_highgui

# OPENCV_AVAILABLE = -DOPENCV_AVAILABLE

# all: main
# 	$(CXX) $(CXXFLAGS) $(OPENCV_AVAILABLE) -o main main.cpp $(LDFLAGS)

# clean:
# 	rm -f main
CXX = g++
CXXFLAGS = -std=c++11 -Wall -I/usr/local/include/opencv4
LDFLAGS = -L/usr/local/lib
LDLIBS = -lopencv_core -lopencv_imgcodecs -lopencv_highgui -lopencv_imgproc  # Add -lopencv_imgproc

OPENCV_AVAILABLE = -DOPENCV_AVAILABLE

all: main

main: main.cpp
	$(CXX) $(CXXFLAGS) $(OPENCV_AVAILABLE) -o $@ $< $(LDFLAGS) $(LDLIBS)

clean:
	rm -f main
