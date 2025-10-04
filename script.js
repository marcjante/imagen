// Vista previa de la imagen original
const imageInput = document.getElementById('imageInput');
const previewImg = document.getElementById('previewImg');
const mosaicImg = document.getElementById('mosaicImg');
const downloadMosaicBtn = document.getElementById('downloadMosaicBtn');

imageInput.addEventListener('change', (e) => {
  const file = e.target.files[0];
  if (file) {
    previewImg.src = URL.createObjectURL(file);
    previewImg.style.display = 'block';
  }
});

// Descarga del mosaico
downloadMosaicBtn.addEventListener('click', () => {
  const link = document.createElement('a');
  link.href = mosaicImg.src;
  link.download = 'mosaico_hiperespectral.jpg';
  link.click();
});
