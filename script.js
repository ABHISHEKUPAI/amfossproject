const chooseBtn = document.getElementById('chooseBtn');
const convertBtn = document.getElementById('convertBtn');
const imageInput = document.getElementById('imageInput');
const previewArea = document.getElementById('previewArea');
let selectedFile = null;

chooseBtn.addEventListener('click', () => 
{
    imageInput.click();
});

imageInput.addEventListener('change', () => 
{
    const file = imageInput.files[0];
    if (file) 
    {
        selectedFile = file;
        const img = document.createElement('img');
        img.src = URL.createObjectURL(file);
        previewArea.innerHTML = ''; 
        previewArea.appendChild(img);
    } 
    else 
    {
        previewArea.innerHTML = '<p>No image selected yet.</p>';
    }
});
convertBtn.addEventListener('click', () => {
    if (!selectedFile) {
        alert('Please select an image first!');
        return;
    }
    const formData = new FormData();
    formData.append('image', selectedFile);

    fetch('/', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(text => {
        previewArea.innerHTML = "Converted LaTeX: " + text;
    });
});
