let shareIcon = document.querySelector(".share-icon")
let originalPost = document.querySelector(".original-poster");
let shareMobileActive = document.querySelector(".share-active");
let activeShareIcon = document.querySelector(".share-icon.share");

shareIcon.addEventListener('click', add)
activeShareIcon.addEventListener('click', remove);

function add() {
    shareMobileActive.classList.add("active")
}
function remove() {
    shareMobileActive.classList.remove("active")
}