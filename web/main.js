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
