#include <iostream>
using namespace std;

int main(int argc, char *argv[]) {
  if (argc < 3) {
    cout << "Insufficient arguments" << endl;
    return 1;
  }
  int a = atoi(argv[1]);
  int b = atoi(argv[2]);
  cout << "The Sum is " << (a + b) << endl;
  return 0;
}
