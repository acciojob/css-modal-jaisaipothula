// Get modal elements
var modal = document.getElementById("modal");
var btn = document.getElementById("openModal");
var span = document.getElementById("closeModal");

// Open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

// Close the modal when the user clicks on <span> (x)
span.onclick = function() {
    modal.style.display = "none";
}

// Close the modal when the user clicks anywhere outside of the modal
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

