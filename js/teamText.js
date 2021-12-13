var teamMembers = document.querySelectorAll(".team-member");

teamMembers.forEach(member =>
    member.addEventListener("click", function(e){
        rotateIcon(e);

        openBio(e);
    })
);

function rotateIcon(e) {
    try{
        var dropdownIcon = e.path[1].childNodes[3].childNodes[1];
        var dropdownState = dropdownIcon.style.transform;

        if(dropdownIcon.className != "dropdown-icon") {
            return;
        }

        if(dropdownState == "rotate(180deg)") {
            dropdownIcon.style.transform = "rotate(0deg)";
        } else {
            dropdownIcon.style.transform = "rotate(180deg)";
        }
        
    }catch(e){
        return(e);
    }
}

function openBio(e) {
    try{
        var bio = e.path[1].childNodes[5];

        var dropdownIcon = e.path[1].childNodes[3].childNodes[1];
        var dropdownState = dropdownIcon.style.transform;

        if(dropdownState == "rotate(180deg)") {
            bio.style.visibility = "visible";
        } else {
            bio.style.visibility = "hidden";
        }

    }catch(e){
        return(e);
    }
}