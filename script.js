function showSurprise() {
    document.getElementById("main-page").style.display = "none";
    document.getElementById("surprise-page").style.display = "block";
    
    document.getElementById("photo").classList.add("reveal");
    
}

function wrongPersonBtn() {
    document.getElementById("surprise-page").style.display = "none";
    document.getElementById("wrong-person").style.display = "block";
}
function click_again() {
    document.getElementById("wrong-person").style.display = "none";
    document.getElementById("right-person").style.display = "block";
}