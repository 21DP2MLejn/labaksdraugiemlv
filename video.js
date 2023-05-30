
var videos = document.querySelectorAll('.video');

videos.forEach(function(video) {
    video.addEventListener('mouseover', function() {
        this.play();
    });

    video.addEventListener('mouseout', function() {
        this.pause();
        this.currentTime = 0;
    });
});



var volumeControls = document.querySelectorAll('.volume-control');
var card = document.querySelector('.card');

volumeControls.forEach(function(volumeControl) {
    var video = volumeControl.previousElementSibling;
    
    card.addEventListener('mouseenter', function() {
        volumeControl.style.display = 'block';
    });

    card.addEventListener('mouseleave', function() {
        volumeControl.style.display = 'none';
    });


    volumeControl.addEventListener('input', function() {
        video.volume = this.value;
    });

    volumeControl.addEventListener('input', function() {
        video.volume = this.value;
    });
});

