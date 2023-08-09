const fileInput = document.getElementById('file-input');
const uploadForm = document.getElementById('upload-form');
const uploadButton = document.getElementById('upload-button');
const downloadLink = document.getElementById('download-link');
const fileDownloadLink = document.getElementById('file-download-link');

uploadButton.addEventListener('click', () => {
    const file = fileInput.files[0];
    if (file) {
        // Simulate file upload by showing the download link
        fileDownloadLink.href = URL.createObjectURL(file);
        fileDownloadLink.innerText = `Download ${file.name}`;
        downloadLink.classList.remove('hidden');
    }
});
