#include<iostream>
#include<opencv2/opencv.hpp>
#include<string>
using namespace cv;
using namespace std;
// bool visual_random(){
//     return ((rand()%2)==0);
// }
void generateShares(const Mat &inputImage, Mat &share1, Mat &share2,
                    Mat &share3) {
  
  int rows = inputImage.rows;
  int cols = inputImage.cols;

  for (int i = 0; i < rows; ++i) {
    for (int j = 0; j < cols; ++j) {
      Vec3b pix = inputImage.at<Vec3b>(i, j);
      uchar gray = 0.299 * pix[2] + 0.587 * pix[1] + 0.114 * pix[0];
      bool threshold_pixel = gray > 127;

      bool rand1 = rand() % 2;
      bool rand2 = rand() % 2;

      share1.at<uchar>(i, j) = rand1 ? 255 : 0;
      share2.at<uchar>(i, j) = rand2 ? 255 : 0;
      share3.at<uchar>(i, j) = (rand1 ^ rand2 ^ threshold_pixel) ? 255 : 0;
      
    }
  }
}

Mat decrypt_shares(const Mat &share1, const Mat &share2, const Mat &share3) {
  int rows = share1.rows;
  int cols = share1.cols;
  Mat secret = Mat::zeros(rows, cols, CV_8UC1);

  for (int i = 0; i < rows; ++i) {
    for (int j = 0; j < cols; ++j) {
      int whitePixelCount = (share1.at<uchar>(i, j) == 255) +
                            (share2.at<uchar>(i, j) == 255) +
                            (share3.at<uchar>(i,j)==255);

      if (whitePixelCount >= 3) {
        secret.at<uchar>(i, j) = 255;
      } else {
        secret.at<uchar>(i, j) = 0;
      }
    }
  }

  return secret;
}


int main(int argc, char* argv[])
{
    Mat Input_image = cv::imread("image.jpg");
  
    Mat share1 = Mat::zeros(Input_image.size(),CV_8UC1);
    Mat share2 = Mat::zeros(Input_image.size(), CV_8UC1);
    Mat share3 = Mat::zeros(Input_image.size(), CV_8UC1);
    
    generateShares(Input_image, share1, share2,share3);

  
    string Title1 = "Secret Image";
    namedWindow(Title1);
    imshow(Title1,Input_image);
    waitKey(0);
    destroyWindow(Title1);

    string Title2 = "Share 1";
    namedWindow(Title2);
    imshow(Title2, share1);
    waitKey(0);
    destroyWindow(Title2);

    string Title3 = "share 2";
    namedWindow(Title3);
    imshow(Title3, share2);
    waitKey(0);
    destroyWindow(Title3);

    string Title4 = "share 3";
    namedWindow(Title4);
    imshow(Title4, share3);
    waitKey(0);
    destroyWindow(Title4);

    imwrite("share1.png",share1);
    imwrite("share2.png",share2);
    imwrite("share3.png", share3);

    cout << "Shares generated and saved successfully" << endl;

    Mat share1_read = imread("share1.png", IMREAD_GRAYSCALE);
    Mat share2_read = imread("share2.png", IMREAD_GRAYSCALE);
    Mat share3_read = imread("share3.png", IMREAD_GRAYSCALE);

    if (!share1_read.data || !share2_read.data || !share3_read.data) {
      cout << "Error: Could not read share image files." << endl;
      return -1;
    }

    Mat secret = decrypt_shares(share1_read, share2_read,share3_read);
    imshow("Decrypted Image", secret);
    waitKey(0);

    imwrite("Decrypted_image.png",secret);
    return 0;
}
