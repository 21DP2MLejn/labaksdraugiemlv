function editnickbox(){

    var text = document.getElementById("edit-nick");
    var editbut = document.getElementById("edit-nick-but");
    var accbut = document.getElementById("acc-nick-but");

    if (text.style.display === "none"){
        text.style.display = "block";
        editbut.style.display = "none";
        accbut.style.display = "block";

    } else{
        text.style.display = "none";
        editbut.style.display = "block";
        accbut.style.display = "none";
    }
}

function editnamebox(){

    var text = document.getElementById("edit-name");
    var editbut = document.getElementById("edit-name-but");
    var accbut = document.getElementById("acc-name-but");

    if (text.style.display === "none"){
        text.style.display = "block";
        editbut.style.display = "none";
        accbut.style.display = "block";

    } else {
        text.style.display = "none";
        editbut.style.display = "block";
        accbut.style.display = "none";
    }
}

function editbdaybox(){

    var text = document.getElementById("edit-bday");
    var editbut = document.getElementById("edit-bday-but");
    var accbut = document.getElementById("acc-bday-but");

    if (text.style.display === "none"){
        text.style.display = "block";
        editbut.style.display = "none";
        accbut.style.display = "block";

    } else{
        text.style.display = "none";
        editbut.style.display = "block";
        accbut.style.display = "none";
    }
}

function editcountrybox(){

    var text = document.getElementById("edit-country");
    var editbut = document.getElementById("edit-country-but");
    var accbut = document.getElementById("acc-country-but");

    if (text.style.display === "none"){
        text.style.display = "block";
        editbut.style.display = "none";
        accbut.style.display = "block";

    } else{
        text.style.display = "none";
        editbut.style.display = "block";
        accbut.style.display = "none";
    }
}

function saveChanges() {
    // Retrieve the edited values
    var nickname = document.getElementById("edit-nick").value;
    var name = document.getElementById("edit-name").value;
    var birthdate = document.getElementById("edit-bday").value;
    var country = document.getElementById("edit-country").value;

    // Save the edited values to localStorage
    localStorage.setItem("nickname", nickname);
    localStorage.setItem("name", name);
    localStorage.setItem("birthdate", birthdate);
    localStorage.setItem("country", country);

    
    
}



