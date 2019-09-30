import pytesseract
from PIL import Image
pytesseract.pytesseract.tesseract_cmd = r'C:\Program Files (x86)\Tesseract-OCR\tesseract.exe'
file=input(str("enter file"))
image_captcha = pytesseract.image_to_string(Image.open(file), config='--psm 7')
print(image_captcha)
print(eval(image_captcha))
