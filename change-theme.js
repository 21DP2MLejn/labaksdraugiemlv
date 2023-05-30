var themeMode = 0;
function change_theme(){

if(themeMode == 0){
    document.getElementById("header").style.borderBottomColor = "#ffbb00";
    document.getElementById("header").style.boxShadow = "0px 3px 15px 5px #8a6501";
    localStorage.lineShadow = "0px 3px 15px 5px #8a6501";

    document.getElementById("profile-container").style.borderColor = "#ffbb00";
    document.getElementById("profile-container").style.boxShadow = "0px 0px 15px 10px #8a6501";
    localStorage.ContainerShadow = "0px 0px 15px 10px #8a6501";

    document.getElementById("profile-pic-box").style.borderColor = "#ffbb00";
    document.getElementById("profile-pic-box").style.boxShadow = "0px 0px 15px 5px #8a6501";
    localStorage.ProfileShadow = "0px 0px 15px 5px #8a6501";

    document.getElementById("edit-but").style.borderColor = "#ffbb00";
    document.getElementById("edit-but").style.backgroundColor = "#614702";

    document.getElementById("text").style.textShadow = "#ffbb00 2px 2px";
    localStorage.textShadow = "#ffbb00 2px 2px";

    var editButton = document.getElementById("edit-but");

    editButton.addEventListener("mouseover", function() {
    this.style.boxShadow = "0px 3px 15px 5px #8a6501";
    });

    editButton.addEventListener("mouseout", function() {
    this.style.boxShadow = ""; // Reset the box shadow when not hovering
    });

    document.getElementById("change-theme").style.borderColor = "#ffbb00";
    document.getElementById("change-theme").style.backgroundColor = "#614702";

    var editButton = document.getElementById("change-theme");

    editButton.addEventListener("mouseover", function() {
    this.style.boxShadow = "0px 3px 15px 5px #8a6501";
    });

    editButton.addEventListener("mouseout", function() {
    this.style.boxShadow = ""; // Reset the box shadow when not hovering
    });
    
    
    localStorage.bgColor = "#614702";
    localStorage.borderColor = '#ffbb00';
    themeMode = 1;
    

}else if(themeMode == 1){
    document.getElementById("header").style.borderBottomColor = "#0bdb23";
    document.getElementById("header").style.boxShadow = "0px 3px 15px 5px #01590b";
    localStorage.lineShadow = "0px 3px 15px 5px #01590b";

    document.getElementById("profile-container").style.borderColor = "#0bdb23";
    document.getElementById("profile-container").style.boxShadow = "0px 0px 15px 10px #01590b";
    localStorage.ContainerShadow = "0px 0px 15px 10px #01590b";

    document.getElementById("profile-pic-box").style.borderColor = "#0bdb23";
    document.getElementById("profile-pic-box").style.boxShadow = "0px 0px 15px 5px #01590b";
    localStorage.ProfileShadow = "0px 0px 15px 5px #01590b";

    document.getElementById("edit-but").style.borderColor = "#0bdb23";
    document.getElementById("edit-but").style.backgroundColor = "#014008";

    document.getElementById("text").style.textShadow = "#0bdb23 2px 2px";
    localStorage.textShadow = "#0bdb23 2px 2px";

    var editButton = document.getElementById("edit-but");

    editButton.addEventListener("mouseover", function() {
    this.style.boxShadow = "0px 3px 15px 5px #01590b";
    });

    editButton.addEventListener("mouseout", function() {
    this.style.boxShadow = ""; // Reset the box shadow when not hovering
    });

    document.getElementById("change-theme").style.borderColor = "#0bdb23";
    document.getElementById("change-theme").style.backgroundColor = "#014008";

    var editButton = document.getElementById("change-theme");

    editButton.addEventListener("mouseover", function() {
    this.style.boxShadow = "0px 3px 15px 5px #01590b";
    });

    editButton.addEventListener("mouseout", function() {
    this.style.boxShadow = ""; // Reset the box shadow when not hovering
    });
    
    
    localStorage.bgColor = "#014008";
    localStorage.borderColor = '#0bdb23';
    themeMode = 2;
}else if(themeMode == 2){
    document.getElementById("header").style.borderBottomColor = "#9311d1";
    document.getElementById("header").style.boxShadow = "0px 3px 15px 5px #430163";
    localStorage.lineShadow = "0px 3px 15px 5px #430163";

    document.getElementById("profile-container").style.borderColor = "#9311d1";
    document.getElementById("profile-container").style.boxShadow = "0px 0px 15px 10px #430163";
    localStorage.ContainerShadow = "0px 0px 15px 10px #430163";

    document.getElementById("profile-pic-box").style.borderColor = "#9311d1";
    document.getElementById("profile-pic-box").style.boxShadow = "0px 0px 15px 5px #430163";
    localStorage.ProfileShadow = "0px 0px 15px 5px #430163";

    document.getElementById("edit-but").style.borderColor = "#9311d1";
    document.getElementById("edit-but").style.backgroundColor = "#2f0145";

    document.getElementById("text").style.textShadow = "#9311d1 2px 2px";
    localStorage.textShadow = "#9311d1 2px 2px";

    var editButton = document.getElementById("edit-but");

    editButton.addEventListener("mouseover", function() {
    this.style.boxShadow = "0px 3px 15px 5px #430163";
    });

    editButton.addEventListener("mouseout", function() {
    this.style.boxShadow = ""; // Reset the box shadow when not hovering
    });

    document.getElementById("change-theme").style.borderColor = "#9311d1";
    document.getElementById("change-theme").style.backgroundColor = "#2f0145";

    var editButton = document.getElementById("change-theme");

    editButton.addEventListener("mouseover", function() {
    this.style.boxShadow = "0px 3px 15px 5px #430163";
    });

    editButton.addEventListener("mouseout", function() {
    this.style.boxShadow = ""; // Reset the box shadow when not hovering
    });
    
    
    localStorage.bgColor = "#2f0145";
    localStorage.borderColor = '#9311d1';
    themeMode = 3;
}else{
    document.getElementById("header").style.borderBottomColor = "#d63838";
    document.getElementById("header").style.boxShadow = "0px 3px 15px 5px #4a0000";
    localStorage.borderBottomColor = '0px 3px 15px 5px #d63838';
    localStorage.lineShadow = "0px 3px 15px 5px #4a0000";

    document.getElementById("profile-container").style.borderColor = "#d63838";
    document.getElementById("profile-container").style.boxShadow = "0px 0px 15px 10px #4a0000";
    localStorage.borderColor = "#d63838";

    document.getElementById("profile-pic-box").style.borderColor = "#d63838";
    document.getElementById("profile-pic-box").style.boxShadow = "0px 0px 15px 5px #4a0000";
    localStorage.ProfileShadow = "0px 0px 15px 5px #4a0000";

    document.getElementById("edit-but").style.borderColor = "#d63838";
    document.getElementById("edit-but").style.backgroundColor = "#2a0000";

    var editButton = document.getElementById("edit-but");

    editButton.addEventListener("mouseover", function() {
    this.style.boxShadow = "0px 3px 15px 5px #4a0000";
    });

    editButton.addEventListener("mouseout", function() {
    this.style.boxShadow = ""; // Reset the box shadow when not hovering
    });

    document.getElementById("change-theme").style.borderColor = "#d63838";
    document.getElementById("change-theme").style.backgroundColor = "#2a0000";

    var editButton = document.getElementById("change-theme");

    editButton.addEventListener("mouseover", function() {
    this.style.boxShadow = "0px 3px 15px 5px #4a0000";
    });

    editButton.addEventListener("mouseout", function() {
    this.style.boxShadow = ""; // Reset the box shadow when not hovering
    });

    document.getElementById("text").style.textShadow = "#d63838 2px 2px";
    localStorage.textShadow = "#d63838 2px 2px";
    
    localStorage.ContainerShadow = "0px 0px 15px 10px #4a0000";
    localStorage.bgColor = "#2a0000";
    themeMode = 0;
}
}
