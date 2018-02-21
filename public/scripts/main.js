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

    var mailTitle = document.querySelectorAll(".mail-lists");
    var searchFieldInput = document.querySelector(".search-field-input")

    if ( querySelector.value('searchFieldInput') == 1 ) {
        
    }




    // var quill = new Quill('#editor', {
    //     theme: 'snow'
    // });
    
};