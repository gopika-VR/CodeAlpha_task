const gallery = document.getElementById("gallery");
const fileInput = document.getElementById("fileInput");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");

let selectedImage = null;

// Open file selector
function openFile() {
    fileInput.click();
}

// Add image
fileInput.addEventListener("change", () => {
    const file = fileInput.files[0];
    if (!file) return;

    const img = document.createElement("img");
    img.src = URL.createObjectURL(file);

    img.onclick = () => openLightbox(img);

    gallery.appendChild(img);
    fileInput.value = "";
});

// Open Lightbox
function openLightbox(img) {
    lightbox.style.display = "flex";
    lightboxImg.src = img.src;
    selectedImage = img;
}

// Close Lightbox
function closeLightbox() {
    lightbox.style.display = "none";
}

// Delete Image
function deleteImage() {
    if (selectedImage) {
        selectedImage.remove();
        closeLightbox();
    }
}