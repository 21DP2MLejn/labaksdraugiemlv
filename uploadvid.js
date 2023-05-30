function handleVideoUpload(event) {
    const uploadedVideo = document.getElementById('uploadedVideo');
    const file = event.target.files[0];
    
    if (file) {
        const fileURL = URL.createObjectURL(file);
        uploadedVideo.src = fileURL;
    }
}

function handleVideoUpload(event) {
    var videoUpload = document.getElementById('videoUpload');
    var uploadedVideo = document.getElementById('uploadedVideo');
    var uploadLabel = document.querySelector('.upload-label');

    // Retrieve the selected file
    var file = event.target.files[0];

    if (file) {
        // Disable the file upload button
        videoUpload.disabled = true;

        // Set the source of the video element to the uploaded file
        var videoURL = URL.createObjectURL(file);
        uploadedVideo.src = videoURL;

        // Show the video element
        uploadedVideo.style.display = 'block';

        // Hide the upload label
        uploadLabel.style.display = 'none';
    }
}