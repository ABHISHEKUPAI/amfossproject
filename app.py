from flask import Flask, request, render_template
from PIL import Image
from pix2tex.cli import LatexOCR
import io

app = Flask(__name__)
model = LatexOCR()

@app.route('/', methods=['GET', 'POST'])
def index():
    latex_text = None
    if request.method == 'POST':
        uploaded_image = request.files.get("image")
        if uploaded_image:
            image = Image.open(io.BytesIO(uploaded_image.read()))
            latex_text = model(image)
    return render_template("index.html", result=latex_text)

if __name__ == '__main__':
    app.run(debug=True)
