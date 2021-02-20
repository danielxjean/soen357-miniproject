var ready = (callback) => {
    if (document.readyState != "loading") callback();
    else document.addEventListener("DOMContentLoaded", callback);
}
ready(() => {
    document.querySelector(".header").style.height = window.innerHeight + "px";
})

var modal = document.getElementById('myModal1');
var images = document.getElementsByClassName('modal-image');
var modalImg1 = document.getElementById('img01');

for (var i = 0; i < images.length; i++) {
    var img = images[i];
    img.onclick = function(evt) {
        modal.style.display = 'block';
        modalImg1.src = this.src;
    };
}

modal.onclick = function() {
    modal.style.display = 'none';
};

var largeModal = document.getElementById('myModal2');
var largeImages = document.getElementsByClassName('large-modal-image');
var modalImg2 = document.getElementById('img02');

for (var i = 0; i < largeImages.length; i++) {
    var largeImg = largeImages[i];
    largeImg.onclick = function() {
        largeModal.style.display = 'block';
        modalImg2.src = this.src;
    };
}

largeModal.onclick = function() {
    largeModal.style.display = 'none';
};
