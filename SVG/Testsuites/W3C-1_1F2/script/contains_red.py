import sys
import os
import glob
from PIL import Image

def contains_red(filename):
    im = Image.open(filename)
    pixels = im.getdata()
    rv = False
    for pixel in pixels:
        if (isinstance(pixel, tuple) and pixel[:3] == (255,0,0)):
            if (len(pixel) == 3 or 
                (len(pixel) == 4 and pixel[3] == 255)):
                rv = True
                break
    return rv

def main():
    path = "*.png"
    if len(sys.argv) > 1:
        if os.path.isdir(sys.argv[1]):
            path = os.path.join(sys.argv[1], path)
        else:
            path = sys.argv[1]
    for fn in glob.glob(path):
        if contains_red(fn):
            print fn

if __name__ == "__main__":
    main()
