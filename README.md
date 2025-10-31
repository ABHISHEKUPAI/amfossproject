# 🧮 TeXForMath

**TeXForMath** is a simple web application that converts **math formulas from images into LaTeX text** using Optical Character Recognition (OCR).  
Built with **Flask**, **JavaScript**, and **Pix2Tex**, it helps students, researchers, and teachers quickly extract LaTeX code from handwritten or printed mathematical expressions.

---

## 🚀 Features

- 📤 Upload any image containing a math formula  
- ⚙️ Automatically converts the image to **LaTeX format**  
- 🧠 Uses the powerful **Pix2Tex (LatexOCR)** model  
- 🌐 Simple, minimal, and responsive front-end  
- 💡 Real-time preview of uploaded images  

---

## 🛠️ Tech Stack

| Component | Technology |
|------------|-------------|
| **Frontend** | HTML, CSS, JavaScript |
| **Backend** | Flask (Python) |
| **OCR Model** | Pix2Tex (`pix2tex.cli`) |
| **Image Processing** | Pillow (PIL) |

---

## 📂 Project Structure
texformath/
│
├── static/
│ ├── style.css # Styling for the front-end
│ └── script.js # Handles image upload and API calls
│
├── templates/
│ └── index.html # Main HTML file served by Flask
│
├── app.py # Flask backend (server + OCR)
│
├── requirements.txt # Dependencies
│
└── README.md # Project documentation


---

## ⚙️ Installation and Setup

Follow these steps to set up the project locally 👇  

### 1. Clone the Repository
```bash
git clone https://github.com/ABHISHEKUPAI/amfossproject.git
cd texformath

python3 -m venv venv
source venv/bin/activate   # For Linux/Mac
venv\Scripts\activate      # For Windows

pip install flask pillow pix2tex

python app.py
Then open your browser and go to 👉
http://127.0.0.1:5000/

💻 Usage Guide

Click “Choose Image” to upload a math formula image.

Click “Convert” to process the image.

Get the LaTeX text output directly on the page!

Example workflow:

choose image → select formula → convert → get LaTeX output ✅
🧰 Requirements

Python 3.8 or higher

Flask

Pillow

Pix2Tex (LatexOCR)

Modern web browser

🧠 How It Works

The frontend (HTML/CSS/JS) lets you select and preview the image.

The Flask backend receives the uploaded image via a POST request.

The Pix2Tex model processes the image and extracts LaTeX code.

The result is sent back and displayed on the web page.

🧾 Example Output

Input:


Output (LaTeX):

E = mc^2

🤝 Contributing

Contributions are welcome!
If you’d like to improve the project:

1. Fork the repo

2. Create a new branch (feature/your-feature)

3. Commit your changes

4 .Submit a Pull Request

🌟 Acknowledgements

Pix2Tex
 for LaTeX OCR

Flask
 for backend framework

Pillow
 for image handling

 ✨ TeXForMath — Turning handwritten formulas into LaTeX magic!
