function dipslayImagesWithDelay() {
    let images = document.getElementsByClassName("skills-img");
    for (var i = 0; i < images.length; i++) {
        // for each iteration console.log a word
        // and make a pause after it
        (function (i) {
            setTimeout(function () {
                images[i].classList.toggle('fade');
            }, 150 * i);
        })(i);
    };
}

var hasBeenVisited = false;

window.onload = function() {
    document.getElementById("name-text").classList.toggle('fade');
    document.getElementById("position-text").classList.toggle('fade');
}

window.onscroll = function(ev) {
    console.log(window.offsetHeight );
    if ((window.innerHeight + window.pageYOffset) >= document.getElementById("skills").offsetHeight && (!this.hasBeenVisited)) {
        dipslayImagesWithDelay();
        this.hasBeenVisited = true;
    }
};

