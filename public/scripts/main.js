onload = function () {
    window.addEventListener('scroll', function () {
        var header = document.querySelector('#header');
        var headerCover = document.querySelector('#header-cover');

        if (window.scrollY >= 1) {
            header.classList.add('on');
            headerCover.classList.add('on');
        } else {
            header.classList.remove('on');
            headerCover.classList.remove('on');
        }
    });

    
    // var quill = new Quill('#editor', {
    //     theme: 'snow'
    // });
    
};