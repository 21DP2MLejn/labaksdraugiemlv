function handleVideoUpload(event) {
    const uploadedVid = document.getElementById('uploadedVideo');
    const file = event.target.files[0];
    
    if (file) {
        const fileURL = URL.createObjectURL(file);
        uploadedVideo.src = fileURL;
    }
}
