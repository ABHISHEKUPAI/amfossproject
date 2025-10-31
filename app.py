from flask import Flask, request
from PIL import Image
from flask_cors import CORS 
from pix2tex.cli import LatexOCR
import io

app = Flask(__name__)
CORS(app)
model = LatexOCR()

@app.route('/convert', methods=['POST'])
def convert():
    uploaded_image = request.files.get("image")
    if uploaded_image:
        image = Image.open(io.BytesIO(uploaded_image.read()))
        latex_text = model(image)
        return latex_text  
    return "No image uploaded", 400

if __name__ == '__main__':
    app.run(debug=True)
