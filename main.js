function resize() {
    var konten = document.getElementsByClassName("content-awal");
    for (i = 0; i < konten.length; i++) {
        konten[i].style.width = window.innerWidth + 'px';
    }
}
window.addEventListener('resize', function () {
    resize();
});

function slide(target, el) {
    document.getElementById('target-0').setAttribute('class', '');
    document.getElementById('target-1').setAttribute('class', '');
    document.getElementById('target-2').setAttribute('class', '');
    document.getElementById('target-3').setAttribute('class', '');
    document.getElementById('target-4').setAttribute('class', '');
    el.setAttribute('class', 'active');
    document.getElementsByClassName('in-slider')[0].style.marginLeft = '-' + (target * window.innerWidth) + 'px';
}

resize();